/* eslint-disable react/prop-types */


const Category = ({setCategory}) => {

  const handleToggle = (category) => {
    setCategory(category)
  }


  return (
    <div className="mt-5 py-5 flex justify-center items-center">

      <ul className="flex justify-center items-center gap-8 text-[18px] font-medium">
       <button onClick={()=>handleToggle("eyeglass")} className="hover:text-blue-700" > EyeGlass </button>
       <button onClick={()=>handleToggle("sunglass")} className="hover:text-blue-700" > SunGlass </button>
       <button onClick={()=>handleToggle("eyewear")} className="hover:text-blue-700" > Eyewear</button>
      </ul>


    </div>
  );
}; 

export default Category;
