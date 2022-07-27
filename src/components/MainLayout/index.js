import './index.css';

import { useState, useEffect } from 'react';

import { todoList, taskList } from '../../Utils/data';
import { Board } from '../Board';

const MainLayout = () => {
  const [todoState, setTodoState] = useState([]);
  const [taskState, setTaskState] = useState([]);

  const todoNotEmpty = todoState.length > 0;

  useEffect(() => {
    setTodoState(todoList);
    setTaskState(taskList);
  }, [todoState, taskState]);

  return (
    <div className='main-container'>
      <div className='main-content'>
        <div className='main-board'>
          {todoNotEmpty ? (
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
