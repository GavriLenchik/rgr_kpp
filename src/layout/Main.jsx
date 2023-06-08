import { useEffect, useState } from 'react';
import Title from '../components/Title';
import AddItem from '../components/AddItem';
import { ListItems } from '../components/ListItems';
import UserForm from '../components/UserForm';
import { LanguageProvider } from '../components/LanguageContext';
import LocalizedButton from '../components/LocalizedButton';
import axios from 'axios';

const Main = ({ handleSwitchTheme, isNight }) => {
  
  // Переменная для списка задач
  const [listItems, setListItems] = useState([]);

  // Обработчик добавления новой задачи
  const handleAddItem = (data) => {
    const newList = [...listItems, data];
    setListItems(newList);
  };

  // Обработчик удаления задачи
  const handleDeleteItem = (id) => {
    const newList = listItems.filter((el) => el.id !== id);
    setListItems(newList);
  };

  // Обработчик сохранения статуса Исполненно
  const handleCompleteStatusUpdate = (item) => {
    const newList = listItems.map(el => {
      if (el.id === item.id) {
        el.status = item.status;
      };
      return el;
    });
    setListItems(newList);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('/save-data', { listItems });
      console.log(response.data); // реагування на відповідь сервера
    } catch (error) {
      console.error(error);
    }
  };

  // Записывает в LocalStorage обновленный массив с задачами при его изменении. Пустой массив не записывает. 
  useEffect(() => {
    if (listItems.length > 0) {
      localStorage.setItem('userList', JSON.stringify(listItems));
    }
  }, [listItems]);

  // Выгружаю массив с задачами при перезагрузке страницы
  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem('userList'));
    if (userList) {
      setListItems(userList);
    }
  }, []);

  return (
    <LanguageProvider>
    <div className="main">
      <Title handleSwitchTheme={handleSwitchTheme} />
      <button className={'btn btn-primary btn-lg btn-down'} onClick={handleButtonClick}>Завантажити список</button> 
      <button className={'btn btn-success btn-lg'}>Змінити мову інтерфейсу</button>
      <AddItem handleClickAdd={handleAddItem} isNight={isNight}  />
      <ListItems
        listItems={listItems}
        handleDeleteItem={handleDeleteItem}
        isNight={isNight}
        handleCompleteStatusUpdate={handleCompleteStatusUpdate}
      />
      <UserForm />
    </div>
    </LanguageProvider>
    
  );
};

export { Main };
