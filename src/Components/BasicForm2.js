import React, {useState} from "react";


const BasicForm2 = () => {
   const [name, setName] = useState("") 
//    const [btnClick, setBtnClick] = useState(false)
  const [finalName, setFinalName] = useState("")

   console.log("Name is getting updated", name)

//    console.log("btnClick", btnClick)


   function handleChange(event){
       setName(event.target.value)
    //    setBtnClick(false)
   }

   function handleSubmit(){
        //  setBtnClick(true)
        setFinalName(name)
         setName("")
   }
       
   

    return(
        <div>
              <input type="text" placeholder="Enter ur Name" 
                onChange={handleChange}
                value={name}
              />
              <button
                 onClick={handleSubmit}
              >Submit</button>

             <p>{finalName}</p>
        </div>
    )
}

export default BasicForm2;



// controlled and Uncontrolled Components