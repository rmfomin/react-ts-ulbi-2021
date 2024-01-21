import React, {PropsWithChildren} from 'react';
import {IUser} from "../types/types";

// TODO [3] Декомпозируем лист в один item
interface UserItemProps {
  user: IUser;
}

const UserItem: React.FC<PropsWithChildren<UserItemProps>> = ({user}) => {
  return (
    <div>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  );
};

export default UserItem;