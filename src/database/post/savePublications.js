async function savePublications(db, publicationData) {
    await db.run(`
    INSERT INTO publications(
        text,
        image,
        nickName,
        date,
        idUser,
        likes,
        usersLike
    ) VALUES(
        "${publicationData.text}",
        "${publicationData.image}",
        "${publicationData.nickName}",
        "${publicationData.date}",
        "${publicationData.idUser}",
        "${publicationData.like || 0}",
        "${publicationData.usersLike}"
    );`)
}

module.exports = savePublications