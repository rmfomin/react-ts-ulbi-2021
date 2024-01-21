import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
// import UserList from "./components/UserList";
import {IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";

const App = () => {
  // TODO [4] useState<IUser[]>([]); - типизация useState - что в стейте
  const [users, setUsers] = useState<IUser[]>([]);


  useEffect(() => {
    // TODO [5] получить пользователей при первом рендере
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      // TODO [6] получение данный - это как черный ящик. Поэтому типизируем ответ axios.get<IUser[]
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      Работает!
      
      <Card
        width='300px'
        height='200px'
        variant={CardVariant.outlined}
        onClick={(num) => {
          console.log('КЛИК', num);
        }}>
        1
        <button>Кнопка карточки</button>
      </Card>
      {/*<UserList users={users} />*/}
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} /> } />
    </div>
  );
};

export default App;

// остановился на 23.29
// https://youtu.be/92qcfeWxtnY?si=12Szp2R6_S-QwvMz&t=1409