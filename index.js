const express = require("express");
const rootRouter=require('./routes/index');

const {User,connectDb}=require('./db');
connectDb();
const cors=require("cors");
const app=express();

app.use(cors());
app.use(express.json());
app.use("https://cash-ex-api.vercel.app/",rootRouter);

app.listen(9000,()=>{
    console.log("server started at local host 9000");
})

