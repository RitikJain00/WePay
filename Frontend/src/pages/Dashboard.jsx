import Topbar from "../components/Topbar";
import Search from "../components/Search";
import Balance from "../components/Balance";

const DashBoard = () => {
  return (
    <>
      <Topbar></Topbar>

      <div className="w-screen m-4 flex flex-col items-center p-4 gap-8">
        <Balance></Balance>
        <Search></Search>
      </div>
    </>
  );
};

export default DashBoard;
