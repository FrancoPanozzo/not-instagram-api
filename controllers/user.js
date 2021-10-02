const User = require('../models/user')

module.exports.getAll = async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
}

module.exports.get = async (req, res) => {
    const id = req.params.id
    const user = await User.findByPk(id)
    res.send(user)
}

module.exports.post = async (req, res) => {
    console.log(req.body)
    const user = await User.create(req.body)
    res.send(user)
}

module.exports.put = async (req, res) => {
    const id = req.params.id
    await User.update(req.body, {
        where: { id },
    })

    // Send back the updated user by calling the GET controller
    module.exports.get(req, res)
}

module.exports.delete = async (req, res) => {
    const id = req.params.id
    await User.destroy({
        where: { id },
    })
    res.status(200)
    res.send()
}
