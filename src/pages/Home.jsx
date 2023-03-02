import { FaPhp, FaReact } from "react-icons/fa";
import { DiLaravel } from "react-icons/di";
import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaWhatsapp,
  FaInstagram,
  FaSnapchatSquare,
  FaPhoneAlt,
} from "react-icons/fa";

const Home = () => {
    return (
      <>
        <div className="bg-white h-[92vh] w-full flex items-center justify-center mt-[8vh]">
          <div className="display flex w-4/5 h-4/5 flex-col lg:flex-row justify-between p-8 ">
            <div className="w-full h-1/2 lg:h-full brder-b lg:border-b-4 border-slate-900 flex items-center justify-center">
              <img
                src="./IMG_8226.JPG"
                alt=""
                className="rounded-full w-[180px] h-[180px] lg:hover:scale-150 transition ease-out delay-75"
              />
            </div>
            <div className="w-full h-1/2 lg:h-full border-t lg:border-t-4 border-slate-900 flex items-center justify-center">
              <p>
                <span className="text-xl font-semibold text-slate-900">
                  Hi there,
                </span>{" "}
                <br />
                <span className="text-2xl font-semibold text-slate-900">
                  I am <span className="text-slate-400">Elvis Nwanwkere,</span>
                </span>
                <br />
                <span className="text-3xl font-semibold text-slate-900">
                  I am a <span className="text-slate-300">Full-Stack</span>{" "}
                  web-developer.
                </span>
                <br />
                <span className="text-lg font-semibold text-slate-400">
                  Based in{" "}
                  <span className="text-xl text-slate-900">
                    Abuja, Nigeria.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 h-[100vh] border border-black pt-[8vh] w-full flex items-center justify-evenly flex-col">
          <h1 className="text-center font-bold text-3xl text-white block">
            My Services
          </h1>
          <p className="block w-3/4 text-lg text-slate-400">
            Having taken a{" "}
            <span className="text-slate-300 text-xl">Full-stack</span>{" "}
            web-development course and following up on it with a{" "}
            <span className="text-slate-300 text-xl">React-app</span>{" "}
            development course and a course on{" "}
            <span className="text-slate-300 text-xl">Laravel</span>, I can
            provide services such as website and web-app development and basic
            jobs handled by a full-stack developer using the following:
          </p>
          <div className="md:w-3/5 md:h-2/5 w-4/5 h-2/5 grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
            <div className="w-full h-full flex bg-white rounded-sm items-center justify-center text-center text-lg font-semibold text-slate-900 transition ease-in delay-75 md:hover:-translate-y-8">
              Front-end
            </div>
            <div className="w-full h-full flex bg-white rounded-sm items-center justify-center text-center text-lg font-semibold text-slate-900 transition ease-in delay-75 md:hover:-translate-y-8">
              <FaPhp className="text-3xl mr-2" />
              PHP
            </div>
            <div className="w-full h-full flex bg-white rounded-sm items-center justify-center text-center text-lg font-semibold text-slate-900 transition ease-in delay-75 md:hover:-translate-y-8">
              <FaReact className="text-3xl mr-2" /> React
            </div>
            <div className="w-full h-full flex bg-white rounded-sm items-center justify-center text-center text-lg font-semibold text-slate-900 transition ease-in delay-75 md:hover:-translate-y-8">
              <DiLaravel className="text-3xl mr-2" /> Laravel
            </div>
          </div>
        </div>
        <div className="w-full h-[100vh] pt-[8vh] flex justify-center items-center bg-white">
          <div className="w-4/5 h-3/4 flex  flex-col justify-around items-center">
            <h1 className="text-2xl text-slate-900 font-semibold">
              You can contact me via:
            </h1>
            <div className="w-full h-1/2 grid grid-cols-1">
              <div className="flex justify-center items-center text-lg lg:text-xl text-black w-full h-full gap-4">
                <FaPhoneAlt className="text-xl text-slate-400" />
                Call on: 09075992757
              </div>
              <div className="flex justify-center items-center text-lg lg:text-xl text-black w-full h-full gap-4">
                <FaWhatsapp className="text-2xl text-slate-400" />
                WhatsApp: 09075992757
              </div>
              <div className="flex justify-center items-center text-lg lg:text-xl text-black w-full h-full gap-4">
                <FaInstagram className="text-2xl text-slate-400" />
                Instagram: ajebutter_21
              </div>
              <div className="flex justify-center items-center text-lg lg:text-xl text-black w-full h-full gap-4">
                <FaSnapchatSquare className="text-2xl text-slate-400" />
                SnapChat: ajebuta21
              </div>
              <div className="flex justify-center items-center text-lg lg:text-xl text-black w-full h-full gap-4">
                <SiGmail className="text-2xl text-slate-400" />
                Gmail: Elvisluckyest@gmail.com
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Home;
