let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

exports.getAllQuotes = ()=>{
  let msg = "all quotes has been read";
    MongoClient.connect(url, (err,db) => {
      if (err){
        msg = err;
        throw err;
      }
      let dbo = db.db("quotes");
      dbo.collection("quotes").find({}).toArray((err, res)=>{
        if(err){
          msg = err;
          throw err;
        }
        msg = res.author;
        console.log(res);
        db.close();
      })
    });
    return msg;
}