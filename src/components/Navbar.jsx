import { useState } from "react";
import { FaSearch, FaSpotify, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const [openBar,setOpenBar] = useState(false);
    const handleSearchClick = () =>{
        // console.log("open")
        setOpenBar(!openBar)
    }
  return (
    <div className="navbar  bg-black flex justify-between p-1 sm:p-2 items-center shrink-0 ">
      <div className="BrandingLogo font-semibold text-white flex shrink-0 justify-center items-center gap-2 text-2xl">
        <FaSpotify color="#1DB954" size={38} />
        <h1 className="text-[#1DB954] hidden sm:inline-flex">Spotify</h1>
      </div>
      <div className={`${openBar?"w-[30%] bg-[#121212]":"w-max"} border-none px-0.5 sm:w-[40%]  py-1 sm:py-2 sm:px-5 sm:bg-[#121212] flex shrink-0 justify-center items-center gap-2 rounded-full border border-gray-500`}>
        <FaSearch size={18} id="search_icon" onClick={handleSearchClick}/>
        <input
          id="search_input"
          className={`text-white w-1/2 px-2 ${openBar?"inline-flex":"hidden"} sm:inline-flex sm:w-full outline-none `}
          placeholder="What do you want to play?"
        />
      </div>
      <div className="navbarActionOptions text-xs sm:text-sm gap-1 font-bold items-center flex shrink-0 justify-center sm:gap-2">
        <h2 className="px-2 py-2.5 text-[#b3b3b3]  hover:text-white">
          Sign up
        </h2>
        <h2 className="px-4 py-1.5 sm:px-8 sm:py-2.5 text-black bg-white rounded-full hover:scale-105">
          Log in
        </h2>
      </div>
    </div>
  );
};
export default Navbar;
