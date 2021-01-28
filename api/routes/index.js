const app = require('../app')
const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });

app.get('/api', auth, (req, res) => {
    res.status(200).send({
        message: 'BLOGSITE API!'
    })
})

module.exports = app
