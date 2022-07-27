import './index.css';

import {
  FaArrowRight as MoveRightIcon,
  FaArrowLeft as MoveLeftIcon,
  FaPen as EditIcon,
  FaTrash as DeleteIcon,
} from 'react-icons/fa';

const TaskOpt = () => {
  return (
    <div className='task-opt-container'>
      <div className='task-opt-content'>
        <div className='opts opt-delete'>
          <i className='opt-icon'>
            <DeleteIcon />
          </i>
          delete
        </div>
        <div className='opts opt-edit'>
          <i className='opt-icon'>
            <EditIcon />
          </i>
          edit
        </div>
        <div className='opts opt-move-right'>
          <i className='opt-icon'>
            <MoveRightIcon />
          </i>
          move right
        </div>
        <div className='opts opt-move-left'>
          <i className='opt-icon'>
            <MoveLeftIcon />
          </i>
          move left
        </div>
      </div>
    </div>
  );
};

export { TaskOpt };
