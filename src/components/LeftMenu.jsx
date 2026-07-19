import React from "react";
import { BiLibrary } from "react-icons/bi";
import { FaHeart, FaInternetExplorer, FaRadio } from "react-icons/fa6";
import { GiLoveSong } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";

const LeftMenu = () => {
  return (
    <div className='leftMenu min-w-min sm:w-[15%] bg-[#3314e3] flex flex-col justify-between rounded-md p-6 className="menuIcons"  '>
      <div className="menuWrapper bg-red-500 h-[60%] flex flex-col justify-between shrink-0">
        <div className="menus w-min bg-green-600 text-base font-medium flex justify-center sm:justify-start gap-6 items-center text-[#b3b3b3]">
          <MdHomeFilled className="menuIcons" color="#b3b3b3" size={32} />
          <h3 className="hidden sm:flex">Home</h3>
        </div>
        <div className="menus text-base font-medium flex justify-center sm:justify-start gap-6 items-center text-[#b3b3b3]">
          <FaRadio className="menuIcons" color="#b3b3b3" size={32} />
          <h3 className="hidden sm:flex">Radio</h3>
        </div>
        <div className="menus text-base font-medium flex justify-center sm:justify-start gap-6 items-center text-[#b3b3b3]">
          <PiMicrophoneStageFill
            className="menuIcons"
            color="#b3b3b3"
            size={32}
          />
          <h3 className="hidden sm:flex">Artist</h3>
        </div>
        <div className="menus text-base font-medium flex justify-center sm:justify-start gap-6 items-center text-[#b3b3b3]">
          <GiLoveSong className="menuIcons" color="#b3b3b3" size={32} />
          <h3 className="hidden sm:flex">Albums</h3>
        </div>
        <div className="menus text-base font-medium flex justify-center sm:justify-start gap-6 items-center text-[#b3b3b3]">
          <FaHeart className="menuIcons" color="#b3b3b3" size={32} />
          <h3 className="hidden sm:flex">Liked</h3>
        </div>
        <div className="menus text-base font-medium flex justify-center sm:justify-start gap-6 items-center text-[#b3b3b3]">
          <BiLibrary className="menuIcons" color="#b3b3b3" size={32} />
          <h3 className="hidden sm:flex">Library</h3>
        </div>
      </div>
      <div className="hidden w-[95%] bg-yellow-400 sm:flex flex-col gap-4 shrink-0">
        <div className="flex flex-wrap gap-2  shrink-0 text-xs font-semibold text-gray-400">
          <p >Legal</p>
          <p>Privacy Policies</p>
          <p>Cookies</p>
          <p>About us</p>
          <p>Legal</p>
          <p>Legal</p>
        </div>
        <div className="">
          <button className="px-3.5 py-1 flex gap-2 justify-center items-center text-base font-bold text-white bg-[#121212] border border-gray-300 rounded-full hover:scale-105">
            <TfiWorld size={15} />
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
