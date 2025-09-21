import { User } from "lucide-react";

const UserCell = ({ user }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        ) : (
          <User className="h-4 w-4 text-gray-300" />
        )}
      </div>
      <span className="">{user.name}</span>
    </div>
  );
};

export default UserCell