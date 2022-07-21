import './index.css';

const ProgressBar = (props) => {
  const { progval } = props;
  return (
    <div className='progressbar-container'>
      <div className='progressbar-content'>
        <div className='prog-bar'>
          <div className='prog-color'></div>
          <div className='prog-bg'></div>
        </div>
        {progval}
      </div>
    </div>
  );
};

export { ProgressBar };
