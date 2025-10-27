import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import availableData from "../assets/data/availableData.json";

const image = import.meta.glob(
  "../assets/images/available/*.{jpg,jpeg,png,svg}",
  { eager: true }
);
const imageList = Object.values(image).map((img) => img.default);
// console.log(image);
// console.log(imageList);

const availableArts = imageList.map((image, index) => ({
  id: index + 1,
  image,
  imageName: availableData[index]?.imageName || `default demo name ${index}`,
  imageDescription:
    availableData[index]?.imageDescription || "this is demo name.",
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
        {availableArts.map((art, index) => (
          <motion.div
            key={art.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            }}
            whileTap={{
              scale: 0.99,
              transition: { duration: 0.15 },
            }}
            className="shadow-lg rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-2xl"
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
                to="https://wa.me/8801891521080"
                target="_blank"
                className="text-center bg-sky-600 text-white py-2 rounded-lg font-semibold mt-6 focus:scale-95 transition-all duration-200 ease-out"
              >
                {art.buttonText}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
       <ScrollToTop />
    </div>
  );
};

export default Available;
