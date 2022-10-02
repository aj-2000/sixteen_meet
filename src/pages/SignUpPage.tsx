import React from "react";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import BasicAccountCard from "../components/BasicAccountCard";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiFillInstagram } from "react-icons/ai";
const SignUpPage = () => {
  return (
    <div>
      <div className="h-[100vh] overflow-scroll md:overflow-hidden">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:pb-[5000px] items-center gap-y-8 min-w-[40%] bg-slate-200 py-auto overflow-scroll">
            <img
              className="max-w-[180px] md:max-w-[300px] mx-2 mt-12"
              src="https://us01st-cf.zoom.us/fe-static/fe-signup-login-active/img/banner-step-2.4b72ef61.png"
            />
            <div className="hidden md:inline-block">
              <BasicAccountCard />
            </div>
          </div>
          <div className="min-w-[60%] pb-4 md:pb-[5000px] flex flex-col justify-center items-center gap-y-8 mt-12 md:mt-0 overflow-scroll">
            <span className="text-4xl font-medium">Let's Get Started</span>
            <div className="flex flex-col items-center gap-y-6">
              <input
                className="rounded-sm border-1 border py-2 px-auto w-[320px]"
                id="email"
                type="email"
                placeholder="  Email Address"
              />
            </div>
            <div className="flex flex-col w-[320px]">
              <span className="text-sm text-center text-gray-400 font-medium py-2 bg-gray-200 rounded-lg px-auto min-w-[320px]">
                <Link to={"/join-meet"}>Continue</Link>
              </span>
              <p className="w-[320px] text-xs mt-4">
                By proceeding, I agree to{" "}
                <span className="text-blue-500">
                  Sixteen's Privacy Statement
                </span>{" "}
                and <span className="text-blue-500">Terms of Service</span>.
              </p>
            </div>
            <span className="text-xs text-gray-500">Or sign up with</span>
            <div className="flex gap-x-8 justify-between">
              <div className="w-[2.5rem] flex flex-col gap-y-2 justify-center">
                <div className="flex justify-center border rounded-xl py-2">
                  <AiFillApple className="text-lg" />
                </div>
                <span className="text-xs text-gray-500 text-center">Apple</span>
              </div>

              <div className="w-[2.5rem] flex flex-col gap-y-2 justify-center items-center ">
                <div className="flex justify-center border rounded-xl py-2 px-2">
                  <FcGoogle className="text-lg" />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  Google
                </span>
              </div>

              <div className="w-[2.5rem] flex flex-col gap-y-2 justify-center items-center ">
                <div className="flex justify-center border rounded-xl py-2 px-2">
                  <AiFillInstagram className="text-lg text-[#8a3ab9]" />
                </div>
                <span className="text-xs text-gray-500 text-center">
                  Instagram
                </span>
              </div>
            </div>
            <span className="w-[320px] text-xs text-gray-500">
              Sixteen is protected by reCAPTCHA and the{" "}
              <span className="text-blue-500">Privacy Policy</span> and{" "}
              <span className="text-blue-500">Terms of Service</span> apply.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
