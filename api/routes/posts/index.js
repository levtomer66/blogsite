const app = require('../../app')
const postsController = require("../../controllers/postsController");

app.get("/api/posts", postsController.getPosts);
app.post("/api/posts", postsController.savePost);
module.exports = app
