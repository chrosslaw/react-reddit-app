import React from "react";
import "./App.css";
import { Header } from "../components/header/Header";
// import { QuickBar } from "../components/quickbar/QuickBar";
import { Subreddits } from "../features/subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <QuickBar /> */}
      {/* <Subreddits /> */}
    </div>
  );
}

export default App;
