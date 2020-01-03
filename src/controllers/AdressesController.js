const Adress = require('../models/Adress')
const User = require('../models/User')

module.exports = {
    async index(req, res) {

        const { user_id } = req.params

        const user = await User.findByPk(user_id,
            {
                include: { association: 'adresses' }
            }
        )

        res.json(user)
    },
    async store(req, res) {
        const { zipcode, number, street } = req.body
        const { user_id } = req.params

        const user = await User.findByPk(user_id)

        if (!user) {
            res.status(400).json({ error: 'user not found' })
        }

        const adress = await Adress.create({ zipcode, number, street, user_id })

        res.json(adress)
    }
}