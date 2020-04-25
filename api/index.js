const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));
// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

// Home route
  app.get("/api", (req, res) => {
    res.send("You Got It!");
  });
  
  // Mock APIs
  app.get("/api/users", (req, res) => {
    res.json([
      { name: "William", location: "Abu Dhabi" },
      { name: "Chris", location: "Vegas" }
    ]);
  });
  
  app.post("/api/user", (req, res) => {
    const { name, location } = req.body;
  
    res.send({ status: "User created", name, location });
  });
  