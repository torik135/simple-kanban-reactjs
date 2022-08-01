# Kanban Board using ReactJS

## Features

### [-] User can create a task in each of the given board.

in progress.

---

### [**DONE**] User can move as task from one board to another with the action "Move Left" and "Move Right".

move right / left function **scr/Utils/functions.js**

```javascript
setTaskState((prev) =>
  prev.map((e) => (e.id === task.id ? { ...e, todo_id: moveR / moveL } : e)),
);
```

### Move Right:

- move right if not on last board / card.
- move first if on the last board / card.

### Move Left:

- move left if not on first board / card.
- move last if on the first board / card.

---

### [-] User can edit a task with the action "Edit".

in progress.

---

### [**DONE**] User can delete a task with the action "Delete".

use simple filter (bc not using API).

```javascript
setTaskState(taskState.filter((ts) => ts.id !== task.id));
```

---

### [-] After each action (create, mode, edit, and delete), the board should show their newest task accordingly.

---

## Bonus Feature

### [-] Drag and Drop to move task between board.

in progress.

will use react-kanban with custom card.
