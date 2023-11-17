import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box ">
    <p className="font-medium sm:text-x1 text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-2 text-white mx-5 ">
      Hi there!👋🏿 My name is <span className="font-semibold  ">Winnie</span>
      <br />I am Software Engineer, I design stylish, modern responsive websites{" "}
      <br /> for all types of customers
    </h1>
  ),
  2: (
    <InfoBox
      text={
        <h1>
          I fell in love with web design <br /> the crazy things some few lines
          of code can do <br /> to see some of my past projects click the button
          below
        </h1>
      }
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Here are some of my past projects"
      link="/projects"
      btnText="View"
    />
  ),
  4: (
    <h1>
      <InfoBox
        text={
          <h1>
            I would love to hear from you <br />
            click the button below to send me a message!
          </h1>
        }
        link="/contact"
        btnText="click"
      />{" "}
    </h1>
  ),
  // 5: <h1>5</h1>,
  // 6: <h1>6</h1>,
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
