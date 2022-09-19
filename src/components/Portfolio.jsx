import React from "react";
import dogs from '../assets/portfolio/dogsapp.jpeg'
import mainstage from '../assets/portfolio/mainstage.jpeg'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dogs,
      href: "https://pi-dogs-teal.vercel.app/",
      href2: "https://github.com/JhonatanPG02/PI-Dogs/",
    },
    {
      id: 2,
      src: mainstage,
      href: "https://mainstage.vercel.app/",
      href2: "https://github.com/Hecatonquir/Final_Project_18-07-2022/",
    },
    // {
    //   id: 3,
    //   src: mainstage,
    // },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="Proyectos"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Proyectos:
          </p>
          <p className="py-6">
            Algunos de mis proyectos:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 ">
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  target="_blank"
                  rel="noreferrer"
                >
              Demo
              </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 ">
                <a
                  href={href2}
                  className="flex justify-between items-center w-full text-white"
                  target="_blank"
                  rel="noreferrer"
                >
              Code
              </a>
                </button>
              </div>
            </div>
          ))}
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;