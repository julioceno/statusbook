const Database = require('./publicationsdb')

Database.then(async db => {
    // await db.run(`
    //     INSERT INTO posts(
    //         text,
    //         image,
    //         idUser,
    //         likes
    //     ) VALUES(
    //         'Bom dia',
    //         'imagem',
    //         '1',
    //         '4'
    //     ); 
    // `)

    const posts = await db.all('SELECT * FROM posts ')
    console.log(posts)
})