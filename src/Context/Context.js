import { createContext, useState } from 'react';
import { todoList, taskList } from '../Utils/data';

const BoardContext = createContext();
const TaskContext = createContext();

const Context = (props) => {
  const { children } = props;

  const [todoState, setTodoState] = useState(todoList);
  const [taskState, setTaskState] = useState(taskList);

  return (
    <BoardContext.Provider value={{ todoState, setTodoState }}>
      <TaskContext.Provider value={{ taskState, setTaskState }}>
        {children}
      </TaskContext.Provider>
    </BoardContext.Provider>
  );
};

export { Context, BoardContext, TaskContext };
