import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./homepage.css"

const initdata={
    num1:0,
    num2:0
}

const Homepage = () => {
    const [data,setdata]=useState(initdata)
    const [apidata, setApidata] = useState([])

    const handlechange=(e)=>{
        const {name,value}=e.target 
       setdata({
        ...data,
       [name]:value
       })
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
         axios.post(`http://localhost:4000/post`,{
            num1:data.num1,
            num2:data.num2
         })
        //  .then((res)=> res.json())
         .then((res)=>setApidata(res.data))
         }
    console.log(apidata)
 const {num1,num2}=data
  return (
    <div style={{marginTop:"50px"}}>
        <form action="" onSubmit={handlesubmit}>
        <input type="number" placeholder='Enter first digit' name="num1" value={num1} onChange={handlechange} />
        <input type="number" placeholder='Enter second digit' name="num2" value={num2} onChange={handlechange} />
        <input type="submit"  />
        </form>

        <div className='display'>
        
          {apidata && apidata.map((el,ind)=>{
           return <div key={ind}>{el}</div>
          })}
        </div>
    </div>
  )
}

export default Homepage