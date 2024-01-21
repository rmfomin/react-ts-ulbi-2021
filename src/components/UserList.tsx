import React, {PropsWithChildren} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

// TODO [2] Импортирование типа массив IUser[]
interface UserListProps {
  users: IUser[];
}

const UserList: React.FC<PropsWithChildren<UserListProps>> = ({users}) => {
  return (
    <div>
      {users.map(user =>
        <UserItem key={user.id} user={user}/>
      )}
    </div>
  );
};

export default UserList;