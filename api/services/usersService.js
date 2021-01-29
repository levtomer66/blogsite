const { db } = require("../initialize/db")

export const getUserByEmail = async (email) => {
  // const collection = await db.collection('users')
  const user = await (await db).collection("users").findOne({email: email});
  return user;
}

export const createUser = async (userObj) => {
    console.log("want to create pra:")
    const user = await ((await db).collection("users").updateOne({}, { $set: userObj },{upsert: true}));
    if (result.result.nModified < 0) {
      throw new Error("User upsert failed")
    }
    console.log(`${result.result.nModified} document inserted`);
    return user;
}
