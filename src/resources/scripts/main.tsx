// Build something cool. <3
import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hoge } from "./components/atoms/Hoge";
import { Fuga } from "./components/atoms/Fuga";

const RouterConfig = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hoge />} />
                    <Route path="/fuga" element={<Fuga />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

const container: any = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterConfig />);
