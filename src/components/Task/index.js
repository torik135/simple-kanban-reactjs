import './index.css';

import { FaEllipsisH as ThreeDotsIcon } from 'react-icons/fa';

/*
task.percentage
  progress-color = task-progress_graph / 100 = 150 / 100 = 1.5
*/

const Task = (props) => {
  const { tasks, todos } = props;
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
                <div className='task-progress_opt'>
                  <ThreeDotsIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export { Task };
