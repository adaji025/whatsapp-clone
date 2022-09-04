import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import UseLocalStorage from "./hooks/UseLocalStorage";
import { ContactsProvider } from "./context/ContactsContext";

function App() {
  const [id, setId] = UseLocalStorage("id");
  return (
    <>
      {id ? (
        <ContactsProvider>
          <Dashboard id={id} />
        </ContactsProvider>
      ) : (
        <Login onIdSubmit={setId} />
      )}
    </>
  );
}

export default App;
