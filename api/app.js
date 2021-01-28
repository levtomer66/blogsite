const app = require('express')()
const cookies = require("cookie-parser");

app.use(cookies());
require("./middleware/passport/index"); // load passport strategies

module.exports = app
