import React from "react";
import Card from "./Card";

const RightHero = ({ Songs , heading,imgStyle,nameStyle,subNameStyle}) => {
  console.log(Songs);
  return (
    <div className="rightHero  rounded-md ">
      <div className="componentConainer bg-tekjal-600 p-6 ">
        <h1 className="componentHeading text-white text-2xl font-bold mb-4">
          {`${heading}`}
        </h1>
        <div className="cardContainer flex justify-start gap-2 my-2 overflow-x-auto">
          {Songs.map((Data) => (
            <Card
              cardImage={Data.image}
              name={Data.name}
              subName={Data.subName}
              key={Data.id}
              imgStyle={imgStyle}
              nameStyle={`${nameStyle}`}
              subNameStyle={subNameStyle}
            />
          ))}
          {/* {Datas.map((Data) => {
            // console.log(Data.image);
            return (
              <Card
                cardImage={Data.image}
                name={Data.name}
                subName={Data.subName}
                key={Data.id}
                nameStyle="text-base"
                subNameStyle="text-sm"
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default RightHero;
