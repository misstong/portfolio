import React, { useEffect, useRef, useState } from "react";
import Hand from "./Hand.gif";
import dpMale from "./dp_male.svg";
import "./index.css";
import Typed from "typed.js";
import BIRDS from "vanta/dist/vanta.birds.min";

const config = { attributes: true, childList: false, subtree: false };

// Callback function to execute when mutations are observed

const html = document.getElementsByTagName("html")[0];
function Index() {
  const ref = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        console.log(
          `The ${mutation.attributeName} attribute was modified.`,
          mutation,
          mutation.target.classList.contains("dark")
        );
        if (mutation.target.classList.contains("dark")) {
          vantaEffect?.setOptions({ backgroundColor: "rgb(20, 21, 22)" });
        } else {
          vantaEffect?.setOptions({ backgroundColor: "white" });
        }
      }
    }
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          backgroundColor:
            localStorage.lightMode === "dark" ? "rgb(20, 21, 22)" : "white",
        })
      );
    }
    const observer = new MutationObserver(callback);
    observer.observe(html, config);
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["web development", "AI", "Graphics"],
      typeSpeed: 60,
      loop: true,
    });
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div id="particles" ref={myRef}></div>
      <center>
        <div className="text">
          Hi<img style={{ display: "inline" }} src={Hand} width="35px"></img>{" "}
          I'm <span>Tong </span>
          <div>
            <img src={dpMale} alt="" height="200" width="200" />
          </div>
          <span>
            I am into{" "}
            <span
              ref={ref}
              data-words="Designing, UI/UX, Cloud Computing, Web Development, Open Source, Mentoring"
            ></span>
          </span>
        </div>
      </center>
    </div>
  );
}

export default Index;
