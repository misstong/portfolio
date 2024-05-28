import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
const html = document.getElementsByTagName("html")[0];

function Index() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (localStorage.lightMode === "dark") {
      html.classList.add("dark");
      setChecked(true);
    }
  }, []);
  let location = useLocation();

  const toggle_light_mode = () => {
    console.log(localStorage.getItem("lightMode"));

    if (localStorage.lightMode === "dark") {
      localStorage.lightMode = "light";
      html.classList.remove("dark");
      setChecked(false);
    } else {
      html.classList.add("dark");
      localStorage.lightMode = "dark";
      setChecked(true);
    }
  };
  const links = [
    {
      to: "/",
      label: "Home",
    },
    // {
    //   to: "/experience",
    //   label: "Experience",
    // },
    {
      to: "/projects",
      label: "Porjects",
    },
    // {
    //   to: "/education",
    //   label: "Education",
    // },
  ];

  console.log(location.pathname);
  return (
    <nav className="flex justify-between px-4 py-2 navbar navbar-dark">
      <a className="navbrand">Tong marsh</a>
      <div className="grow ">
        <ul className="flex navbar-nav justify-end">
          {links.map((l) => {
            return (
              <li key={l.to} className={classNames("nav-item nav-item-hover")}>
                <Link
                  className={classNames("nav-link", {
                    "current-link": location.pathname === l.to,
                  })}
                  to={l.to}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="nav-item ">
            <input
              type="checkbox"
              className="dark_toggler "
              onClick={toggle_light_mode}
              value={checked}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Index;
