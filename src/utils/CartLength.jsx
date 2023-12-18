const CartLength = ({ children }) => {
  return (
    <>
      <p className=" bg-green-400 text-black w-[16px] h-[16px] text-sm flex justify-center items-center rounded-full font-medium">
        <span>{children}</span>
      </p>
    </>
  );
};

export default CartLength;
