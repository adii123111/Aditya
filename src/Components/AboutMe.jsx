import { motion } from "framer-motion";
// import React from "react";
import image from "../assets/img/profile.jpeg"

const AboutMe = () => {
  const backgroundVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div
      className="bg-[rgb(10,25,47)] min-h-screen pt-24 px-6 lg:px-12 flex flex-col lg:flex-row"
      id="aboutMe"
    >
      {/* Left Side Text Section */}
      <div className="lg:mr-12 lg:w-2/3 lg:ml-28 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-[rgb(100,255,218)] hover:underline mb-4"
        >
          01. About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[rgb(136,146,176)] text-lg sm:text-xl lg:text-2xl mb-4"
        >
     Hello everyone! My name is Aditya, and I enjoy building responsive and user-friendly web applications. My interest in web development started during my studies in Computer Science, where I developed a strong foundation in frontend development and modern UI design.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[rgb(136,146,176)] text-lg sm:text-xl lg:text-2xl mb-4"
        >
       I gained practical experience through a Frontend Development internship at Devtown and by building projects such as an Emotion-Based Music Player using real-time facial detection and a NASA Explorer App powered by public APIs. I primarily work with ReactJS and JavaScript, focusing on creating scalable applications with clean and intuitive interfaces.
        </motion.p>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="text-[rgb(136,146,176)] grid grid-cols-2 gap-x-16 gap-y-3 max-w-md"
>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-[rgb(100,255,218)]">
    {">"} HTML
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-[rgb(100,255,218)]">
    {">"} CSS
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-[rgb(100,255,218)]">
    {">"} JAVASCRIPT
  </a>

  <a href="https://legacy.reactjs.org/docs/getting-started.html" className="text-[rgb(100,255,218)]">
    {">"} REACTJS
  </a>

  <a href="https://docs.oracle.com/en/java/" className="text-[rgb(100,255,218)]">
    {">"} JAVA
  </a>

  <a href="https://dev.mysql.com/doc/" className="text-[rgb(100,255,218)]">
    {">"} SQL
  </a>

  <a href="https://tailwindcss.com/docs" className="text-[rgb(100,255,218)]">
    {">"} TAILWIND CSS
  </a>

  <a href="https://getbootstrap.com/docs/" className="text-[rgb(100,255,218)]">
    {">"} BOOTSTRAP
  </a>
</motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[rgb(136,146,176)] space-y-2"
        >
          <div className="flex gap-32">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="text-[rgb(100,255,218)]"
            >
              {">"} HTML
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="text-[rgb(100,255,218)]"
            >
            {">"} CSS
            </a>
          </div>

          <div className="flex gap-20">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="text-[rgb(100,255,218)]"
            >
              {">"} JAVASCRIPT
            </a>
            <a
              href="https://legacy.reactjs.org/docs/getting-started.html"
              className="text-[rgb(100,255,218)]"
            >
               {">"} REACTJS
            </a>
          </div>

          <div className="flex gap-32">
            <a
              href="https://docs.oracle.com/en/java/"
              className="text-[rgb(100,255,218)]"
            >
               {">"} JAVA
            </a>
            <a
              href="https://dev.mysql.com/doc/"
              className="text-[rgb(100,255,218)]"
            >
               {">"} SQL
            </a>
          </div>

          <div className="flex gap-28">
            <a
              href="https://nextjs.org/docs"
              className="text-[rgb(100,255,218)]"
            >
               {">"} TAILWIND CSS
            </a>
            <a
              href="https://www.typescriptlang.org/docs/"
              className="text-[rgb(100,255,218)]"
            >
               {">"} BOOTSTRAP
            </a>
          </div>
        </motion.div> */}
      </div>

      {/* Right Side Image Section */}
      <div className="lg:w-1/3 flex items-center justify-center mt-10 lg:-mt-64">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="w-64 h-64 sm:w-80 sm:h-80 bg-[rgb(100,255,218)] hover:opacity-20 rounded-lg flex items-center justify-center overflow-hidden"
        >
           <img
            src={image} // Corrected to use the imported image variable
            alt="Profile image"
            className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
