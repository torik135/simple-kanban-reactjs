/*
task.percentage
  progress-color = task-progress_graph / 100 = 150 / 100 = 1.5
*/

import './index.css';

import { useState, useEffect } from 'react';
import { FaEllipsisH as ThreeDotsIcon } from 'react-icons/fa';
import { TaskOpt } from '../TaskOpt';

const Task = (props) => {
  const { tasks, todos } = props;

  const [optState, setOptState] = useState(false);
  const [idState, setIdState] = useState('');

  // async function getIdAsync(id) {
  //   var getId = await document.getElementById(id);
  //   getId.style.display = 'block';
  //   return getId;
  // }
  // getIdAsync(idState);

  useEffect(() => {
    async function getIdAsync(id) {
      var getId = await document.getElementById(id);
      getId.style.display = 'block';
      return getId;
    }
    getIdAsync(idState);
  }, [idState]);

  return (
    <>
      {tasks
        .filter((taskFiltered) => taskFiltered.todo_id === todos.id)
        .map((task) => (
          <div className='task-container' key={Math.random()}>
            <div className='task-content'>
              <div className='task-name'>{task.name}</div>
              <div
                className='task-progress_container'
                onMouseLeave={() => setOptState(false)}
              >
                <div className='task-progress_graph'>
                  <div
                    className='progress-color'
                    style={{
                      width: `${task.progress_percentage * 1.5}px`,
                    }}
                  ></div>
                </div>
                <div className='task-progress_text'>
                  {task.progress_percentage}%
                </div>
                <div
                  className='task-progress_opt'
                  onClick={() => setIdState(task.id)}
                  onMouseLeave={() => setIdState('')}
                >
                  <ThreeDotsIcon />
                </div>
                <div className='opt' id={task.id} style={{ display: 'none' }}>
                  <TaskOpt />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export { Task };
