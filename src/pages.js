const usersDatabase = require('./database/log/usersdb')
const saveUser = require('./database/log/saveUser')
const publicationsDatabase = require('./database/post/publicationsdb')
const savePublications = require('./database/post/savePublications')

// dados do usuário
let nickName;
let id;

module.exports = {
    // Fase de rotas de login e register
    
    index(req, resp) {
       return resp.render( "index.html")
    },

    register(req, resp) {
        return resp.render('register.html')
    },

    async loginUser(req, resp) {
        const fieldLogin = req.body
        try {

            const db = await usersDatabase
            const checkingEmail = await db.all(`SELECT email FROM users WHERE  password = "${fieldLogin.password}" `)
            const checkingPassword = await db.all(`SELECT password FROM users WHERE  password = "${fieldLogin.password}" `)

            if (checkingEmail[0] &&  checkingPassword[0]) {
                resp.redirect('/feed')
            } 

            if (!checkingEmail[0] || !checkingPassword[0]) {
                resp.redirect('/' + '?message=emailousenhaincorreto')
            }

            nickName= await db.all(`SELECT nickName FROM users WHERE  password = "${fieldLogin.password}" `)
            id = await db.all(`SELECT id FROM users WHERE  password = "${fieldLogin.password}" `)


        } catch(e) {
            resp.send('Erro no banco de dados')
            console.log(e)
        }


    },

    async saveDataUser(req, resp) {
        // console.log(req.body)
        const fieldRegister = req.body

        try {
            const db = await usersDatabase

            const checkingPassword = await db.all(`SELECT password FROM users  WHERE password = "${fieldRegister.password}"`)
            if (checkingPassword[0]) {
                resp.redirect('/register' + '?message=senhaemuso')
                return
            }

            // Cadastrando usuário
            await saveUser(db, {
                name: fieldRegister.name,
                nickName: fieldRegister.nickName,
                email: fieldRegister.email,
                password: fieldRegister.password
            })

            resp.redirect('/')

        } catch(e) {
            console.log(e)
            resp.send('erro no banco de dados')
        }
    },

    // feed

    async pageFeed(req, resp) {
        const db = await publicationsDatabase
        const publications = await db.all(`SELECT * FROM publications`) // Aqui está pegando o array de resultados que será aplicado o for lá no html

        console.log(publications)

        return resp.render('page-feed.html', { publications })
     }, 

     async publish(req, resp) {
        const fieldPublish = req.body

       
        try {

            const db = await publicationsDatabase
            const date = new Date


            await savePublications(db, {
                text: fieldPublish.text,
                image: fieldPublish.image,
                nickName: nickName[0].nickName,
                date:`${date.getHours()}:${date.getMinutes()} | ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
                idUser: id[0].id,
                likes: 0,
                usersLike: []
            })

            resp.redirect('/feed')

        } catch(e) {

            resp.redirect('/feed' + '?message=error')
            console.log(e)
        }
    }
}