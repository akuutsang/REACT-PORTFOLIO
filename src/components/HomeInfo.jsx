import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-4 text-white mx-5 flex flex-col ">
    {text}
    <Link to={link}>{btnText}</Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-2 text-white mx-5 ">
      Hi there! My name is <span className="font-semibold  ">Winnie</span> 👋🏿
      <br />I am Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="I design stylish, modern responsive websites for all types of customers "
      link="/about"
      btnText="Learn more"
    />
  ),
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
