import { useState } from "react";
import "./App.css";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import { Routes, Route } from "react-router-dom";
import {HOME, LOGIN, NEWCLIENTE} from './Router/RouteApp'
import NewClient from "./Componet/NewClient";
import NewPage from "./Page/NewPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={HOME} element={<HomePage />} />
        <Route path={NEWCLIENTE} element={<NewPage />} />
        

      </Routes>
    </>
  );
}

export default App;
