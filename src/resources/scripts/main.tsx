// Build something cool. <3
import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, RouterProviderProps, Routes } from "react-router-dom";
import { Hoge } from "./components/atoms/Hoge";
import { Fuga } from "./components/atoms/Fuga";

const RouterConfig = (props: RouterProviderProps): JSX.Element => {
    console.log(props);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Hoge list={props} />} />
                    <Route path="/fuga" element={<Fuga />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

const container: any = document.getElementById("app");
const props = JSON.parse(container.dataset.props); // data-propsの内容を取得

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterConfig {...props} />);
