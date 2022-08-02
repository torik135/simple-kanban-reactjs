import { useEffect, useContext } from 'react';

import { BoardContext, TaskContext } from '../../Context/Context';
import { Board } from '../Board';

const MainLayout = () => {
  const { todoState } = useContext(BoardContext);
  const { taskState } = useContext(TaskContext);

  const todoNotEmpty = todoState.length > 0;

  useEffect(() => {}, [todoState, taskState]);

  return (
    <div className='p-2 pl-[24px] pt-[70px] h-screen'>
      <div className='h-full'>
        <div className='flex p-2 overflow-x-scroll'>
          {todoNotEmpty ? <Board /> : <p>No Task</p>}
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
