import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Labs } from "./routes/AppUILabs";
import { Cats } from "./routes/AppUI";


function App(){
    return (
        <BrowserRouter basename="/555Labs">
            <Routes>
                <Route path="/555Labs" element={<Labs />} />
                <Route path="/Cats" element={<Cats />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;