 import express from "express"
 import dotenv from "dotenv"
 import cors from "cors"
import PostRoute from "./routes/post.route.js";

 dotenv.config()
 const app=express();

 app.use(express.json());
 app.use(cors());

 // post route
 app.use("/post",PostRoute)

 app.listen(4000,(req,res)=>{
    console.log("server is running at http://localhost:4000")
 })

