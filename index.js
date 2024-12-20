const express = require("express");
const rootRouter=require('./routes/index');

const {User,connectDb}=require('./db');
connectDb();
const cors=require("cors");
const app=express();
app.options('*', cors()); // Enable preflight requests for all routes
app.use(cors({ 
    origin: "https://cash-ex-frontend.vercel.app", // Replace with your frontend URL
methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
credentials: true,
     allowedHeaders: ['Content-Type', 'Authorization'], 
}));
app.use(express.json());


app.use("/api",rootRouter);
app.get("/test", (req, res) => {
  res.send("API is working!");
});
app.listen(9000,()=>{
    console.log("server started at local host 9000");
})

