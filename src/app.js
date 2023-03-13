import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Labs } from "./routes/AppUILabs";
import { Cats } from "./routes/AppUI";


function App(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/555Labs" element={<Labs />}></Route>
                <Route path="/Cats/" element={<Cats />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default App;