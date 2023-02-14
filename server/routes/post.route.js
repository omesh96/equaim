import express from "express"
import { logic } from "../logic/logic.js";

const PostRoute=express.Router();

PostRoute.post("/",(req,res)=>{
    const {num1,num2}=req.body
    let ans=[]
    try{
      let x=logic(num1,num2)
      if(x){
      let  carry= x[0].map((el,ind)=>{
        //   for(let i=0; i<el[0].length; i++){
           return `carry : ${el} `
         // }
        })
        let sum=x[1].map((el,ind)=>{
          //   for(let i=0; i<el[0].length; i++){
             return ` sum : ${el}`
           // }
          })
         
          for(let i=0; i<sum.length; i++){
              let obj={};
              obj[i]=`${carry[i]}, ${sum[i]}`
              ans.push(obj[i])
          }
      }
      res.status(200).json(ans)
    }
    catch(err){
        console.log(err)
    }
})

export default PostRoute