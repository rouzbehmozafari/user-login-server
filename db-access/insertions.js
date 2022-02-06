const {_getDb} = require('./_getDb')

async function createNewUser (user){
    const db = await _getDb()
    const created =  await db.collection('users').insertOne(user)
    return created
}

module.exports = {createNewUser}