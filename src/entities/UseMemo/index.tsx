import React, { useState } from 'react';
import Counter from './components/Counter';
import IsTen from './components/IsTen';

const UseMemo = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  return (
    <div>
      <button type="button" onClick={() => setCounter1((prev) => prev + 1)}>
        Увеличить счетчик 1
      </button>
      <Counter value={counter1} />
      <hr />
      <button type="button" onClick={() => setCounter2((prev) => prev + 1)}>
        Увеличить счетчик 2
      </button>
      <Counter value={counter2} />
      <IsTen value={counter2} />
    </div>
  );
};

export default UseMemo;
