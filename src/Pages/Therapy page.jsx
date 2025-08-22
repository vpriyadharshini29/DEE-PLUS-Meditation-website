import React from "react";
import { Link } from "react-router-dom";

export default function TherapyServices() {
  const services = [
    { title: "Individual Therapy", img: "./images/individual.jpg" },
    { title: "Couple Therapy", img: "./images/couple.jpeg" },
    { title: "Family Therapy", img: "./images/family.jpg" },
    { title: "Group Therapy", img: "./images/group.jpg" },
    { title: "Online Therapy", img: "./images/online.png" },
  ];

  return (
    <div className="bg-pink-100 text-gray-800 px-6 py-12 font-['Roboto']">
      {/* Therapy Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold mb-6">DEE PLUS Therapy</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-gray-700 text-base md:w-3/5 text-justify">
            Therapy is a process where a person works with a trained professional to
            explore thoughts, feelings, and behaviors in order to improve mental health,
            cope with challenges, and promote personal growth.
          </p>
          <img
            src="./images/ft5.png"
            alt="Therapy session"
            className="rounded-lg shadow-md md:w-2/5"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-8">Our Services</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {services.map((service, index) => (
            <Link
              to="/family" // all go to /family
              key={index}
              state={{ therapyName: service.title }} // pass therapy name via state
              className="w-60 block hover:scale-105 transition transform no-underline hover:no-underline focus:no-underline"
            >
              <div className="rounded-t-2xl overflow-hidden shadow-md">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <h4 className="mt-3 font-medium text-gray-800">{service.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
