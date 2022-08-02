/*
task.percentage
  progress-color = task-progress_graph / 100 = 150 / 100 = 1.5
*/

import { useState, useEffect, useContext } from 'react';
import { FaEllipsisH as ThreeDotsIcon } from 'react-icons/fa';
import { TaskOpt } from '../TaskOpt';
import { BoardContext, TaskContext } from '../../Context/Context';

const Task = (props) => {
  const { tasks, delAct, editAct, moveRAct, moveLAct } = props;
  const [idState, setIdState] = useState('');
  const { taskState } = useContext(TaskContext);
  const { todoState } = useContext(BoardContext);

  useEffect(() => {
    async function getIdAsync(id) {
      var getId = await document.getElementById(id);
      if (getId) {
        getId.style.display = 'block';
        return getId;
      }
    }

    getIdAsync(idState);
  }, [idState, taskState, todoState]);
  return (
    <>
      <div
        className='p-2 transition-all duration-300 ease-linear p-1'
        key={Math.random()}
      >
        <div
          className={`rounded p-3 text-[12px] font-bold w-full ${
            tasks.progress_percentage === 100 ? `bg-green-100` : `bg-white`
          }`}
        >
          <div className='border-b border-dashed border-slate-400 pb-2'>
            {tasks.name}
          </div>
          <div className='flex flex-row justify-between items-center pt-3'>
            {tasks.progress_percentage !== 100 ? (
              <>
                <div className='flex w-[140px] h-[7px] rounded bg-gray-200'>
                  <div
                    className={`rounded h-[7px] absolute ${
                      tasks.progress_percentage < 70
                        ? `bg-gradient-to-r from-red-400 to-yellow-400`
                        : `bg-gradient-to-r from-yellow-400 to-green-400`
                    }`}
                    style={{
                      width: `${tasks.progress_percentage * 1.4}px`,
                    }}
                  ></div>
                </div>
                <div className='pl-1'>{tasks.progress_percentage}%</div>
              </>
            ) : (
              <div className='pl-1'>
                {tasks.progress_percentage}%{' '}
                <span className='bg-green-200 p-1 ml-1 rounded text-green-800 border-2 border-green-700'>
                  DONE
                </span>
              </div>
            )}
            <div
              className='text-[20px] flex items-center cursor-pointer pl-1'
              onClick={() => setIdState(tasks.id)}
            >
              <ThreeDotsIcon />
            </div>
            <div
              className='absolute right-[5px] translate-x-[60%] translate-y-[30%] bg-white text-[12px] rounded p-2 z-[9]'
              id={tasks.id}
              style={{ display: 'none' }}
              onMouseLeave={() => setIdState('')}
            >
              <TaskOpt
                editAction={editAct}
                deleteAction={delAct}
                moveRAction={moveRAct}
                moveLAction={moveLAct}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Task };
