const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const { user_id } = req.params
        const user = await User.findByPk(user_id,
            {
                include: { association: 'techs' }
            }
        )
        res.json(user.techs)
    },
    async store(req, res) {
        const { name } = req.body
        const { user_id } = req.params

        const user = await User.findByPk(user_id)

        if (!user) {
            res.status(400).json({ error: 'user not found' })
        }

        const [tech, created] = await Tech.findOrCreate({ where: { name } })

        await user.addTech(tech)

        res.json(tech)

    },
    async delete(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            res.status(400).json({ error: 'user not found' })
        }

        const tech = await Tech.findOne({ where: { name } })

        await user.removeTech(tech)

        res.json()

    }
}