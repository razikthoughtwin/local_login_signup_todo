import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import TodoList from "./component/TodoList";
import Header from "./component/Header";
import Signup from "./component/Signup";
import Login from "./component/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

const ProtectedRoute = () => {
  let isauthenticated = localStorage.getItem("token");
  return isauthenticated != true ? <Navigate to="/" /> : <Outlet />;
};
let isauthenticated = localStorage.getItem("token");

console.log(isauthenticated);

function App() {
  return (
    <>

      <BrowserRouter>
      <Header/>
        <Routes>
          {!isauthenticated ? (
            <Route exact path="/" element={<Login/>} />
          ) : (
            <Route exact path="/dasboard" element={<TodoList/>} />
          )}
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
