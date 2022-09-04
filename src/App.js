import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const [id, setId] = UseLocalStorage("id");
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
