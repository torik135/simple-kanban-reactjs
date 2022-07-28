import './index.css';
import { useContext } from 'react';
import { FaPlus as PlusIcon } from 'react-icons/fa';
import { Task } from '../Task';

import { BoardContext, TaskContext } from '../../Context/Context';

const Board = () => {
  const { todoState, setTodoState } = useContext(BoardContext);
  const { taskState, setTaskState } = useContext(TaskContext);

  return (
    <>
      {todoState.map((todo) => (
        <div className='board-container' key={Math.random()}>
          <div className='board-content'>
            <div className='board-title'>{todo.title}</div>
            <div className='board-desc'>{todo.description}</div>

            <Task tasks={taskState} todos={todo} />

            <div className='new-task'>
              <i>
                <PlusIcon />
              </i>
              New Task
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { Board };
