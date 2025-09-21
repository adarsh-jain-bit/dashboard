import { useNavigate } from "react-router-dom";


const SubMenuItem = ({ title, icon: Icon, selected, setSelected, open }) => {
const isSelected = selected === title;
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(title);

    if (title === "Orders") {
      navigate("/orders"); // redirect to orders page
    }
  };  


  return (
    <button
       onClick={handleClick}
      className={`flex h-9 w-full items-center pl-10 rounded-md transition-all duration-200 ${
        isSelected
          ? "bg-gray-100 dark:bg-[#333333]  dark:text-white-300"
          : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#333333] hover:text-gray-900 dark:hover:text-gray-200 "
      } px-3 py-1`}
    >
      <div className="grid h-full w-6 place-content-center">
        <Icon className="h-3 w-3"  />
      </div>
      {open && <span className="text-sm  ml-2">{title}</span>}
    </button>
  );
};


export default SubMenuItem