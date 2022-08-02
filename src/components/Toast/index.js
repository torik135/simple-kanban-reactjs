const Toast = (props) => {
  const { label, bgcolor, fontcolor, body, toastFunc } = props;
  return (
    <div
      className='fixed bottom-[5rem] left-[50%] z-[99] cursor-pointer hover:scale-110'
      onClick={toastFunc}
    >
      <div
        className='flex items-center justify-center flex-col p-[4px] bg-red-500 m-h-[30px] h-[50px] m-w-[100px] font-bold text-white rounded'
        style={{ background: `${bgcolor}`, color: `${fontcolor}` }}
      >
        <div className='pt-[4px] text-sm'>{label}</div>
        <div className='pt-[4px] pb-[4px] text-xs'>{body}</div>
      </div>
    </div>
  );
};

export { Toast };
