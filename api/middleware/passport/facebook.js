const passport = require("passport");
const fbStrategy = require("passport-facebook");
const { handleSignIn } = require('../../controllers/usersController')

const FacebookStrategy = fbStrategy.Strategy;

const facebookAppSecret = "80a67336a5a0a1249259a92f9b838708";
const FACEBOOK_APP_ID = "1182595942212387";

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
