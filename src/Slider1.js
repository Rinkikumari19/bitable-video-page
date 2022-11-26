import React from "react";
import Slider from "react-draggable-slider";

export default function Slider1() {
  const projectList = [
    {
      title:
        "Essential for engaging teammates who will never set foot in our office. And 75% faster to make!",
      image:
        "https://biteable.com/content/uploads/2022/03/Scott-Sorensen-264x264-c-default.jpg"
    },
    {
      title: "My team was blown away by what we could turn around so fast.",
      image:
        "https://biteable.com/content/uploads/2022/03/Sarah-Jester-264x264-c-default.jpg"
    },
    {
      title:
        "Essential for engaging teammates who will never set foot in our office. And 75% faster to make!",
      image:
        "https://biteable.com/content/uploads/2022/03/Scott-Sorensen-264x264-c-default.jpg"
    },
    {
      title: "My team was blown away by what we could turn around so fast.",
      image:
        "https://biteable.com/content/uploads/2022/03/Sarah-Jester-264x264-c-default.jpg"
    }
  ];

  const sliderSettings = {
    data: projectList,
    speed: 3000,
    bgColor: "#ff5000",
    showButton: true,
    buttonText: "Website",
    buttonHref: "https://www.villagetalkies.com/",
    buttonTarget: "_self"
  };
  return (
    <>
      <Slider className="slider-bg" sliderSettings={sliderSettings} />
    </>
  );
}
