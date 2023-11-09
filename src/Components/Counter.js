import React, {useState} from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";

const Counter = () => {
     const [count,setCount] = useState(0)


    //  function increaseCount(){
    //      if(count<10){
    //         setCount(count+1)
    //      }
    //  }

    return(
        <div>       
            <h2>{count}</h2>
            <button onClick={()=> count<10?setCount(count+1): "" }> <FaPlus className="icons"/> </button>
            <button onClick={()=>setCount(count-1)}> <FaMinus  className="icons" /> </button>
            <button onClick={()=>setCount(0)}> <MdLockReset  className="icons" /> </button>
        </div>
    )
}

export default Counter;