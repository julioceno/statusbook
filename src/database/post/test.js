const Database = require('./publicationsdb')

Database.then(async db => {
    // await db.run(`
    //     INSERT INTO publications(
    //         text,
    //         image,
    //         name,
    //         date,
    //         idUser,
    //         likes,
    //         usersLike
    //     ) VALUES(
    //         'Bom dia',
    //         'imagem',
    //         'julio',
    //         'data aqui',
    //         '1',
    //         '4',
    //         '[8,9,3,4]'
    //     ); 
    // `)

    const posts = await db.all('SELECT *  FROM publications  ')
    console.log(posts)
})