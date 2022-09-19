import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/node.png"
import postgreSQL from "../assets/postgres.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node Js",
      style: "shadow-lime-500",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: postgreSQL,
      title: "postgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: nextjs,
      title: "Next Js",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <br/>
          <br/>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tecnologías:
          </p>
          <p className="py-6">Estas son las tecnologías que manejo:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Experience;