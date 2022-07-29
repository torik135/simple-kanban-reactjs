const delAct = (task, taskState, setTaskState) => {
  setTaskState(taskState.filter((ts) => ts.id !== task.id));
};

const editAct = (task) => {
  console.log(task);
};

const moveRAct = (task, todoState, setTaskState) => {
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
  if (taskToMove === todoState.length) {
    var moveFirst = (task.todo_id = 1);
    console.log(`ELSE: ${task.todo_id} move to ${moveFirst}`);
    setTaskState((prev) =>
      prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveFirst } : e)),
    );
  }
};

const moveLAct = (task, todoState, setTaskState) => {
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
  if (taskToMove === 1) {
    var moveLast = todoState.length;
    console.log(`ELSE: ${task.todo_id} move to ${moveLast}`);
    setTaskState((prev) =>
      prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveLast } : e)),
    );
  }
};

export { delAct, editAct, moveRAct, moveLAct };
