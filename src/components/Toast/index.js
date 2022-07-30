import './index.css';

const Toast = (props) => {
  const { label, bgcolor, fontcolor, body, toastFunc } = props;
  return (
    <div className='toast-container' onClick={toastFunc}>
      <div
        className='toast-content'
        style={{ background: `${bgcolor}`, color: `${fontcolor}` }}
      >
        <div className='toast-label'>{label}</div>
        <div className='toast-body'>{body}</div>
      </div>
    </div>
  );
};

export { Toast };
