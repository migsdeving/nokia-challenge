import React, { useState } from "react";
import Header from "./components/Header";
import MenuSelector from "./components/MenuSelector";
import Home from "./components/Home";
import Tasks from "./components/Tasks";

function App() {
  const [selectedMenu, SetSelectedMenu] = useState("home"); //this state controls what component is rendered on the page
  return (
    <>
      <div className=" h-screen">
        <Header />
        <div className="flex h-[600px] mt-10  border-2 border-black ">
          <MenuSelector SetSelectedMenu={SetSelectedMenu} />
          {selectedMenu === "home" ? (
            <Home />
          ) : (
            selectedMenu === "tasks" && <Tasks />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
