import './index.css';

const Board = (props) => {
  const { group, date, color, children } = props;
  return (
    <div className='board-comp'>
      <div className='board-container'>
        <div className='board-group'>{group}</div>
        <div className='board-date'>{date}</div>
        {children}
      </div>
    </div>
  );
};

export { Board };
