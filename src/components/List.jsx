import React from 'react';
import Item from './Item';

export default function List({ list, deleteHandler, checkedHandler }) {
  if (list.length === 0) {
    return <>Пока нет элементов</>;
  }
  return (
    <ul>
      {list.map(item => (
        <Item
          id={item.id}
          key={item.id}
          title={item.title}
          isChecked={item.isChecked}
          deleteHandler={deleteHandler}
          checkedHandler={checkedHandler}
        />
      ))}
    </ul>
  );
}
