const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("mydb");
  dbo.createCollection("quotes", (err, res) => {
    if (err) {
      res.msg = err;
      throw err;
    }
    db.close();
    console.log("collection created");
  });
});