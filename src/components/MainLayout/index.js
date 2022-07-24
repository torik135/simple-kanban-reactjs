import './index.css';

import { Item } from '../Item';
import { Board } from '../Board';

const groupList = [
  { group: 'group 1', date: 'Jan - Feb', color: 'blue' },
  { group: 'group 2', date: 'Mar - Apr', color: 'yellow' },
  { group: 'group 3', date: 'Mai - Jun', color: 'green' },
  { group: 'group 4', date: 'Jul - Aug', color: 'red' },
];

const itemList = [
  { text: 'task 1', progress: 10, group: 'group 1' },
  { text: 'task 2', progress: 40, group: 'group 4' },
  { text: 'task 3', progress: 20, group: 'group 1' },
  { text: 'task 4', progress: 30, group: 'group 2' },
];

const MainLayout = () => {
  return (
    <div className='main-comp'>
      <div className='main-board'>
        {groupList.map((d) => (
          <Board group={d.group} date={d.date} color={d.color}>
            {itemList.map((data) => (
              <Item
                text={data.text}
                progress={data.progress}
                progsize={data.progress}
                key={Math.random()}
              />
            ))}

            <div className='new-task'>
              <span>+</span>
              new task
            </div>
          </Board>
        ))}
      </div>
    </div>
  );
};

export { MainLayout };
