let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

exports.insertQuote = (author, quote)=>{
  let msg = "A new quote has been inserted in the database";
    MongoClient.connect(url, (err,db) => {
      if (err){
        msg = err;
        throw err;
      }
      let dbo = db.db("quotes");
      let newQuote = { author, quote };
      dbo.collection("quotes").insertOne(newQuote, (err, res)=>{
        if(err){
          msg = err;
          throw err;
        }
        console.log("A new quote has been inserted in the database");
        console.log("respuesta: "+res);
        db.close();
      })
    });
    return msg;
}