import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

const App = () => {
  // TODO [4] useState<IUser[]>([]); - типизация useState - что в стейте
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);


  useEffect(() => {
    // TODO [5] получить пользователей при первом рендере
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      // TODO [6] получение данный - это как черный ящик. Поэтому типизируем ответ axios.get<IUser[]
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      console.warn(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (e) {
      console.warn(e)
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

      {/*// TODO [8] используем List*/}

      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} /> }
      />

      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} /> }
      />
    </div>
  );
};

export default App;