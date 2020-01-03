const Tech = require('../models/Tech')

module.exports = {
    async index(req, res) {
        const techs = await Tech.findAll()
        res.json(techs)
    },
    async store(req, res) {
        const { name } = req.body
        
        const tech = await Tech.create({name})
        res.json(tech)
    }
}