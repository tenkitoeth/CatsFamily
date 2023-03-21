import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cats } from "./routes/AppUI";

function App(){
    return (
        <Routes>
            <Route exact path="/" element={<Cats />} />
        </Routes>
    )
}

export default App;