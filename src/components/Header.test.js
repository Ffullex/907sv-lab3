import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Проверяем заголовок', () => {
  render(<Header />);
  expect(screen.getByText('Лабораторная №3 Фильтруемый список в React')).toBeInTheDocument();
  expect(screen.getByText('To-do list')).toBeInTheDocument();
});
