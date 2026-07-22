import React from "react";

const Card = ({
  cardImage = "https://i.scdn.co/image/ab67616d00001e02ba655d8d20b5aadb16e463aa",
  name = "Dopamine",
  subName = "Artist",
  imgStyle = "rounded-md",
  nameStyle="",
  subNameStyle=""
  
}
) => {
  console.log(cardImage,name,subName);
  return (
    <div className="card shrink-0 w-48 flex flex-col p-3 rounded-md mb-1 hover:bg-[#1f1f1f] transition ease-[cubic-bezier(.3,0,0,1)]  duration-400">
      <div className="cardInsideWrapper">
        <div className={`cardImage ${imgStyle} w-40 h-40  bg-amber-700 overflow-hidden mb-1`}>
          {console.log(cardImage)}
          <img src={cardImage} className={`w-full h-full object-cover ${imgStyle}`}/>
        </div >
        <div className="cardDetails text-white mt-4">
          <h3 className={`name ${nameStyle} text-white mb-1`}>{name}</h3>
          <h3 className={`subName text-gray-300 mb-1 ${subNameStyle}`}>{subName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
