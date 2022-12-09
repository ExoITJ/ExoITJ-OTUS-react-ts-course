import React, { ChangeEvent, FC, useState } from 'react';
// import { getMathResult } from '.';

const Calculator: FC = () => {
  const [value, setValue] = useState('2+2*2');
  const [result, setResult] = useState(6);

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleMathValue = () => {
    //const res = getMathResult(value);
    //res && setResult(res);
  };

  return (
    <div
      style={{
        width: 'calc(100vw - 100px)',
        height: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px' }}>
        <input value={value} onChange={handleChangeValue} />
        <button onClick={handleMathValue} style={{ margin: '10px 0px' }}>
          Посчитать
        </button>
        <input value={result} disabled />
      </div>
    </div>
  );
};

export default Calculator;
