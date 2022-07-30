import './index.css';
import { useState, useContext } from 'react';
import { FaPlus as PlusIcon } from 'react-icons/fa';
import { Task } from '../Task';
import { Toast } from '../Toast';
import { delAct, editAct, moveRAct, moveLAct } from '../../Utils/functions';
import { BoardContext, TaskContext } from '../../Context/Context';

const Board = () => {
  const { todoState } = useContext(BoardContext);
  const { taskState, setTaskState } = useContext(TaskContext);

  const [toastState, setToastState] = useState(false);
  const [toastLabel, setToastLabel] = useState('label');
  const [toastBody, setToastBody] = useState('body');
  const [toastBg, setToastBg] = useState('red');
  const [toastFnt, setToastFnt] = useState('white');

  const addAct = (todoid) => {
    alert(`Add on todo with ID: ${todoid}`);
  };

  return (
    <>
      {toastState && (
        <Toast
          label={toastLabel}
          bgcolor={toastBg}
          fontcolor={toastFnt}
          body={toastBody}
          toastFunc={() => setToastState(!toastState)}
        />
      )}
      {todoState.map((todo) => (
        <div className='board-container' key={Math.random()}>
          <div className='board-content'>
            <div className='board-title'>{todo.title}</div>
            <div className='board-desc'>{todo.description}</div>

            {taskState
              .filter((taskFiltered) => taskFiltered.todo_id === todo.id)
              .map((task) => (
                <Task
                  key={Math.random()}
                  tasks={task}
                  todos={todo}
                  editAct={() => editAct(task)}
                  delAct={() =>
                    delAct(
                      task,
                      taskState,
                      setTaskState,
                      setToastState,
                      setToastLabel,
                      setToastBody,
                      setToastBg,
                      setToastFnt,
                    )
                  }
                  moveRAct={() =>
                    moveRAct(
                      task,
                      todoState,
                      setTaskState,
                      setToastState,
                      setToastLabel,
                      setToastBody,
                      setToastBg,
                      setToastFnt,
                    )
                  }
                  moveLAct={() =>
                    moveLAct(
                      task,
                      todoState,
                      setTaskState,
                      setToastState,
                      setToastLabel,
                      setToastBody,
                      setToastBg,
                      setToastFnt,
                    )
                  }
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
