import React, { useState } from "react";
import { Tickets } from "./Data";

const TicketItems = () => {
  const [playerTicket, setPlayerTicket] = useState(Tickets);
  return (
    <>
      {playerTicket.map((element, index) => (
        <div className="ticket-item shadow-2xl max-w-[250px]" key={index}>
          <div className="ticket-image">
            <img src={element.imgUrl} alt="" />
          </div>

          <div className="ticket-text p-[18px] border-t mx-[8px] border-dashed text-center">
            {element.name} <br /> <br />
            {element.time} <br /> <br />
            {element.venue} <br /> <br />
            <span className="p-[12px] flex justify-center cursor-pointer bg-black text-white"> {element.headline} </span>
          </div>
        </div>
      ))}
    </>
  );
};

const Ticket = () => {
  return (
    <>
      <div className="ticket-box flex flex-wrap gap-[32px] justify-center mt-[32px] relative p-[32px]">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button className="btn btn-circle">❮</button>
          <button className="btn btn-circle">❯</button>
        </div>
        <TicketItems />
      </div>
    </>
  );
};

export default Ticket;
