const Buttons = ({ handleActive, active, condition, children }) => {
    return (
      <button
        className={`border py-2  px-2 lg:px-6 ${active === condition ? `bg-slate-800 text-white border border-slate-800` : ""}`}
        onClick={() => handleActive(condition)}
      >
        {children}
      </button>
    );
  };
  
  export default Buttons;
  