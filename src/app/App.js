import React from "react";
import "./App.css";
import { Header } from "../features/header/Header";
import { Subreddits } from "../features/subreddits/Subreddits";
import { Reddits } from "../features/reddits/Reddits";

function App() {
  return (
    <div className="App">
      <Header />
      <Subreddits />
      <main>
        <Reddits />
      </main>
    </div>
  );
}

export default App;
