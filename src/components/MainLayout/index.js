import './index.css';

import { useEffect, useContext } from 'react';

import { BoardContext, TaskContext } from '../../Context/Context';
// import { todoList, taskList } from '../../Utils/data';
import { Board } from '../Board';

const MainLayout = () => {
  const { todoState } = useContext(BoardContext);
  const { taskState } = useContext(TaskContext);

  const todoNotEmpty = todoState.length > 0;

  useEffect(() => {}, [todoState, taskState]);

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
