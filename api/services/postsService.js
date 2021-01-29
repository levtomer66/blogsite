const { db } = require("../initialize/db")

export const getPostsByCategory = async (category) => {

    let finder = {}
    if (category) {
        finder = {category: category};
    }

    const collection = (await db).collection('posts')
    console.log(`Looking for ${finder}`);
    return await collection.find(finder).toArray()
    // return [{_id: 1234, link: "#", title: "false", description: "story", imgurl: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg", authorimgurl: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"},
    // {_id: 1235, title: "false", link: "#", description: "story", imgurl: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg", authorimgurl: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"}
    // ]
}

export const savePost = async (title, content) => {
    const doc = {
        title: title,
        content: content
    }
    return await (await db).collection('posts').insertOne(doc);
}
