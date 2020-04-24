const User = require('../model/User')

module.exports = {
    index(req, res) {
        User.all()
        .then((results) => {
            const users = results.rows

            return res.send({users})
        })
    },
    async post(req, res) {
        const userId = await User.create(req.body)

        return res.send({userId})
    },
    async show(req, res) {
        let results = await User.find(req.params.id)
        const user = results.rows[0]

        if (!user) return res.send('User not found.')

        return res.send({user})
    },
    async put(req, res) {
        let results = await User.find(req.params.id)
        let user = results.rows[0]

        if (!user) return res.send('User not found.')
    
        results = await User.update(req.body, req.params.id)

        results = await User.find(req.params.id)
        user = results.rows[0]

        return res.send({user})
    },
    async delete(req, res) {
        let results = await User.find(req.params.id)
        const user = results.rows[0]

        if (!user) return res.send("User not found.")

        results = await User.delete(req.params.id)

        results = await User.all()

        const users = results.rows

        return res.send({users})
    }
}