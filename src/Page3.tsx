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
            <li key={i} className="flex gap-2">
              <p>{t}</p>
              <button onClick={() => removeTask(i)}>Remove</button>
              <button onClick={() => editTask(i, `${t} (edited)`)}>Edit</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="isi wot"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            if(input.trim()) {
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
