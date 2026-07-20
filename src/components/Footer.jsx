import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between p-6">
      <div className="bg-green-400 flex justify-between w-[70%]">
        <div>
          <h4>Company</h4>
          <h4>About</h4>
          <h4>Jobs</h4>
          <h4>For the Record</h4>
        </div>
        <div>
          <h4>Communities</h4>
          <h4>For Artists</h4>
          <h4>Developers</h4>
          <h4>Advertising</h4>
          <h4>Investors</h4>
          <h4>Vendors</h4>
        </div>
        <div>
          <h4>Useful Links</h4>
          <h4>Support</h4>
          <h4>Free Mobile App</h4>
          <h4>Popular by Country</h4>
          <h4>Top Song Lyrics</h4>
          <h4>Import your music</h4>
        </div>
        <div>
          <h4>Spotify Plans</h4>
          <h4>Premium Standard</h4>
          <h4>Premium Student</h4>
          <h4>Spotify Free</h4>
        </div>
      </div>
      <div className="bg-violet-900 w-[15%]">
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaInstagram />
        </button>
      </div>
    </div>
  );
};

export default Footer;
