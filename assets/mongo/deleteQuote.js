let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

exports.deleteQuote = (id)=>{
  console.log(id);
  let msg = "the quote with id "+id +" has been deleted";
    MongoClient.connect(url, { useUnifiedTopology: true },(err,db) => {
      if (err){
        msg = err;
        throw err;
      }
      let dbo = db.db("quotes");
      dbo.collection("quotes").deleteOne({"_id":id },(err, res)=>{
        if(err){
          msg = err;
          throw err;
        }
        db.close();
      })
    });
    return msg;
}