import React, { useEffect, useState } from "react";

async function getTasks() {
  try {
    const res = await fetch("http://localhost:8080/api/tasks/");
    const tasks = await res.json();
    return tasks;
  } catch (err) {
    console.log(err);
    return [];
  }
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
    <div data-testid="tasks-component" className="flex flex-col w-full p-20 0">
      <h2 className="text-xl mb-5 ">
        <b>Task List</b>
      </h2>
      <div className="overflow-auto px-5 border-2 border-black">
        <ul data-testid="task-list" className="list-disc">
          {currentTasks
            .slice(1) //Removing the first Task that seems to be non relevant with id:0 and "Task" as its text
            .filter((t) => !t.completed) //Removing tasks that were already completed- Only showing uncompleted tasks
            .map((t) => (
              <li key={t.id}>{t.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
