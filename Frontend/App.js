import "./App.css";
import NavBar from "./layout/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./layout/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Service/Login";
import Register from "./Service/Register";
import View from "./Service/View";
import Edit from "./Service/Edit";
import Admin from "./Service/Admin";
import EditAdmin from "./Service/EditAdmin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} exact path="/"></Route>
          <Route element={<Login />} exact path="/login"></Route>
          <Route element={<Register />} exact path="/register"></Route>
          <Route element={<View />} exact path="/profile"></Route>
          <Route element={<Edit />} exact path="/edit/:id"></Route>
          <Route element={<Admin />} exact path="/admin"></Route>
          <Route element={<EditAdmin />} exact path="/editAdmin/:id"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
