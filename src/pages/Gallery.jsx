import React from "react";
import { Link } from "react-router-dom";

import artData from "../assets/data/artData.json";

const images = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,svg}",
  { eager: true }
);

const imageList = Object.values(images).map((img) => img.default);

const availableArts = imageList.map((image, index) => ({
  id: index + 1,
  image,
  imageName: artData[index]?.imageName || `demo-name  ${index + 1}`,
  imageDescription:
    artData[index]?.imageDescription || "this is demo description .",
  buttonText: "Buy Now",
}));

const Available = () => {
  return (
    <div className="px-8">
      <div className="my-12">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Original Art for Your Space
        </h1>
      </div>

      <div className="lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {availableArts.map((art) => (
          <div
            key={art.id}
            className="shadow-lg rounded-xl overflow-hidden flex flex-col bg-white"
          >
            <div className="w-full h-56">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={art.image}
                alt={art.imageName}
              />
            </div>
            <div className="p-6 flex flex-col">
              <h1 className="text-2xl font-medium">{art.imageName}</h1>
              <p className="text-slate-500 text-lg mt-3">
                {art.imageDescription}
              </p>
              <Link
                className="text-center bg-sky-600 text-white py-2 rounded-lg font-semibold mt-6 focus:scale-95 transition-all duration-200 ease-out"
                to="#"
              >
                {art.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Available;
