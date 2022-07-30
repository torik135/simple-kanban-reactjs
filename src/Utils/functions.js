const delAct = (
  task,
  taskState,
  setTaskState,
  setToastState,
  setToastLabel,
  setToastBody,
  setToastBg,
  setToastFnt,
) => {
  setTaskState(taskState.filter((ts) => ts.id !== task.id));
  setToastBg('red');
  setToastFnt('white');
  setToastLabel(`Delete id: ${task.id}`);
  setToastBody(`Name: ${task.name}`);
  setToastState(true);
};

const editAct = (task) => {
  console.log(task);
};

const moveRAct = (
  task,
  todoState,
  setTaskState,
  setToastState,
  setToastLabel,
  setToastBody,
  setToastBg,
  setToastFnt,
) => {
  // console.log(task.todo_id);
  var taskToMove = task.todo_id;
  // console.log(
  //   `todo_id ${task.todo_id} | todo length: ${todoState.length} | taskToMove ${taskToMove}`,
  // );

  if (taskToMove !== todoState.length) {
    var moveR = task.todo_id + 1;
    // console.log(`IF: ${task.todo_id} move to ${moveR}`);
    setTaskState((prev) =>
      prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveR } : e)),
    );
    setToastBg('green');
    setToastFnt('yellow');
    setToastState(true);
    setToastLabel(`Move Right id: ${task.id}`);
    setToastBody(
      `Name: ${task.name} from todo_id: ${task.todo_id} to ${task.todo_id + 1}`,
    );
  }
  if (taskToMove === todoState.length) {
    var moveFirst = (task.todo_id = 1);
    // console.log(`ELSE: ${task.todo_id} move to ${moveFirst}`);
    setTaskState((prev) =>
      prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveFirst } : e)),
    );
    setToastBg('green');
    setToastFnt('yellow');
    setToastState(true);
    setToastLabel(`Move Right id: ${task.id}`);
    setToastBody(
      `Name: ${task.name} from todo_id: ${task.todo_id} to ${task.todo_id}`,
    );
  }
};

const moveLAct = (
  task,
  todoState,
  setTaskState,
  setToastState,
  setToastLabel,
  setToastBody,
  setToastBg,
  setToastFnt,
) => {
  // console.log(task.todo_id);
  var taskToMove = task.todo_id;
  // console.log(
  //   `todo_id ${task.todo_id} | todo length: ${todoState.length} | taskToMove ${taskToMove}`,
  // );

  if (taskToMove !== 0) {
    var moveL = task.todo_id - 1;
    // console.log(`IF: ${task.todo_id} move to ${moveL}`);
    setTaskState((prev) =>
      prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveL } : e)),
    );
    setToastBg('yellow');
    setToastFnt('green');
    setToastState(true);
    setToastLabel(`Move Left id: ${task.id}`);
    setToastBody(
      `Name: ${task.name} from todo_id: ${task.todo_id} to ${task.todo_id - 1}`,
    );
  }
  if (taskToMove === 1) {
    var moveLast = todoState.length;
    // console.log(`ELSE: ${task.todo_id} move to ${moveLast}`);
    setTaskState((prev) =>
      prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveLast } : e)),
    );
    setToastBg('yellow');
    setToastFnt('green');
    setToastState(true);
    setToastLabel(`Move Right id: ${task.id}`);
    setToastBody(
      `Name: ${task.name} from todo_id: ${task.todo_id} to ${moveLast}`,
    );
  }
};

export { delAct, editAct, moveRAct, moveLAct };
