import React from 'react';

export default function Item({ id, title, deleteHandler, isChecked, checkedHandler }) {
  return (
    <li>
      <input
        checked={isChecked}
        onChange={e => checkedHandler(id, e.target.checked)}
        data-testid="checkbox"
        type="checkbox"
      />
      {title}
      <button onClick={() => deleteHandler(id)} data-testid="deleter-button">
        Delete
      </button>
    </li>
  );
}
