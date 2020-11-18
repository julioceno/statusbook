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

    const posts = await db.all(`SELECT *  FROM publications  WHERE id = "1" `)
    // console.log(posts)

    const array = (posts[0].usersLike).split(',')


    let ids 
   
    // for(let i = 0 ; i <  array.length ; i++) {
    //     if (array[i] == 3) ids = array[i]
    // }

    array.forEach(e => {
            if (e == 2) {
                ids = e
            }        
    })

    console.log(ids)

})