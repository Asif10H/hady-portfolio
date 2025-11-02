import React from "react";
import profileImage from "../assets/images/personal-image/hadi-pro.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeData from "../assets/data/homeData.json";
import ScrollToTop from "../components/ScrollToTop";
const images = import.meta.glob(
  "../assets/images/home-image/*.{jpg,jpeg,png,svg}",
  { eager: true }
);
// const imageList = Object.values(images).map((img) => img.default);
const unsortedImageList = Object.values(images).map((img) => img.default);
// console.log(unsortedImageList);

const imageList = unsortedImageList.sort((a, b) => {
  const numA = parseInt(a.match(/hom-(\d+)\./)[1]);
  const numB = parseInt(b.match(/hom-(\d+)\./)[1]);
  return numA - numB;
});
// console.log("hello");
// console.log(imageList);
const galleryArts = imageList.map((image, index) => ({
  id: index + 1,
  image,
  imageName: homeData[index]?.imageName || `demo-name  ${index + 1}`,
  imageDescription:
    homeData[index]?.imageDescription || "this is demo description .",
  buttonText: "Buy Now",
}));

const Home = () => {
  return (
    <div>
      <section className="p-8 my-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="HM Hady"
              className="w-80 h-80 lg:w-96 lg:h-96  rounded-full object-cover shadow-md border-8 border-white"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="relative inline-block text-4xl lg:text-5xl font-bold text-gray-800 pb-3">
              HM Hady
              <svg
                className="absolute left-0 bottom-0 lg:-bottom-3 w-full"
                viewBox="0 0 200 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 5 15 Q 100 3 195 15"
                  stroke="#2584F6"
                  strokeWidth="7"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </h1>

            <h2 className="text-2xl text-gray-600 mt-3 font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Artist & Architecture Student
            </h2>
            <p className="font-serif text-lg text-gray-700 leading-relaxed max-w-prose mx-auto lg:mx-0 mt-6">
              I am HM Hady, an artist and architecture student at Bangladesh
              University, Dhaka. My practice is rooted in acrylic, watercolor,
              and pencil, exploring spirituality, emotion, and the expressive
              potential of composition to transform inner reflection into visual
              form.
            </p>
            <Link
              to="https://www.facebook.com/h.m.hady.2024"
              target="_blank"
              className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg mt-8 text-lg hover:bg-sky-700 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      <section className="p-4 sm:p-8 mt-4">
        <div className="my-12">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Explore The Gallery
          </h1>
        </div>
        <div>
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
                    className="w-full h-full p-3 object-cover rounded-2xl"
                    src={art.image}
                    alt={art.imageName}
                  />
                    
                </div>
                <div className="p-3 text-center flex flex-col">
                      <h1 className=" text-2xl font-medium capitalize">{art.imageName}</h1>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Home;
