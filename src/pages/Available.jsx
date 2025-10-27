import React from "react";
import { Link } from "react-router-dom";
import ava1 from "../assets/images/available/ava-1.jpeg";
import ava2 from "../assets/images/available/ava-2.jpeg";
import ava3 from "../assets/images/available/ava-3.jpeg";
import ava4 from "../assets/images/available/ava-4.jpeg";
import ava5 from "../assets/images/available/ava-5.jpeg";
import ava6 from "../assets/images/available/ava-6.jpeg";
import ava7 from "../assets/images/available/ava-7.jpeg";
import ava8 from "../assets/images/available/ava-8.jpeg";
const availableArts = [
  {
    id: 1,
    image: ava1,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 2,
    image: ava2,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    image: ava3,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 4,
    image: ava4,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 5,
    image: ava5,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 6,
    image: ava6,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 7,
    image: ava7,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
  {
    id: 8,
    image: ava8,
    imageName: "Lorem, ipsum dolor",
    imageDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, neque! Architecto, reiciendis! Corporis nihil pariatur voluptates quis suscipit vitae.",
    buttonText: "Buy Now",
  },
];
const Available = () => {
  return (
    <div className="px-8">
      <div className="my-12">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Original Art for Your Space
        </h1>
      </div>

      <div className="lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
      {availableArts.map ((art) => (
         <div key={art.id} className="shadow-lg rounded-xl overflow-hidden flex flex-col bg-white">
          <div className="w-full h-56">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={art.image}
              alt={art.name}
            />
          </div>
          <div className="p-6 flex flex-col">
            <h1 className="text-2xl font-medium">{art.imageName}</h1>
            <p className="text-slate-500 text-lg mt-3">
            {art.imageDescription}
            </p>
            <Link to="https://wa.me/8801891521080" target="_blank" className="text-center bg-sky-600 text-white py-2 rounded-lg font-semibold mt-6 focus:scale-95 transition-all duration-200 ease-out">
              Buy Now
            </Link>
          </div>
        </div>  
    ))}
      </div>
    </div>
  );
};

export default Available;
