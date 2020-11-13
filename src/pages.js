const Database = require('./database/db')
const saveUser = require('./database/saveUser')

module.exports = {
    index(req, resp) {
       return resp.render( "index.html")
    },

    register(req, resp) {
        return resp.render('register.html')
    },

    async loginUser(req, resp) {
        const fieldLogin = req.body

        try {

            const db = await Database
            const checkingEmail = await db.all(`SELECT * FROM users WHERE  email = "${fieldLogin.email}" `)
            const checkingPassword = await db.all(`SELECT * FROM users WHERE  password = "${fieldLogin.password}" `)
    
            if (checkingEmail[0] &&  checkingPassword[0]) {
                resp.render('page-main.html')
            } 

            if (!checkingEmail[0] || !checkingPassword[0]) {
                resp.redirect('/' + '?message=emailousenhaincorreto')
            }


        } catch(e) {
            resp.send('Erro no banco de dados')
            console.log(e)
        }


    },

    async saveDataUser(req, resp) {
        // console.log(req.body)
        const fieldRegister = req.body

        try {
            const db = await Database


            const checkingPassword = await db.all(`SELECT * FROM users  WHERE password = "${fieldRegister.password}"`)
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
    }
}