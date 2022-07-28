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
  const { tasks, todos } = props;
  const [idState, setIdState] = useState('');

  const { todoState, setTodoState } = useContext(BoardContext);
  const { taskState, setTaskState } = useContext(TaskContext);

  const delAct = (id) => {
    /*
    0. call the alert.
    1. use filter & filter out the data based on task.id
    */
    console.log('DELETE ACTION', id);
  };

  const editAct = (id) => {
    /*
    0. call the form.
    1.  - take task.id
        - show form with input id(hidden), task.name, task.percentage, and btn submit
        - set
    */
    console.log('EDIT ACTION', id);
  };

  const moveRAct = (taskTodoId) => {
    /*
    1. if task.todo_id < task.length
          task.todo_id + 1. 
        else 
          task.todo_id = 0. (first)
    */
    console.log('MOVE RIGHT ACTION', taskTodoId);
    var taskTodoId = taskTodoId + 1;
  };

  const moveLAct = (task) => {
    /*
    1. if task.todo_id > 1
          task.todo_id - 1. 
        else
          task.todo_id = task.length - 1. (last)
    */
    console.log('MOVE LEFT ACTION', task);
  };

  useEffect(() => {
    async function getIdAsync(id) {
      var getId = await document.getElementById(id);
      if (getId) {
        getId.style.display = 'block';
        return getId;
      }
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
              <div className='task-progress_container'>
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
                >
                  <ThreeDotsIcon />
                </div>
                <div
                  className='opt'
                  id={task.id}
                  style={{ display: 'none' }}
                  onMouseLeave={() => setIdState('')}
                >
                  <TaskOpt
                    editAction={() => editAct(task.id)}
                    deleteAction={() => delAct(task.id)}
                    moveRAction={() => moveRAct(task.todo_id)}
                    moveLAction={() => moveLAct(task.todo_id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export { Task };
