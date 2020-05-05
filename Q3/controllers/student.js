const User = require('../models/student');

module.exports = {
    create: async (req, res) => {
        const {
            name,
            bio,
            website
        } = req.body;
        const user = await User.create({
            name,
            bio,
            website
        })

        return res.send(user)
    },

}