import './index.css';

import { Task } from '../Task';

const Board = (props) => {
  const { tasks, todos } = props;
  return (
    <>
      {todos.map((todo) => (
        <div className='board-container' key={Math.random()}>
          <div className='board-content'>
            <div className='board-title'>{todo.title}</div>
            <div className='board-desc'>{todo.description}</div>

            <Task tasks={tasks} todos={todo} />

            <div className='new-task'>+ New Task</div>
          </div>
        </div>
      ))}
    </>
  );
};

export { Board };
