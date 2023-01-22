import React from "react";
import "./App.css";
import { Header } from "../components/header/Header";
import { QuickBar } from "../components/quickbar/QuickBar";

function App() {
  return (
    <div className="App">
      <Header />

      <QuickBar />
    </div>
  );
}

export default App;
