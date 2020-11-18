async function updateLike(db, id, like) {
    await db.run(`UPDATE publications SET likes = ${1} WHERE id = "${id}"`)
}