async function saveUser(db, dataUser) {
   return await db.run(`
     INSERT INTO users (
         name,
         nickName,
         email, 
         password
     ) VALUES (
         "${dataUser.name}",
         "${dataUser.nickName}",
         "${dataUser.email}",
         "${dataUser.password}"
     );
    `)
}

module.exports = saveUser