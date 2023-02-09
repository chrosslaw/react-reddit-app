import React from "react";
import "./App.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../features/api/apiSlice";
import Home from "../features/home/Home";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <div className="App">
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
