import './index.css';

import { useState, useEffect } from 'react';
import { Board } from '../Board';

const todoList = [
  { title: 'Group Task 1', description: 'Jan - Mar', id: 1 },
  { title: 'Group Task 2', description: 'Apr - Jun', id: 2 },
  { title: 'Group Task 3', description: 'Jul - Sep', id: 3 },
  { title: 'Group Task 4', description: 'Oct - Des', id: 4 },
  { title: 'Group Task 5', description: 'Oct - Des', id: 5 },
];

const taskList = [
  {
    name: 'This Task 1. todo id 1',
    todo_id: 1,
    progress_percentage: 40,
    id: 10,
  },
  {
    name: 'This Task 2. todo id 2',
    todo_id: 2,
    progress_percentage: 10,
    id: 11,
  },
  {
    name: 'This Task 3. todo id 1',
    todo_id: 1,
    progress_percentage: 50,
    id: 12,
  },
  {
    name: 'This Task 4. todo id 3',
    todo_id: 3,
    progress_percentage: 40,
    id: 13,
  },
  {
    name: 'This Task 5. todo id 4',
    todo_id: 4,
    progress_percentage: 20,
    id: 15,
  },
  {
    name: 'This Task 6. todo id 1',
    todo_id: 1,
    progress_percentage: 20,
    id: 16,
  },
  {
    name: 'This Task 7. todo id 1',
    todo_id: 1,
    progress_percentage: 20,
    id: 17,
  },
  {
    name: 'This Task 8. todo id 1',
    todo_id: 1,
    progress_percentage: 20,
    id: 18,
  },
  {
    name: 'This Task 9. todo id 1',
    todo_id: 1,
    progress_percentage: 40,
    id: 19,
  },
];

const MainLayout = () => {
  const [todoState, setTodoState] = useState(todoList);
  const [taskState, setTaskState] = useState(taskList);

  const todoLength = todoState.length > 0;

  useEffect(() => {
    setTodoState(todoList);
    setTaskState(taskList);
  }, [todoState, taskState]);

  return (
    <div className='main-container'>
      <div className='main-content'>
        <div className='main-board'>
          {todoLength ? (
            <Board tasks={taskState} todos={todoState} />
          ) : (
            <p>No Task</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
