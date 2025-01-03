import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='flex flex-col justify-start font-semibold'>
      <h1 className='text-2xl'>useState</h1>
      <p>This is the simple usage example of useState</p>
      <div className='text-blue-700 text-4xl'>{counter}</div>
      <button
        onClick={() => setCounter(counter + 1)}
        className=''
      >
        Tambah nilai
      </button>
    </div>
  );
}

export default UseState;
