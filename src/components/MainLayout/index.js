import './index.css';

import { Item } from '../Item';
import { Board } from '../Board';

const groupList = [
  { group: 'group 1', date: 'Jan - Feb', class: 'g1' },
  { group: 'group 2', date: 'Mar - Apr', class: 'g2' },
  { group: 'group 3', date: 'Mai - Jun', class: 'g3' },
  { group: 'group 4', date: 'Jul - Aug', class: 'g4' },
];

const itemList = [
  { text: 'task 1', progress: 10 },
  { text: 'task 2', progress: 40 },
  { text: 'task 3', progress: 20 },
  { text: 'task 4', progress: 30 },
];

const MainLayout = () => {
  return (
    <div className='main-comp'>
      <div className='main-board'>
        {groupList.map((d) => (
          <Board group={d.group} date={d.date}>
            {itemList.map((data) => (
              <Item
                text={data.text}
                progress={data.progress}
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
