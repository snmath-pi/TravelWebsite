import React from "react";
import Button from "./Button";
const DestinationCard = (props) => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className="w-full lg:w-2/6 cursor-pointer hover:shadow-[0_3px_10px_rgb(0, 0, 0, 0.2)]">
      <img className="rounded-t-lg" src={props.img} alt="props" />
      <div className="bg-[#f2f2f2] p-5 space-y-3 ronded-b-lg">
        <h2 className="text-xl font-medium text-center">{props.title}</h2>
        <p>{props.para}</p>

        <div className="flex flex-row justify-center">
          <Button title="Book Tickets" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
