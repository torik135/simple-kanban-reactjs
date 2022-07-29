/*
task.percentage
  progress-color = task-progress_graph / 100 = 150 / 100 = 1.5
*/

import './index.css';

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
      <div className='task-container' key={Math.random()}>
        <div className='task-content'>
          <div className='task-name'>{tasks.name}</div>
          <div className='task-progress_container'>
            <div className='task-progress_graph'>
              <div
                className='progress-color'
                style={{
                  width: `${tasks.progress_percentage * 1.5}px`,
                }}
              ></div>
            </div>
            <div className='task-progress_text'>
              {tasks.progress_percentage}%
            </div>
            <div
              className='task-progress_opt'
              onClick={() => setIdState(tasks.id)}
            >
              <ThreeDotsIcon />
            </div>
            <div
              className='opt'
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
