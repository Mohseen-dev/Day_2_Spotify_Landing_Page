import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" flex flex-col sm:flex-row  justify-between p-6 my-6 border-t border-gray-600">
      <div className=" flex flex-col sm:flex-row justify-between gap-2 w-[70%] mb-6 sm:mb-0">
        <div className="flex flex-col gap-2 text-[#878585] text-base font-medium my-2 sm:my-0">
          <h4 className="text-base text-white font-semibold">Company</h4>
          <h4>About</h4>
          <h4>Jobs</h4>
          <h4>For the Record</h4>
        </div>
        <div className="flex flex-col gap-2 text-[#878585] text-base  font-medium my-2 sm:my-0">
          <h4 className="text-base text-white font-semibold">Communities</h4>
          <h4>For Artists</h4>
          <h4>Developers</h4>
          <h4>Advertising</h4>
          <h4>Investors</h4>
          <h4>Vendors</h4>
        </div>
        <div className="flex flex-col gap-2 text-[#878585] text-base  font-medium my-2 sm:my-0">
          <h4 className="text-base text-white font-semibold">Useful Links</h4>
          <h4>Support</h4>
          <h4>Free Mobile App</h4>
          <h4>Popular by Country</h4>
          <h4>Top Song Lyrics</h4>
          <h4>Import your music</h4>
        </div>
        <div className="flex flex-col gap-2 text-[#878585] text-base  font-medium my-2 sm:my-0">
          <h4 className="text-base text-white font-semibold">Spotify Plans</h4>
          <h4>Premium Standard</h4>
          <h4>Premium Student</h4>
          <h4>Spotify Free</h4>
        </div>
      </div>
      <div className=" w-max gap-1.5 items-center h-min flex ">
        <button className="bg-[#3b3b3b] hover:bg-[#5e5b5b] rounded-full p-2.5 ">
          <FaInstagram size={21} color="white" />
        </button>
        <button className="bg-[#3b3b3b] hover:bg-[#5e5b5b] rounded-full p-2.5 ">
          <FaFacebook size={21} color="white" />
        </button>
        <button className="bg-[#3b3b3b] hover:bg-[#5e5b5b] rounded-full p-2.5 ">
          <FaTwitter size={21} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
