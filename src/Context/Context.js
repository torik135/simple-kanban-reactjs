import { createContext, useState } from 'react';

const BoardContext = createContext();
const TaskContext = createContext();

const Context = (props) => {
  const { children } = props;

  const [todoState, setTodoState] = useState([]);
  const [taskState, setTaskState] = useState([]);

  return (
    <BoardContext.Provider value={{ todoState, setTodoState }}>
      <TaskContext.Provider value={{ taskState, setTaskState }}>
        {children}
      </TaskContext.Provider>
    </BoardContext.Provider>
  );
};

export { Context, BoardContext, TaskContext };
