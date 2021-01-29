const { db } = require("../initialize/db")

export const getUserByEmail = async (email) => {
  // const collection = await db.collection('users')
  return (await db).collection("users").findOne({email: email});
}

export const createUser = async (userObj) => {
    // Select the "users" collection from the database
    const collection = (await db).collection('users')

    db.collection("users").update({}, userObj,{upsert: true}, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });

  }
