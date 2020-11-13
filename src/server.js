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

    .get('/', pages.index)
    .get('/register', pages.register)
    .post('/login-user', pages.loginUser)
    .post('/save-user', pages.saveDataUser)

    app.listen(8080)