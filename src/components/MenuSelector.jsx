import React from "react";

function MenuSelector(props) {
  const SetSelectedMenu = props.SetSelectedMenu;

  return (
    <div className="flex flex-col   border-r-2 border-black">
      <button
        onClick={() => SetSelectedMenu("home")}
        className="text-2xl p-3 px-9 "
      >
        Home
      </button>
      <button
        onClick={() => SetSelectedMenu("tasks")}
        className="text-2xl p-3 px-9 border-y-2 border-black"
      >
        Tasks
      </button>
    </div>
  );
}

export default MenuSelector;
