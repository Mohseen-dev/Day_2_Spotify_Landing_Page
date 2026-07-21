import React from "react";

const Card = ({
  cardImage = "https://i.scdn.co/image/ab67616d00001e02ba655d8d20b5aadb16e463aa",
  name = "Dopamine",
  subName = "Wing",
  imgStyle = "rounded-md",
  CardDetailStyle,
}) => {
  return (
    <div className="card shrink-0 w-48 flex flex-col p-3 rounded-md mb-1 hover:bg-[#1f1f1f] transition ease-[cubic-bezier(.3,0,0,1)]  duration-400">
      <div className="cardInsideWrapper">
        <div className={`cardImage ${imgStyle} overflow-hidden mb-1`}>
          <img src="https://i.scdn.co/image/ab67616d00001e02ba655d8d20b5aadb16e463aa" />
        </div>
        <div className="cardDetails text-white">
          <h3 className="name text-white mb-1">Dopamine</h3>
          <h3 className="subName text-gray-300 mb-1">Wing</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
