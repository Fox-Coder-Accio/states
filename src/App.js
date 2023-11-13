import React from "react";
import State1 from "./Components/State1";
// import {State1} from "./Components/State1";
import Counter from "./Components/Counter";
import Objects from "./Components/Objects";
import BasicForm from "./Components/BasicForm";
import BasicForm2 from "./Components/BasicForm2";
import LazyInitilization from "./Components/LazyInitilization";
import Async from "./Components/Async";

import "./style.css";

const App = () => {

    return(
        <div>
            {/* <State1 /> */}
            {/* <Counter /> */}
            {/* <Objects /> */}
            {/* <BasicForm /> */}
            {/* <BasicForm2 /> */}
            {/* <LazyInitilization /> */}
            <Async />
        </div>
    )
}

export default App;