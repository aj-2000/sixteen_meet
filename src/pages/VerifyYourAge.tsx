import React from "react";
import BasicAccountCard from "../components/BasicAccountCard";
import Header from "../components/layout/Header";

const VerifyYourAge = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:pb-[5000px] items-center gap-y-8 min-w-[40%] bg-slate-200 py-auto overflow-scroll">
          <img
            className="max-w-[180px] md:max-w-[300px] mx-2 mt-12"
            src="https://us01st-cf.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png"
          />
          <div className="hidden md:inline-block">
          <BasicAccountCard/>
          </div>
          
        </div>
        <div className="min-w-[60%] pb-[5000px] flex flex-col justify-center items-center gap-y-6 mt-12 md:mt-0">
          <span className="text-4xl font-medium mb-10">Verify Your Age</span>
          <div className="flex flex-col items-center gap-y-6">
            <span className="text-sm md:text-xs text-gray-600">Please confirm your birth year. This data will not be stored.</span>
            <input
              className="rounded-sm border-1 border py-2 px-auto w-[320px]"
              id="birth_year"
              type="text"
              placeholder="  Birth Year"
            />
          </div>
          <span className="text-sm text-center text-gray-400 font-medium py-2 bg-gray-200 rounded-lg px-auto min-w-[320px]">
            Continue
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyYourAge;
