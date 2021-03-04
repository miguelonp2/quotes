const express = require("express");
const { insertQuote } = require("../mongo/insertQuote");

/**
 * EXPRESS CONFIGURATION
 */
const port = 8080;
const server = express();
server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

/**
 * MIDDLEWARES
 */

server.use(express.json());

/**
 * ENDPOINTS
 */

server.post("/quote", (req, res) => {
  const addQuote = require("./../mongo/insertQuote");
  let msg = addQuote.insertQuote("test", "el testeador testeando");
  res.send({msg});
});

server.get("/allQuotes", (req, res)=>{
    const getQuote = require("./../mongo/getAllQuotes");
    let msg = getQuote.getAllQuotes();
    res.send({msg});
});

server.delete("/quote/:id",(req,res)=>{
    let {id} = req.params;
    const deleteQuote = require("./../mongo/deleteQuote");
    let msg = deleteQuote.deleteQuote(id);
    res.send({msg});
});