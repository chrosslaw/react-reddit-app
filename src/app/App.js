import React from "react";
import "./App.css";
import { Header } from "../components/header/Header";
import { Subreddits } from "../features/subreddits/Subreddits";
import { Reddits } from "../features/reddits/Reddits";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Reddits />
      </main>
      <Subreddits />
    </div>
  );
}

export default App;
