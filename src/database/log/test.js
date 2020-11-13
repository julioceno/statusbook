const Database = require('./usersdb')

Database.then(async db => {
    // await db.run(`
    //     INSERT INTO users (
    //         name,
    //         nickName,
    //         email,
    //         password 
    //     ) VALUES (
    //         'Julio Nepomuceno',
    //         'Julin',
    //         'julioreplay@gmail.com',
    //         'julioreplay2018'
    //     );
    //  `)

    const user = await db.all('SELECT * FROM users ')
    console.log(user)

})