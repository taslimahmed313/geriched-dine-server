const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4nt1ond.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri)
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


async function run(){
    try{

    }
    finally{

    }
}
run().catch(e => console.log(e))


app.get("/", (req, res)=>{
    res.send("Super Dine is Running Soon---------!!!")
})

app.listen(port, ()=>{
    console.log(`Super Dine Server ${port}`)
})