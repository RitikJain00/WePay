const OtherUsers = ({ firstName, lastName, letter }) => {
  return (
    <div className="bg-gray-100 w-full flex mt-8  justify-between">
      <div className="pl-4 pt-2 flex">
        <div className="bg-slate-300 rounded-full w-8 h-8 pt-1 pl-2.5 ">
          <div className="">{letter}</div>
        </div>
        <div className="ml-2 mt-1">{`${firstName} ${lastName}`}</div>
      </div>
      <div className="">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Send Money
        </button>
      </div>
    </div>
  );
};

export default OtherUsers;
