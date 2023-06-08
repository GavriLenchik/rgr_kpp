import { React, useState } from 'react';

const AddItem = ({ handleClickAdd, isNight }) => {
  const [value, setValue] = useState('');

  // Устанавливает текущее значение input в переменную value при любом изменении в input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  
  const handleKey = (e) => {
    const isEnterKey = e.key === 'Enter';
    const hasValue = value.length > 0;
  
    if (isEnterKey && hasValue) {
      const task = {
        status: false,
        text: value,
        id: Date.now(), // Генеруємо унікальний id з використанням Date.now()
      };
      setValue('');
      handleClickAdd(task);
    }
  };

  return (
    <form className="new-task" name="addTask">
      <input
        className={`new-task__input ${
          isNight && 'new-task__input_night-theme_active'
        }`}
        placeholder="Додати нову задачу"
        name="addNewTask"
        id="addNewTask"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
        type="text"
        minLength={1}
        maxLength={30}
        autoFocus
      ></input>
    </form>
  );
};
export default AddItem;
