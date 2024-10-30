const SendMoney = () => {
  return (
    <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col gap-6 w-1/4 ">
        <div className="text-6xl font-bold mt-4 text-center">WePay</div>

        <div className="pl-4 pt-2 flex ml-4">
          <img
            class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://readymadeui.com/team-1.webp"
            alt="Bordered avatar"
          />

          <div className="ml-4 mt-1 text-2xl font-serif font-bold">
            John Sena
          </div>
        </div>

        <div className="flex flex-col ml-10 gap-4 w-full">
          <div>
            <div>Amount in Rs</div>
            <input
              className="border mt-2 w-4/5 "
              type="text"
              placeholder="5000"
              required
            />
          </div>

          <div>
            <div>Password</div>
            <input
              className="border mt-2 w-4/5 "
              type="text"
              placeholder="123456"
              required
            />
          </div>
        </div>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  m-auto w-4/5  "
        >
          Transfer Money
        </button>
      </div>
    </div>
  );
};

export default SendMoney;
