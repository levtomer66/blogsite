const passport = require("passport");
const { Strategy } = require("passport-jwt");
const userService = require('../../services/usersService')


const jwtSecret = process.env.JWTSECRET || "bgadim-secret";
const opts = {
	secretOrKey: jwtSecret,
	jwtFromRequest: function (req) {
		let token = req && req.cookies && req.cookies["bgadimToken"];
		return token;
	},
};
passport.use(
	new Strategy(opts, async function (jwt_payload, done) {
		let user = {}
        try {
			user = await userService.getUserByEmail(jwt_payload.user.email);
        } catch (e) {
            done(new Error("failed to auth", null));
        }
		if (user) {
			done(null, user);
		}
	})
);
