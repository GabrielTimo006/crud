import "./App.css";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import { Routes, Route } from "react-router-dom";
import { HOME, LOGIN, NEWCLIENTE } from "./Router/RouteApp";
import NewPage from "./Page/NewPage";
import EditPage from "./Page/EditPage";
import ViewPage from "./Page/ViewPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={HOME} element={<HomePage />} />
        <Route path={NEWCLIENTE} element={<NewPage />} />
        <Route path="/editcliente/:id" element={<EditPage />} />
        <Route path="/viewcliente/:id" element={<ViewPage />} />
      </Routes>
    </>
  );
}

export default App;