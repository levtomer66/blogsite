const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const { handleSignIn } = require('../../controllers/usersController')

const GoogleStrategy = googleStrategy.Strategy;

const googleClientSecret = "m0PMgxEDvsu5F4LT1ZM0eivO";
const googleClientId = "1080971073403-8vrie6ndgc15jg7dpscsv2dbea5diogj.apps.googleusercontent.com";

passport.use(
	"google",
	new GoogleStrategy(
		{
			clientID: googleClientId,
			clientSecret: googleClientSecret,
			callbackURL: "http://localhost:3001/api/users/auth/google/callback",
            scope: ["profile", "email", "user.birthday.read", "user.gender.read"],
		},
		handleSignIn
	)
);
