const Database = require('./publicationsdb');

Database.then(async db => {

    const id = 3
    // const like = await db.all(`SELECT likes FROM publications WHERE id = ${id}`)
    // // console.log(like)

    // await db.run(`UPDATE publications SET likes = ${ like[0].likes + 1} WHERE id = ${id}` )

    // const publication = await db.run(`SELECT * FROM publications WHERE id = ${id}`)
    // console.log(publication)






    const usersLike = await db.all(`SELECT usersLike FROM publications  WHERE id = "1" `)
    const array = (usersLike[0].usersLike).split(',')

    let idUsersLike
    let idNotRegistered
    let indice 

    array.forEach((e, i) => {
            if (e == id) {
                idUsersLike = e
                indice = i
            } else {
                idNotRegistered = true
            }       
    })

    if (idNotRegistered) array.push(id)

    if (idUsersLike) array.splice(indice, 1)


    // const newArray = array.push(idUsersLike)

    await db.run(`UPDATE publications SET UsersLike = ${newArray}`)

    console.log(array)
})