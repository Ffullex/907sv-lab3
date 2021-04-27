import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';

const list = [
  {
    id: 3,
    title: 'Frau'
  },
  {
    id: 4,
    title: 'Makkie'
  }
];
test('Список корректно отображает пустой массив элементов', () => {
  const list = [];
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);

  expect(screen.getByText('Пока нет элементов')).toBeInTheDocument();
});

test('Список корректно отображает массив элементов', () => {
  const deleteHandler = jest.fn();
  render(<List list={list} deleteHandler={deleteHandler} />);

  for (let item of list) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  }

  for (let button of screen.getAllByTestId('deleter-button')) {
    fireEvent.click(button);
  }
  expect(deleteHandler).toBeCalledTimes(list.length);
});

test('Элементы отображают чекбоксы в нужном состоянии', () => {
  render(<List list={list} />);
  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    expect(checkboxes[i]).toHaveAttribute(list[i].isChecked ? 'checked' : 'type');
  }
});

test('При клике на чекбокс элемента вызывается checkHandler с нужными параметрами', () => {
  const checkedHandler = jest.fn();
  render(<List list={list} checkedHandler={checkedHandler} />);
  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    fireEvent.click(checkboxes[i]);
    expect(checkedHandler).toBeCalledWith(list[i].id, !list[i].isChecked);
  }
});
