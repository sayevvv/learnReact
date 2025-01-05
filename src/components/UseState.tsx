import { useState } from 'react'

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='flex flex-col justify-start font-semibold'>
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
