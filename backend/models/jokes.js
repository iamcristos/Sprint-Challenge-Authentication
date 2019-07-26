const db = require('../database/dbConfig');

module.exports = {
    findUser(id) {
        return db('users')
            .where({
                id
            })
            .first()
    },
    addUser(user) {
        return db('users')
            .insert(user)
            .then(([id]) => id ? this.findUser(id) : null)
    },

    find(username) {
        return db('users')
            .where({
                username
            })
            .then(ids => ids.length ? ids : null)
    }

}