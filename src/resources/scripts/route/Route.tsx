import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hoge } from "../components/atoms/Hoge";
import { Fuga } from "../components/atoms/Fuga";

function RouterConfig() {
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
}

export default RouterConfig;
