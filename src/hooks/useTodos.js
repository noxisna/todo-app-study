import { useState } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  // TODO: 담당자 A가 추가 - addTodo, deleteTodo
  // TODO: 담당자 B가 추가 - toggleTodo, filteredTodos

  return { todos };
}