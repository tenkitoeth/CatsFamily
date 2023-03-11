import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Labs } from "./routes/AppUILabs";
import { Cats } from "./routes/AppUI";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Labs />} />
                <Route path="/dady" element={<Cats />} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default App;