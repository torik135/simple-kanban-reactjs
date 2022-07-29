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
  const { taskState, setTaskState } = useContext(TaskContext);
  const { todoState } = useContext(BoardContext);

  const delAct = (task) => {
    setTaskState(taskState.filter((ts) => ts.id !== task.id));
  };

  const editAct = (task) => {
    console.log(task);
  };

  const moveRAct = (task) => {
    console.log(task.todo_id);
    var taskToMove = task.todo_id < todoState.length;
    console.log(taskToMove);
    if (taskToMove) {
      var moveR = task.todo_id + 1;
      console.log(`IF: ${task.todo_id} move to ${moveR}`);
      // below add new with todo_id keys [x]
      // setTaskState([...taskState, { todo_id: moveR }]);
      setTaskState((prev) =>
        prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveR } : e)),
      );
    } else {
      // move to first board / card
      var taskFirst = (task.todo_id = 1);
      console.log(`ELSE: move to ${taskFirst}`);
      setTaskState((prev) =>
        prev.map((e) => (e.id === task.id ? { ...e, todo_id: taskFirst } : e)),
      );
      console.log(taskState);
    }
  };

  const moveLAct = (task) => {
    console.log(task.todo_id);
    var taskToMove = task.todo_id < todoState.length;
    console.log(taskToMove);
    if (!taskToMove) {
      var moveL = task.todo_id - 1;
      console.log(`IF: move to ${moveL}`);
    } else {
      // move to last board / card
      var taskLast = (task.todo_id = todoState.length);
      console.log(`ELSE: move to ${taskLast}`);
    }
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
  }, [idState, taskState, todoState]);
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
                    editAction={() => editAct(task)}
                    deleteAction={() => delAct(task)}
                    moveRAction={() => moveRAct(task)}
                    moveLAction={() => moveLAct(task)}
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
