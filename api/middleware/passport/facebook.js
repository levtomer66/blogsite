const passport = require("passport");
const fbStrategy = require("passport-facebook");
const { handleSignIn } = require('../../controllers/usersController')

const FacebookStrategy = fbStrategy.Strategy;

const facebookAppSecret = "9435969cd990f4c5664465ee35b0dc0c";
const FACEBOOK_APP_ID = "378926780158738";

passport.use(
	"facebook",
	new FacebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: facebookAppSecret,
			callbackURL: "http://localhost:3001/api/users/auth/facebook/callback",
			profileFields: [
				"email",
				"first_name",
				"last_name",
				"gender",
				"birthday",
				"picture.width(70)",
			],

		},
		handleSignIn
	)
);
