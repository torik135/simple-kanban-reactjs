import {
  FaArrowRight as MoveRightIcon,
  FaArrowLeft as MoveLeftIcon,
  FaPen as EditIcon,
  FaTrash as DeleteIcon,
} from 'react-icons/fa';

const optClass =
  'flex items-center justify-left p-[6px] mb-[4px] curson-pointer hover:bg-gray-300 hover:rounded hover:scale-110 cursor-pointer';
const optClassI = 'flex items-center pr-[8px]';

const TaskOpt = (props) => {
  const { editAction, deleteAction, moveRAction, moveLAction } = props;

  return (
    <div className='relative'>
      <div className='flex flex-col items-left justify-center p[8px]'>
        <div className={optClass} onClick={deleteAction}>
          <i className={optClassI}>
            <DeleteIcon />
          </i>
          delete
        </div>
        <div className={optClass} onClick={editAction}>
          <i className={optClassI}>
            <EditIcon />
          </i>
          edit
        </div>
        <div className={optClass} onClick={moveRAction}>
          <i className={optClassI}>
            <MoveRightIcon />
          </i>
          move right
        </div>
        <div className={optClass} onClick={moveLAction}>
          <i className={optClassI}>
            <MoveLeftIcon />
          </i>
          move left
        </div>
      </div>
    </div>
  );
};

export { TaskOpt };
