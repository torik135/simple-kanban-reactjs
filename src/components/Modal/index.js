const Modal = (props) => {
  const { children } = props;
  return (
    <div className='fixed z-[99]'>
      <div className='text-center flex align-center justify-center m-h-screen m-w-screen'>
        <div className='bg-white rounded m-h-[250px] shadow-md'>
          <h2>MODAL</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };
