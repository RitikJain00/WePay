import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WePay
          </span>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-4 cursor-pointer">
          <img
            src="https://readymadeui.com/team-1.webp"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-[15px] text-white  font-bold">John Doe</p>
            <p className="text-xs text-white mt-0.5">johndoe23@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
