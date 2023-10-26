import { IconBrandGithub } from "@tabler/icons";
import React from "react";

const Footer = () => {
  return (
    <nav
      style={{ width: "auto" }}
      className="navbar  navbar-light bg-light text-center "
    >
      <div className="container-fluid ">
        <p
          style={{
            color: "white",
            marginLeft: "50%",
            fontFamily: "Bebas Neue",
          }}
          className="navbar-brand h1"
        >
          {" "}
          Luis02k - &copy; {new Date().getFullYear()}{" "}
          <a
            style={{
              marginLeft: "10px",
              justifyContent: "center",
              marginTop: "2px",
            }}
            href="https://github.com/Luis02k"
            target="blank"
          >
            {<IconBrandGithub color="white" />}
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Footer;
