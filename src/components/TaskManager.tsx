import { useState } from "react";

const useLatihan = () => {
  const [task, setTask] = useState<string[]>([]);

  const addTask = (newTask: string) => {
    setTask([...task, newTask]);
  };
  const removeTask = (index: number) => {
    setTask(task.filter((_, i) => i !== index));
  };
  const editTask = (index: number, newTask: string) => {
    setTask(task.map((t, i) => (i === index ? newTask : t)));
  };
  const clearTask = () => {
    setTask([]);
  };

  return { task, addTask, removeTask, editTask, clearTask };
};

interface TaskManagerProps { 
  judul:string;
}

const TaskManager = ({judul} : TaskManagerProps) => {
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [edit, setEdit] = useState<number | null>(null);
  const { task, addTask, removeTask, editTask, clearTask } = useLatihan();

  return (
    <>
    <h1 className="text-xl font-semibold mb-3">{judul}</h1>
    <section className="flex flex-col items-center font-semibold px-2 py-10 border rounded-xl w-max gap-2">
        <p>Add your task</p>
        <ul>
          {task.map((t, i) => (
            <li key={i} className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <p>{t}</p>
                <div className="flex gap-2">
                  <button onClick={() => removeTask(i)}>Remove</button>
                  <button onClick={() => setEdit(i)}>Edit</button>
                </div>
              </div>
              {edit === i && ( // Show edit input only if this task is being edited
                <div className="flex gap-2 border rounded-xl p-2">
                  <input
                    type="text"
                    className="bg-slate-50"
                    placeholder="Edit task"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      if (editInput.trim()) {
                        editTask(i, editInput);
                        setEditInput("");
                        setEdit(null); // Reset edit state
                      }
                    }}
                  >
                    Save
                  </button>
                  <button onClick={() => setEdit(null)}>Cancel</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="terserah lu bang"
          className="bg-slate-50 px-3 py-1 rounded-xl text-center border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (input.trim()) {
              addTask(input);
              setInput("");
            }
          }}
        >
          Add Task
        </button>
        <button onClick={() => clearTask()}>Clear Task</button>
      </section>
    </>
  )
}

export default TaskManager