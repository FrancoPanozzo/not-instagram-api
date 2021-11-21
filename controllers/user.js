const model = require('../models/user')

module.exports.getAll = async (req, res) => {
    const allUsers = await model.findAll()
    res.json(allUsers)
}

module.exports.get = async (req, res) => {
    const id = req.params.id
    const user = await model.findByPk(id)
    res.json(user)
}

module.exports.post = async (req, res) => {
    try {
        const user = await model.create(req.body)
        res.json(user)
    } catch (error) {
        res.status(500).json(error.errors)
    }
}

module.exports.put = async (req, res) => {
    const id = req.params.id
    await model.update(req.body, {
        where: { id },
    })

    // Send back the updated user by calling the GET controller
    module.exports.get(req, res)
}

module.exports.delete = async (req, res) => {
    const id = req.params.id
    await model.destroy({
        where: { id },
    })
    res.status(200)
    res.json({
        text: 'User deleted succesfully',
    })
}
