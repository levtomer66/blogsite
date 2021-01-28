const app = require('../../app')
const {
  facebookAuth,
  facebookCallback,
  googleAuth,
  googleCallback,
  generateUserToken
} = require('../../controllers/usersController')



app.get('/api/users', (req, res) => {
  res.status(200).send({
    message: 'users API!'
  })
});



app.get("/api/users/auth/facebook", facebookAuth());
app.get("/api/users/auth/facebook/callback", facebookCallback(), generateUserToken);
app.get("/api/users/auth/google", googleAuth());
app.get("/api/users/auth/google/callback", googleCallback(), generateUserToken);

module.exports = app
