module.exports = {
    index(req, resp) {
       return resp.render( "index.html")
    },

    register(req, resp) {
        return resp.render('register.html')
    },

    saveUser(req, resp) {
        console.log(req.body)
        const field = req.body

        try {
            

        } catch(e) {
            resp.send('erro no banco de dados')
        }
    }
}