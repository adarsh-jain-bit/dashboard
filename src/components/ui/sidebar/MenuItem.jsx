import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, icon: Icon, selected, setSelected, open }) => {
 const isSelected = selected === title;
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(title);

    if (title === "Default") {
      navigate("/"); 
    }
  };  

  return (
    <button
      onClick={handleClick}
      className={`flex h-10 w-full items-center relative rounded-md transition-all duration-200 ${
        isSelected
          ? "bg-gray-100 dark:bg-[#333333] dark:text-white-300 before:content-[''] before:absolute before:left-0 before:top-[10px] before:h-5 before:w-1 before:rounded-4xl  before:bg-black dark:before:bg-blue-100 "
          : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#333333] hover:text-gray-900 dark:hover:text-gray-200"
      } px-3 py-2`}
    >
      <div className="grid h-full w-8 place-content-center">
       {Icon ? <Icon className="h-4 w-4 "  /> : <span className="w-2 h-2 rounded-full bg-gray-200"></span>}
      </div>
      {open && <span className="text-sm ">{title}</span>}
    </button>
  );
};

export default MenuItem