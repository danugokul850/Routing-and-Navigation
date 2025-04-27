import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes , Route, Link } from "react-router";
import Login from "./src/Login";
import Home from "./src/Home";
import Biography from "./src/Biography";
import { Achievements } from "./src/Achievements";
import Quotes from "./src/Quotes";
import Journey from "./src/journey";



function App(){

    return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/biography" element={<Biography/>}></Route>
        <Route path="/achievements" element={<Achievements></Achievements>}></Route>
        <Route path="/quotes" element={<Quotes></Quotes>}></Route>
        <Route path="/journey" element={<Journey></Journey>}></Route>
        
       </Routes>

       </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
