import './index.css';

import { useState } from 'react';
import { Board } from '../Board';

const todoList = [
  { title: 'Group Task 1', description: 'Jan - Mar', id: 1 },
  { title: 'Group Task 2', description: 'Apr - Jun', id: 2 },
  { title: 'Group Task 3', description: 'Jul - Sep', id: 3 },
  { title: 'Group Task 4', description: 'Oct - Des', id: 4 },
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
    id: 14,
  },
];

const MainLayout = () => {
  const [todoState, setTodoState] = useState(todoList);
  const [taskState, setTaskState] = useState(taskList);

  const todoLength = todoState.length > 0;

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
