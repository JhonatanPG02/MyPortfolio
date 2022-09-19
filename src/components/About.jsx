import React from "react";
import img from '../assets/portfolio/jhon.jpeg'

const About = () => {
  return (
    <div
      name="Sobre mí"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre mí
          </p>
        </div>


        <p className="text-xl mt-20">
        Hola! Mi nombre es Jhonatan Prado, soy un desarrollador web Full Stack, focalizado en el área de Front-end con muchas ganas de aportar y seguir aprendiendo en el mundo laboral IT. He tenido experiencia previa como capacitador y coordinador de equipos operativos en el área de atención al cliente y hoy estoy en busca de la oportunidad de mostrar mis habilidades en todo lo referente a programación.
        </p>
        <p className="text-xl mt-20">
        Soy una persona adaptable al cambio, con disposición a aportar en todo momento, proactivo y me gusta el trabajo en equipo. En mis ratos libres me gusta un poco de videojuegos, cine, la música y sobretodo amante de las mascotas.
        </p>
      
      </div>
    </div>
  );
};

export default About;
