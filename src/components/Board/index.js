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
        <div className=' p-2 w-full' key={Math.random()}>
          <div className='flex flex-col min-h-[350px] p-[1.5rem] h-auto min-w-[250px] w-270 relative bg-gray-100 shadow-md'>
            <div className='rounded m-w-[50px] w-[100px] p-[4px] mb-[16px] font-bold text-[12px] flex justify-center text-blue-800  bg-blue-200 border-2 border-blue-500 border-solid'>
              <span className='w-full h-2 bg-gradient-to-r from-blue-400 to-blue-500 absolute inset-x-0 top-0 rounded-t-md'></span>
              {todo.title}
            </div>
            <div className='flex justify-left align-center text-[16px] pb-[16px]'>
              {todo.description}
            </div>

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
            <div className='pt-[24px]'>
              <button
                onClick={() => addAct(todo.id)}
                className='flex align-center cursor-pointer hover:scale-125'
              >
                <i className='pr-[8px]'>
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
