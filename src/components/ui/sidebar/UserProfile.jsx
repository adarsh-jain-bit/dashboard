
const UserProfile = ({ open }) => {
  return (
    <div className="flex items-center mb-6 p-2">
      <div className={`${open ? "w-10 h-10 text-sm" : " w-8 h-8 text-[12px]"} rounded-full  flex items-center justify-center text-white font-semibold `}>
      <img src="/public/assets/ByeWind.png" alt="" />
      </div>
      {open && (
        <div className="ml-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 block">
            ByeWind
          </span>
        
        </div>
      )}
    </div>
  );
};
export default UserProfile