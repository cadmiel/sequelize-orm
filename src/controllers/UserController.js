const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()
        res.json(users)
    },
    async store(req, res) {
        const { name, email, lastname } = req.body
        
        const user = await User.create({name, email, lastname})
        res.json(user)
    }
}