import './index.css';

import { useState, useEffect, useContext } from 'react';

import { BoardContext, TaskContext } from '../../Context/Context';
import { todoList, taskList } from '../../Utils/data';
import { Board } from '../Board';

const MainLayout = () => {
  // const [todoState, setTodoState] = useState([]);
  // const [taskState, setTaskState] = useState([]);

  const { todoState, setTodoState } = useContext(BoardContext);
  const { taskState, setTaskState } = useContext(TaskContext);

  const todoNotEmpty = todoState.length > 0;

  useEffect(() => {
    setTodoState(todoList);
    setTaskState(taskList);
  }, [todoState]);

  return (
    <div className='main-container'>
      <div className='main-content'>
        <div className='main-board'>
          {todoNotEmpty ? <Board /> : <p>No Task</p>}
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
