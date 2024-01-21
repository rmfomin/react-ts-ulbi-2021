import React from 'react';

// TODO [7] Универсальный компонент для любого списка
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// для корректной работы с дженериками пишем через function лбъявление
export default function List<T> (props: ListProps<T>) {

  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
}