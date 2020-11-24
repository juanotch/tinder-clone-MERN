import express from "express"
import mongoose from "mongoose"
import Cards from "./dbCards.js"
import Cors from "cors"

//app config

const app = express();
const port = process.env.PORT || 8001
const connection_url=`mongodb+srv://admin:345YrrVQ59iFjXH@cluster0.swow4.mongodb.net/tinderdb?retryWrites=true&w=majority`


//middleawares

app.use(express.json());
app.use(Cors())


//db config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//api entpoitns

app.get("/",(re,res)=>{
    res.status(200).send("hello Juan")

})


app.post("/tinder/card",(req,res)=>{
 const dbCard = req.body;

 Cards.create(dbCard,(err,data)=> {
     if (err) {
         res.satatus(500).send(err)
     }else{
         res.status(201).send(data)
     }
 })

});

app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//345YrrVQ59iFjXH

//listener

app.listen(port,()=>{
    console.log("server iniciado")
})

