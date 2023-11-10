
import React, {useState} from "react";


// function hello(){
//     console.log("I am executed")
//     return 0
// }


const LazyInitilization = () => {
  
    const [a, setA] = useState(
        ()=>{console.log("I am executed")
        return 0}) 



    return(
        <div>
            <h1>Value of A is: {a}</h1>
            <button onClick={()=>setA(a+1)}>Increment</button>
        </div>
    )
}

export default LazyInitilization;



// for(let i=1; i<=10; i++){
//     console.log(i)
// }


// load/reload 

// render or re-render