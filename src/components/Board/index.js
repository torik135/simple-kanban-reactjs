import './index.css';

const Board = (props) => {
  const { group, date, color, children } = props;
  return (
    <div className='board-comp'>
      <div className='board-container' style={{ border: `1px solid ${color}` }}>
        <div
          className='board-group'
          style={{ border: `1px solid ${color}`, color: `${color}` }}
        >
          {group}
        </div>
        <div className='board-date'>{date}</div>
        {children}
      </div>
    </div>
  );
};

export { Board };
