import React from "react";
import { Routes, Route, HashRouter, } from "react-router-dom";
import { Labs } from "./routes/AppUILabs";
import { Cats } from "./routes/AppUI";


function App(){
    return (
        <Routes>
            <Route path="/" element={<Labs />}></Route>
            <Route path="/Cats" element={<Cats />}></Route>
        </Routes>
    )
}

export default App;