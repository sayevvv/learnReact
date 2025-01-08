import { Link } from "react-router-dom";
import { useState } from "react";

const useUseState = () => {
  const [counter, setCounter] = useState(1);

  const addCounter = () => {
    setCounter(counter + 1);
  };
  const subCounter = () => {
    setCounter(counter - 1);
  };

  return { counter, addCounter, subCounter };
};

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

const Page3 = () => {
  const { counter, addCounter, subCounter } = useUseState();
  const { task, addTask, removeTask, editTask, clearTask } = useLatihan();
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [edit, setEdit] = useState<number | null>(null); // Track the index being edited or null

  return (
    <div className="my-10 mx-20 flex flex-col gap-10">
      <p className="text-2xl font-semibold text-blue-600">Page 3</p>
      <p className="font-semibold text-slate-600">
        ini playground nyoba2 advanced usage of state (ngasah otak jane)
      </p>
      <section className="flex flex-col items-center font-semibold px-2 py-10 border rounded-xl w-max gap-2">
        <h1>{counter}</h1>
        <div className="flex gap-4">
          <button onClick={addCounter}>Add</button>
          <button onClick={subCounter}>Decrease</button>
        </div>
      </section>
      <section className="flex flex-col items-center font-semibold px-2 py-10 border rounded-xl w-max gap-2">
        <p>Task Exercise</p>
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
          className="bg-slate-50 px-3 py-1 rounded-xl"
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
      <Link to="/page2">Back to page 2</Link>
    </div>
  );
};

export default Page3;

