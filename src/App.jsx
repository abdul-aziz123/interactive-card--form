import { useState } from "react";

function handleClick() {
  alert("Card Added successfully");
}

export default function App() {
  return (
    <main className="mainbackground min-h-screen flex flex-col md:flex-row gap-4">
      <div className="sidebackground bg-[url('images/bg-main-mobile.png')] bg-cover md:bg-[url('images/bg-main-desktop.png')] h-52 md:w-[483px] md:h-screen flex justify-center items-center ">
        <div className="flex flex-col md:gap-10 max-w-96 md:absolute md:translate-x-40">
          <img
            src="images/bg-card-front.png"
            alt="card-front"
            className="translate-y-60 -translate-x-20 z-10 md:-translate-x-14 md:translate-y-0"
          />
          <img
            src="images/bg-card-back.png"
            alt="card-back"
            className="-translate-y-20 translate-x-20 md:translate-x-10 md:translate-y-0"
          />
        </div>
      </div>
      <div className="flex justify-center relative top-40 md:top-0 md:left-80">
        <form className="form flex flex-col justify-center  gap-4 text-black text-sm max-w-96">
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
                className="pl-2 rounded-lg border-solid min-h-10 border-gray-300 border-[0.5px] hover:border-violet-900 focus:outline-violet-800 invalid:border-red-500"
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
