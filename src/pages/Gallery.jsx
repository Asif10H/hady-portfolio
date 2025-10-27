import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import artData from "../assets/data/artData.json";

const images = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,svg}",
  { eager: true }
);

const imageList = Object.values(images).map((img) => img.default);

const galleryArts = imageList.map((image, index) => ({
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
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="bg-sky-600 rounded-md text-white px-3 py-1">Hady's</span>
          <span className="px-3">Art Gallery</span>
        </h1>
      </div>

      <div className="lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {galleryArts.map((art, index) => (
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
            </div>
          </motion.div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Available;
