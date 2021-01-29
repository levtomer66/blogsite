const postsService = require('../services/postsService');

export const getPosts = async (req, res) => {
    const category = req.query.category;

    // Select the users collection from the database
    const posts = await postsService.getPostsByCategory(category);

    // Respond with a JSON string of all users in the collection
    res.status(200).send(posts)
  }

  export const getPostById = async (req, res) => {
    console.log("I know you want " + req.params.id);
    const postId = req.params.id;

    // Select the users collection from the database
    const posts = await postsService.getPostsById(postId);

    // Respond with a JSON string of all users in the collection
    res.status(200).send(posts)
  }

export const savePost = async (req, res) => {
    var doc = {
      _id: req.body.postId,
      postTitle: req.body.title,
      postDescription: req.body.postDescription,
      postContent: req.body.postContent,
      postImg: req.body.postImg,
      postCategory: req.body.postCategory,
      postIsPublished: false,
      authorId: req.user._id,
      authorName: `${req.user.firstName} ${req.user.familyName}`,
      authorPic: req.user.picPath,
      authorEmail: req.user.email
    }
    await postsService.savePost(doc);
    return res.status(201).json({msg: "post saved", post_id: doc._id})
}
