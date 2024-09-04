import { useState } from "react";

function handleClick() {
  alert("Card Added successfully");
}

export default function App() {
  return (
    <main className="mainbackground min-h-screen flex flex-col md:flex-row">
      <div
        className="sidebackground bg-no-repeat bg-[url('images/bg-main-mobile.png')]  md:bg-[url('images/bg-main-desktop.png')]
       h-60 md:w-[33%] md:h-screen flex flex-col justify-center items-center bg-cover relative"
      >
        <div className="hidden md:flex md:flex-col gap-4 absolute top-7 md:top-32">
          <div className="relative z-10">
            <img
              src="images/bg-card-front.png"
              alt="bg-card-front"
              className="max-w-96 w-full sm:drop-shadow-xl translate-x-1/3 -translate-y-0"
            />
            <span className="size-8 rounded-full bg-white absolute top-5 left-40 "></span>
            <span className="size-4 rounded-full bg-transparent absolute top-7 left-52 ring-1 ring-white"></span>
            <p className="text-white text-right text-3xl absolute -inset-x-24 top-28 tracking-tight">
              0000 0000 0000 0000
            </p>
            <p className="absolute text-white text-sm font-semibold left-40 bottom-5">
              JANE APPLESEED
            </p>
            <p className="absolute text-white text-sm font-semibold -right-24 bottom-5">
              00 / 00
            </p>
          </div>
          <div className="relative">
            <img
              src="images/bg-card-back.png"
              alt="bg-card-back"
              className="max-w-96 w-full sm:drop-shadow-xl translate-x-1/2 -translate-y-0"
            />
            <p className="absolute font-semibold text-base text-white -right-36 top-[5.5rem] ">
              000
            </p>
          </div>
        </div>
        <div className="md:hidden flex flex-col gap-4 absolute top-7 md:top-32">
          <div className="relative">
            <img
              src="images/bg-card-back.png"
              alt="bg-card-back"
              className="w-72 max-w-96 drop-shadow-lg sm:drop-shadow-xl "
            />
            <p className="absolute font-medium text-sm text-white right-8 top-[4.25rem] ">
              000
            </p>
          </div>
          <div className="relative z-10">
            <img
              src="images/bg-card-front.png"
              alt="bg-card-front"
              className="w-72 max-w-96 drop-shadow-lg sm:drop-shadow-xl -translate-x-12 -translate-y-[5.6rem]"
            />
            <span className="size-8 rounded-full bg-white absolute -left-8 -top-16"></span>
            <span className="size-4 rounded-full bg-transparent absolute left-4 -top-14 ring-1 ring-white"></span>
            <p className="text-white text-2xl absolute -left-7 -top-2 tracking-tight">
              0000 0000 0000 0000
            </p>
            <p className="absolute text-white text-xs font-semibold -left-8 top-10">
              JANE APPLESEED
            </p>
            <p className="absolute text-white text-sm font-semibold right-16 top-10">
              00 / 00
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative top-28 md:top-0 md:left-80">
        <form className="form flex flex-col justify-center  gap-4 text-black text-sm max-w-72 md:max-w-96">
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="Cardholder-name">CARDHOLDER NAME</label>
            <input
              className="pl-2 rounded-lg border-solid min-h-10 border-gray-300 border-[0.5px] hover:border-violet-900 focus:outline-violet-800 "
              placeholder="e.g. Jane Appleseed"
              type="text"
              id="Cardholder-name"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label htmlFor="Cardnumber">CARD NUMBER</label>
            <input
              className="pl-2 rounded-lg border-solid min-h-10 border-gray-300 border-[0.5px] hover:border-violet-900 focus:outline-violet-800 invalid:border-red-500"
              placeholder="e.g. 1234 5678 9123 0000"
              type="text"
              id="Cardnumber"
            />
          </div>
          <div className="flex justify-around gap-4">
            <div className="exp flex flex-col gap-2">
              <label className="" htmlFor="month-year">
                EXP. DATE (MM/YY)
              </label>
              <div className="flex gap-2 ">
                <input
                  className="w-16 pl-2 rounded-lg border-solid min-h-10 border-gray-300 border-[0.5px] hover:border-violet-900 focus:outline-violet-800 invalid:border-red-500"
                  type="text"
                  id="month-year"
                  placeholder="MM"
                />
                <input
                  className="w-16 pl-2 rounded-lg border-solid min-h-10 border-gray-300 border-[0.5px] hover:border-violet-900 focus:outline-violet-800 invalid:border-red-500"
                  type="text"
                  id="month-year"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="cvc flex flex-col gap-2">
              <label htmlFor="cvc">CVC</label>
              <input
                className="pl-2 rounded-lg border-solid min-h-10 w-32 border-gray-300 border-[0.5px] hover:border-violet-900 focus:outline-violet-800 invalid:border-red-500"
                type="text"
                id="cvc"
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <button
            onClick={handleClick}
            className="bg-Very-dark-violet text-white text-lg font-bold min-h-10 rounded-lg mt-2"
          >
            Confrim
          </button>
        </form>
      </div>
    </main>
  );
}
