import './index.css';

const Task = (props) => {
  const { tasks, todos } = props;
  return (
    <>
      {tasks
        .filter((taskFiltered) => taskFiltered.todo_id === todos.id)
        .map((task) => (
          <div className='task-container'>
            <div className='task-content'>
              <div className='task-name'>{task.name}</div>
              <div className='task-progress_container'>
                <div className='task-progress_graph'>
                  <div
                    className='progress-color'
                    style={{ width: `${task.progress_percentage}%` }}
                  ></div>
                </div>
                <div className='task-progress_text'>
                  {task.progress_percentage}%
                </div>
                <div className='task-progress_opt'>opt</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export { Task };
