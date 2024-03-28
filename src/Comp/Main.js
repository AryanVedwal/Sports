import React from "react";
import Player from "./Player";
import Ticket from "./Tickets";

const Main = () => {
  return (
    <>
      <div className="main p-[32px]">
        <Player />
        <Ticket />
      </div>
    </>
  );
};

export default Main;
