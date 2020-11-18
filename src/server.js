const express = require("express")
const app = express()
const path = require("path")

// Configurar template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', { // Vai buscar meus arquivos da views
    express: app,
    noCache: true
})


/* Configurando o servidor */
const pages = require('./pages')

app
    // Receber dados na url
    .use(express.urlencoded({ extended: true }))

    .use(express.static('public'))

     // Fases de rotas de login e register
    .get('/', pages.index)
    .get('/register', pages.register)
    .post('/login', pages.loginUser)
    .post('/save-user', pages.saveDataUser)
    
    // feed
    .get('/feed', pages.pageFeed)
    .post('/post-publish', pages.publish)
    .put('/like-publication', ()=> {
        console.log('put')
    })

    app.listen(8080)

    // app.put('/player/:id', (req, res) => {
    //     const player = res.send(dataBase.adding({
    //          id: req.params.id,
    //          player: req.body.player,
    //          team: req.body.team
    //      }))
     
    //      return player
    //  })