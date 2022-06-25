import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './UseRef.module.scss';

const UseRef = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const ulRef = useRef<HTMLUListElement>(null);
  const numbersRef = useRef<number[]>(numbers);
  numbersRef.current = numbers;

  const handleAddNum = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  const handleScroll = useCallback(() => console.log('Скролл!', numbersRef.current), []);

  const subOn = () => {
    ulRef.current?.addEventListener('scroll', handleScroll);
  };

  const unsub = () => {
    ulRef.current?.removeEventListener('scroll', handleScroll);
  };

  return (
    <div>
      <div className={style.btns_wrapper}>
        <button type="button" className={style.btn} onClick={handleAddNum}>
          Добавить число
        </button>
        <button type="button" className={style.btn} onClick={subOn}>
          Sub on Scroll
        </button>
        <button type="button" className={style.btn} onClick={unsub}>
          Unsub from Scroll
        </button>
      </div>
      <ul ref={ulRef} className={style.number_list}>
        {numbers.map((item, i) => (
          <li key={`${item + i}`} className={style.number_item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseRef;
