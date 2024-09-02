import { useState } from "react";

function handleClick() {
  alert("Card Added successfully");
}

export default function App() {
  return (
    <main className="mainbackground min-h-screen flex flex-col md:flex-row">
      <div className="sidebackground bg-[url('images/bg-main-mobile.png')] bg-cover md:bg-[url('images/bg-main-desktop.png')] h-[240px] md:w-[483px] md:h-screen flex justify-end items-center ">
        <div className="flex flex-col md:gap-10 md:max-w-96 absolute md:translate-x-40">
          <img
            src="images/bg-card-front.png"
            alt="card-front"
            className="md:-translate-x-14"
          />
          <img
            src="images/bg-card-back.png"
            alt="card-back"
            className="md:translate-x-10"
          />
        </div>
      </div>
      <div className="flex-col md:flex justify-center relative left-80">
        <form className="form flex flex-col justify-center  gap-4 text-black text-sm">
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
