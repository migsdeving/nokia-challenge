import React, { useEffect, useState } from "react";

async function getTasks() {
  let tasks;
  await fetch("http://localhost:8080/api/tasks/")
    .then((r) => r.json())
    .then((r) => {
      tasks = r;
    });
  return tasks;
}

function Tasks() {
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    (async () => {
      let gettingTasks = await getTasks();
      setCurrentTasks(gettingTasks);
    })();
  }, []);

  return (
    <div className="flex flex-col w-full p-20 0">
      <h2 className="text-xl mb-5 ">
        {" "}
        <b>Task List</b>
      </h2>
      <div className="overflow-auto px-5 border-2 border-black">
        {" "}
        <ul className="list-disc">
          {currentTasks
            .filter((t) => t.completed !== true)
            .map((t) => (
              <li key={t.id}>{t.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
