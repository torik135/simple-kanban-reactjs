import './index.css';
import { ProgressBar } from '../ProgressBar';

const Item = (props) => {
  const { text, progress } = props;
  return (
    <div className='item-comp'>
      <div className='item-container'>
        <div className='item-text'>{text}</div>
        <div className='item-progress'>
          <ProgressBar progval={progress} />
          <div className='item-opt'>opt</div>
        </div>
      </div>
    </div>
  );
};

export { Item };
