import './index.css';
import { useState, useContext } from 'react';
import { FaPlus as PlusIcon } from 'react-icons/fa';
import { Task } from '../Task';
import { delAct, editAct, moveRAct, moveLAct } from '../../Utils/functions';
import { BoardContext, TaskContext } from '../../Context/Context';

const Board = () => {
  const { todoState } = useContext(BoardContext);
  const { taskState, setTaskState } = useContext(TaskContext);

  const addAct = (todoid) => {
    alert(`Add on todo with ID: ${todoid}`);
  };

  return (
    <>
      {todoState.map((todo) => (
        <div className='board-container' key={Math.random()}>
          <div className='board-content'>
            <div className='board-title'>{todo.title}</div>
            <div className='board-desc'>{todo.description}</div>

            {taskState
              .filter((taskFiltered) => taskFiltered.todo_id === todo.id)
              .map((task) => (
                <Task
                  tasks={task}
                  todos={todo}
                  editAct={() => editAct(task)}
                  delAct={() => delAct(task, taskState, setTaskState)}
                  moveRAct={() => moveRAct(task, todoState, setTaskState)}
                  moveLAct={() => moveLAct(task, todoState, setTaskState)}
                />
              ))}
            <div className='new-task'>
              <button onClick={() => addAct(todo.id)}>
                <i>
                  <PlusIcon />
                </i>
                New Task
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { Board };
