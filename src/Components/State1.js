// import React, {useState} from "react";
import { useState } from "react"


console.log("I am outside the compoent")
let a = 10

 const State1 = () => {
    let [coins,setCoins] = useState(100) // coins = 101

    console.log("I am inside the component")

    function increaseCoins(){
        // coins = coins+1
        setCoins(coins+1) // replaces
    }

     
    function increaseA(){
        a = a+1
        console.log(a)
    }


    return(
        <div>
             <h1>{coins}</h1> {/* 100 */}
             <button onClick={increaseCoins}>Increase Coins</button>

             <h1>{a}</h1> {/* 10 */}
             <button onClick={increaseA}>Increase A</button>
        </div>
    )
}

export default State1;




 // let x   =   useState(100)
    // console.log("x",x[0])
    // console.log("y",x[1])

// hello => setHello 
//     kite => setKite 
//     coins => setCoins
//     helloWorld => setHelloWorld


