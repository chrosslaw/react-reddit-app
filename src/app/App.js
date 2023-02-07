import React from "react";
import "./App.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../features/api/apiSlice";
import { Header } from "../features/header/Header";
import { Subreddits } from "../features/subreddits/Subreddits";
// import { Reddits } from "../features/reddits/Reddits";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <div className="App">
        <Header />
        <Subreddits />
        <main>{/* <Reddits /> */}</main>
      </div>
    </ApiProvider>
  );
}

export default App;
