import React, { FC, ChangeEventHandler, useState } from 'react';
import s from './login-page.module.css';

const enum ValidationErrors {
  FieldRequired = 'Значение не может быть пустым',
}

const LoginPage: FC = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setName(value);
    setNameError('');
  };

  const handleLogin = () => {
    let isValid = true;
    const nameTrimmed = name.trim();
    if (!nameTrimmed) {
      isValid = false;
      setNameError(ValidationErrors.FieldRequired);
    }

    if (!isValid) return;

    localStorage.setItem('user', nameTrimmed);
  };

  return (
    <div className={s.loginContainer}>
      <h3 style={{ whiteSpace: 'nowrap' }}>OTUS Course</h3>
      <div className={s.loginBlock}>
        <label>Логин</label>
        <input value={name} onChange={handleChangeName} placeholder="Введите ваш логин" />
        {!!nameError && <pre style={{ color: 'red', margin: '0px', padding: '0px' }}>{nameError}</pre>}
      </div>
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default LoginPage;
