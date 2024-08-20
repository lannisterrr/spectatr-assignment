interface UserCardProps {
  name: string;
  username: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, username, email }) => {
  return (
    // <div className="p-4 border  flex  flex-col  items-center rounded-lg shadow-lg  transform transition-transform duration-300 ease-in-out hover:scale-105">
    //   <img src="/user-user.webp" className="max-w-[200px]" />
    //   <h2 className="text-xl font-semibold">{name}</h2>
    //   <p>@{username}</p>
    //   <p>{email}</p>
    // </div>

    <div className="p-6 bg-white border border-gray-200 flex flex-col items-center rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img src="/girl.jpeg" alt="User Avatar" className=" " />
      <h2 className="text-2xl font-bold text-indigo-600 mb-2">{name}</h2>
      <p className="text-lg text-gray-700">@{username}</p>
      <p className="text-gray-500">{email}</p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
