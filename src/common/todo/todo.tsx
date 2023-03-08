import React, { useState, useCallback, ChangeEvent } from 'react';

export const Todo = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<string[]>(['first', 'second']);

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setInput(value);
    },
    [input],
  );

  const handleClick = useCallback(() => {
    setTodos((prev) => [...prev, input]);
    setInput('');
  }, [input]);

  return (
    <div>
      <input value={input} onChange={handleChangeInput} />
      <button onClick={handleClick}>Add todos</button>
      <h4>TODOS</h4>
      <ul>
        {todos.map((item, index) => (
          <li key={`${index}+${item}`} data-testid="todo">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
