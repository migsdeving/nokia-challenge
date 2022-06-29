import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuSelector from "./components/MenuSelector";
import Home from "./components/Home";
import Tasks from "./components/Tasks";

function App() {
  const [selectedMenu, SetSelectedMenu] = useState("home");
  return (
    <>
      <div className=" h-screen">
        <Header />
        <div className="flex h-[600px] mt-10  border-2 border-black ">
          <MenuSelector SetSelectedMenu={SetSelectedMenu} />
          {selectedMenu === "home" ? (
            <Home />
          ) : selectedMenu === "tasks" ? (
            <Tasks />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
