import { useState } from "react"
import Form from "./Form"


function Header(){


    const[isopeN, setIsopen]= useState(false)
    const handleOpen = ()=>{
        setIsopen(true)
    }

    const handleClose =()=>{
        setIsopen(false)
    }


  

    return <div>
     <div className="bg-PrimeryColor items-center flex justify-between px-2 sm:px-11 py-2 sm:py-6">
        <h1 className="text-thirdColor text-2xl sm:text-3xl font-bold">NOTE</h1>
        <button onClick={handleOpen} className="bg-thirdColor text-SecondColor px-1 sm:px-9 rounded  sm:rounded-xl py-2 sm:py-3">Add note</button>
    </div>

      {
        isopeN==true?<Form handle={handleClose}/> : ""
      }
    
    </div> 
}
export default Header