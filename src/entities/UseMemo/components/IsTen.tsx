import React, { FC, memo, useMemo } from 'react';

interface IProps {
  value: number;
}
const IsTen: FC<IProps> = ({ value }) => {
  console.log('IsTen RErendered');
  const isEqual = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return value === 10 ? 'Число равно 10' : 'Число не равно 10';
  }, [value]);
  return <div>{isEqual}</div>;
};

export default memo(IsTen, (_, nextProps) => {
  if (nextProps.value === 10) {
    return false;
  }
  return true;
});
