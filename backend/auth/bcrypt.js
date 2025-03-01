const bcrypt = require('bcryptjs')


module.exports = {
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        return hash
    },
    comparePassword(password, hash) {
        const compare = bcrypt.compareSync(password, hash)
        return compare
    }
}