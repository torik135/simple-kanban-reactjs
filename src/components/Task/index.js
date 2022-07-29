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
    var taskToMove = task.todo_id;
    console.log(
      `todo_id ${task.todo_id} | todo length: ${todoState.length} | taskToMove ${taskToMove}`,
    );

    if (taskToMove !== todoState.length) {
      var moveR = task.todo_id + 1;
      console.log(`IF: ${task.todo_id} move to ${moveR}`);
      setTaskState((prev) =>
        prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveR } : e)),
      );
    }
    if (taskToMove == todoState.length) {
      var moveFirst = (task.todo_id = 1);
      console.log(`ELSE: ${task.todo_id} move to ${moveFirst}`);
      setTaskState((prev) =>
        prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveFirst } : e)),
      );
    }
  };

  const moveLAct = (task) => {
    console.log(task.todo_id);
    var taskToMove = task.todo_id;
    console.log(
      `todo_id ${task.todo_id} | todo length: ${todoState.length} | taskToMove ${taskToMove}`,
    );

    if (taskToMove !== 0) {
      var moveL = task.todo_id - 1;
      console.log(`IF: ${task.todo_id} move to ${moveL}`);
      setTaskState((prev) =>
        prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveL } : e)),
      );
    }
    if (taskToMove == 1) {
      var tempMoveLast = task.todo_id;
      var moveLast = todoState.length;
      console.log(`ELSE: ${task.todo_id} move to ${moveLast}`);
      setTaskState((prev) =>
        prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveLast } : e)),
      );
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
