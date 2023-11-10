import React, {useState} from "react";


const BasicForm = () => {
   const [name, setName] = useState("") //abhishek

   console.log("Name is getting updated", name)

   function handleChange(event){
    //    console.log(event.target.value)
      setName(event.target.value)
   }
      


    return(
        <div>
              <input type="text" placeholder="Enter ur Name" 
                onChange={handleChange}
              />

              <p>{name}</p>
        </div>
    )
}

export default BasicForm;