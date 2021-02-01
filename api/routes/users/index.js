const app = require('../../app')
const {
  facebookAuth,
  facebookCallback,
  googleAuth,
  googleCallback,
  generateUserToken,
  getAdminsAbout,
  getProfileDetails,
  getMeDetails,
  setProfileDetailsForUser,
  logout
} = require('../../controllers/usersController')
const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });


app.get('/api/users', (req, res) => {
  res.status(200).send({
    message: 'users API!'
  })
});



app.get("/api/users/logout", auth, logout);
app.get("/api/users/auth/facebook", facebookAuth());
app.get("/api/users/auth/facebook/callback", facebookCallback(), generateUserToken);
app.get("/api/users/auth/google", googleAuth());
app.get("/api/users/auth/google/callback", googleCallback(), generateUserToken);

app.get("/api/users/getAbout", getAdminsAbout);
app.get("/api/users/me", auth, getMeDetails)

app.post("/api/users/updateDetails", auth, setProfileDetailsForUser)
app.get("/api/users/:id", getProfileDetails)

module.exports = app
