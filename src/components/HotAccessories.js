import React from "react";
import HotItemCard from "./HotItemCard.js";
import "../styles/HotAccessories.css";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  homeDevice,
  homeDeviceCover,
  lifestyleDevice,
  lifestyleDeviceCover,
  mobileDevice,
  mobileDeviceCover,
}) => {
  return (
    <div className="HotAccessories">
      {/* 1st child */}
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeDeviceCover ||
            lifestyleDeviceCover ||
            mobileDeviceCover
          }
          alt="Cover"
        />
      </div>

      {/* 2nd child */}
      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {homeDevice &&
          homeDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {lifestyleDevice &&
          lifestyleDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        {mobileDevice &&
          mobileDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
