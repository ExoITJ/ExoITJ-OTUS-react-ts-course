import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Todo } from './todo';

describe('Todo component', () => {
  it('should render todos', () => {
    render(<Todo />);
    const allTodos = screen.getAllByTestId('todo');

    expect(allTodos).toHaveLength(2);
  });
  it('should add todo', async () => {
    render(<Todo />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    await userEvent.type(input, 'new');
    await userEvent.click(button);
    const allTodos = screen.getAllByTestId('todo');
    expect(allTodos).toHaveLength(3);
    expect(allTodos[allTodos.length - 1]).toHaveTextContent('new');
  });
});
