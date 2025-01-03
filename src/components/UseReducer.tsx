import { useReducer, useState } from "react";

// Define types
type Data = {
  id: number; // Unique identifier
  nama: string;
  alamat: string;
};

type DataState = {
  datas: Data[];
};

type DataAction =
  | { type: "ADD_DATA"; payload: string }
  | { type: "REMOVE_DATA"; payload: number };

const reducer = (state: DataState, action: DataAction): DataState => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        datas: [
          ...state.datas,
          { id: Date.now(), nama: action.payload, alamat: "" },
        ],
      };
    case "REMOVE_DATA":
      return {
        ...state,
        datas: state.datas.filter((data) => data.id !== action.payload),
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { datas: [] });
  const [text, setText] = useState<string>("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD_DATA", payload: text });
      setText(""); // Clear the input field
    }
  };

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_DATA", payload: id });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleAdd}>Add Data</button>

      <ul>
        {state.datas.map((data) => (
          <li key={data.id}>
            {data.nama}{" "}
            <button onClick={() => handleRemove(data.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
