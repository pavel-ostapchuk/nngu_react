import React, { FC, memo } from 'react';

interface IProps {
  increase: () => void;
  decrease: () => void;
}
const ChildComponent: FC<IProps> = ({ increase, decrease }) => {
  console.log('child rerendered');
  return (
    <div>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default memo(ChildComponent);
