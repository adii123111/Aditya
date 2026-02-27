import { ExternalLink, Github } from "lucide-react";
// import React from "react";
import projImg2 from "../assets/img/Moodify.png";
import projImg3 from "../assets/img/Nasa.png";
import projImg1 from "../assets/img/Audify.png";

const Project = () => {
  const projects = [
    {
      title: "Moodify",
      description:
        "This project, titled Moodify – Emotion Based Music Player, is a web application that uses face-api.js to detect user emotions in real time through webcam facial recognition and dynamically play music based on detected moods. It integrates Firebase Authentication for secure login and registration while providing a responsive and user-friendly interface. The project demonstrates the integration of computer vision with modern web technologies to create a personalized music experience.",
      image: projImg2, // Store the image path
      featured: true,
      links: {
        github: "https://github.com/adii123111/Moodify",
      },
    },
    {
      title: "Nasa App",
      description:
        "This project, titled – NASA Explorer App, is a ReactJS-based web application that integrates NASA public APIs to display space-related information, including the Astronomy Picture of the Day (APOD). The application features dynamic data rendering, efficient API handling, and a modern user interface, demonstrating practical experience in API integration and React state management.",
      image: projImg3,
      links: {
        github: "https://github.com/adii123111/Nasa",
      },
    },
    {
      title: "Audify",
      description:
        "This project, titled – Audify, is a browser-based music player built using HTML, CSS, and JavaScript. It features dynamic audio controls such as play, pause, track navigation, and progress tracking, with JavaScript handling DOM manipulation and audio functionality. The responsive UI is structured with HTML and styled using CSS, demonstrating strong fundamentals in frontend development and interactive media handling.",
      image: projImg1,
      links: {
        github: "https://github.com/adii123111/audify",
      },
    },
  ];


  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-12 bg-[rgb(10,25,47)]  min-h-screen"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl lg:text-4xl lg:ml-12 font-semibold text-teal-400 mb-16 text-center md:text-left hover:underline">
        03. Some Things I've Built
      </h2>

      <div className="space-y-16 md:space-y-24 lg:px-16">
        {projects.map((project, index) => (
          <div key={project.title} className="relative text-md">
            {/* Project Card */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative group">
                <div className="absolute inset-0 bg-teal-400/10 group-hover:bg-transparent transition-all duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:opacity-80"
                />
              </div>

              {/* Content Section */}
              <div
                className={`w-full md:w-2/5 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {project.featured && (
                  <p className="text-teal-400 text-sm mb-2">Featured Project</p>
                )}
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  {project.title}
                </h3>
                <div className="bg-[rgb(17,34,64)] p-6 rounded-lg shadow-lg mb-6">
                  <p className="text-slate-400">{project.description}</p>
                </div>

                {/* Links */}
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  {Object.keys(project.links).map((link) => (
                    <a
                      key={link}
                      href={project.links[link]}
                      className="text-slate-400 hover:text-teal-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link === "github" ? (
                        <Github size={20} />
                      ) : (
                        <ExternalLink size={20} />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/adii123111?tab=repositories"
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 border border-teal-300 text-teal-300 blueShadow duration-200 rounded hover:bg-teal-300/10 transition-colors"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Project;
