import './index.css';

const Modal = (props) => {
  const { children } = props;
  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='modal-box'>
          <h2>MODAL</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
