import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NotFound } from "./view/notFound/notFound";
import { Details } from "./view/details/Details";
import { Dashboard } from "./view/dashboard/Dashboard";
import { Header } from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="contact/:contactId" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
