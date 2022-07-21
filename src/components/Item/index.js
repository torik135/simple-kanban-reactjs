import './index.css';

const Item = (props) => {
  const { text, progress, progsize } = props;
  return (
    <div className='item-comp'>
      <div className='item-container'>
        <div className='item-text'>{text}</div>
        <div className='item-progress'>
          <div className='item-prog'>
            <div className='prog-color' style={{ width: `${progsize}%` }}></div>
          </div>
          {progress}%<div className='item-opt'>opt</div>
        </div>
      </div>
    </div>
  );
};

export { Item };
