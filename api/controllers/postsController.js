const postsService = require('../services/postsService');

export const getPosts = async (req, res) => {
    const category = req.query.category;

    // Select the users collection from the database
    const posts = await postsService.getPostsByCategory(category);

    // Respond with a JSON string of all users in the collection
    res.status(200).send(posts)
  }

export const savePost = async (req, res) => {
    console.log(req.body.title);
    await postsService.savePost(req.body.title, req.body.content);
    return res.status(201).json({msg: "post created"})
}
