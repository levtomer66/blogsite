const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const { handleSignIn } = require('../../controllers/usersController')

const GoogleStrategy = googleStrategy.Strategy;

const googleClientSecret = "LY5CdNY6W8fvzSAm2dlsGwM4";
const googleClientId = "590743938959-0p0fr2i5ke7u9dq9t8rg86ekusf7b3f3.apps.googleusercontent.com";

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
