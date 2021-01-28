const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
const connectToDatabase = async function (uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

export const getUserByEmail = async (email) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('users')
  return db.collection("users").findOne({email: email});
}

export const createUser = async (userObj) => {
    // Get a database connection, cached or otherwise,
    // using the connection string environment variable as the argument
    const db = await connectToDatabase(process.env.MONGODB_URI)

    // Select the "users" collection from the database
    const collection = await db.collection('users')

    db.collection("users").update({}, userObj,{upsert: true}, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    });

  }
