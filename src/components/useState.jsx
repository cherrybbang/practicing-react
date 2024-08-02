import { useEffect, useState } from 'react';

const State = () => {
  const [number, setNumber] = useState(5); // useState(0)이면 초기값이 0, 5니까 초기값이 5.

  useEffect(() => {
    console.log(`You clicked ${number} times.`)
  }, [number]);

  return (
    <div>
      <p>현재 숫자: <b>{number}</b></p>
      <button onClick={() => setNumber(number + 1)}>+ 1</button>
      <button onClick={() => setNumber(number - 1)}>- 1</button>
    </div>
  );
};

export default State;