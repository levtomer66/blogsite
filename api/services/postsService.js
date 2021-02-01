const { db } = require("../initialize/db")

export const getPostsById = async (postId) => {
    return await (await db).collection('posts').findOne({_id: require('mongodb').ObjectID(postId)});
}

export const getPostsByCategory = async (category) => {

    let finder = {}
    if (category) {
        finder = {category: category};
    }

    const collection = (await db).collection('posts')
    return await collection.find(finder).toArray()
}

export const savePost = async (id, doc) => {
    return await (await db).collection('posts').updateOne({_id: require('mongodb').ObjectID(id)}, { $set: doc }, { upsert: true});
}
