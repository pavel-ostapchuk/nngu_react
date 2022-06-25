import React, { useCallback, useState } from 'react';
import ChildComponent from './components/ChildComponent';

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrease = useCallback(() => setCounter((prev) => prev - 1), []);

  return (
    <div>
      <div>{counter}</div>
      <ChildComponent increase={increase} decrease={decrease} />
    </div>
  );
};

export default UseCallback;
