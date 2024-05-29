import React from "react";
import { motion } from "framer-motion";
import Breakout from "./breakout.JPG";

import "./index.css";

function Index() {
  const projects = [
    {
      title: "ThreeJS Breakout",
      cardImage: Breakout,
      description: "A quiz app built using basic react.",
      tagimg: Breakout,
      Previewlink: "",
      Githublink: "https://misstong.github.io/threejs-breakout/",
    },
  ];
  return (
    <div style={{ padding: 20 }} className="parent">
      <div className="row">
        {projects.map((project) => {
          return (
            <motion.div
              className="card"
              key={project.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
            >
              <div
                className="wrapper"
                style={{
                  background: `url(${project.tagimg}) center / cover no-repeat`,
                }}
              >
                <div className="data">
                  <div className="content">
                    <div className="title-div">
                      <h1 className="title">{project.title}</h1>
                    </div>
                    <div className="links">
                      <a
                        href={project.Githublink}
                        class="social-icon"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="25"
                          viewBox="0 0 30 28"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
