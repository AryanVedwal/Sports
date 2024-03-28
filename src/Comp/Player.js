import React, { useState } from "react";
import { DataItem } from "./Data";

const PlayerItem = () => {
  const [item, setItem] = useState(DataItem);

  return (
    <>
      {item.map((element, index) => (
        <div
          className="player-item shadow-2xl h-[550px] md:w-[250px] w-[100%]"
          key={index}
        >
          <div className="item-image relative min-h-[350px] min-w-[210px]">
            <img
              className="w-[100%] h-[100%] absolute"
              src={element.imgUrl}
              alt=""
            />
          </div>

          <div className="item-name p-[12px]">
            <h1 className="text-center"> {`${element.name}`} </h1>
          </div>
          <div className="item-detail flex p-[12px] justify-around gap-[12px]">
            <span>
              Total Events
              <br />
              {element.totalEvents}
            </span>

            <span>
              Sports
              <br />
              {element.sports}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

const Player = () => {
  return (
    <>
      <div className="headline text-5xl border-b w-max py-[12px]">Sports</div>
      <br />
      <br />

      <div className="player-items min-h-[500px] flex flex-wrap content-center justify-center py-[12px] gap-[40px]">
        <PlayerItem />
        <div className=" h-[550px] shadow-2xl p-[8px] w-[250px]">
          <div className="ad-image">
            <img className="w-[250px]" src="/Images/adv.svg" alt="" />
          </div>

          <div className="ad-text text-center mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptate enim consequatur asperiores cumque quos, ducimus,
            laudantium dicta expedita dignissimos delectus laboriosam blanditiis
            hic debitis! Tempora nulla aliquid quo dicta!
          </div>
        </div>
      </div>
      <br />
      <div className="text-center">
        <button className="btn bg-blue-500 text-white dark:text-black">
          {" "}
          See More{" "}
        </button>
      </div>
    </>
  );
};

export default Player;
