import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header /> Tom Portfolio
      <Navbar />
      <Card /> project 1 https://nrouhanizdeh.github.io/Night-In-App/
      <Card /> project 2 https://github.com/nrouhanizdeh/Fresh-Feast
      <Card /> homework 1 https://simonthm5.github.io/02-Homework/
      <Card /> homework 2 https://simonthm5.github.io/homework6/
      <Card /> homework 3 https://github.com/simonthm5/Work-Day-Scheduler
      <Card /> homework 4 https://github.com/simonthm5/Node-README-Generator
      <Card /> profile https://www.linkedin.com/in/thomasmsimon/
    </div>
  );
}

export default App;
