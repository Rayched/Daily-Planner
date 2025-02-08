import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routing/Home";
import Detail from "./routing/Detail";
import styled from "styled-components";

function Routers(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/:charNm" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;