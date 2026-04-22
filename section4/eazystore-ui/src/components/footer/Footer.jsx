import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#5B21B6",
        }}
      >
        Demo of global CSS scope from footer
      </h1>
      {/*<h1 className="my-heading">Demo of global CSS scope from footer</h1>*/}

      <footer className="footer">
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          className="footer-icon"
          aria-hidden="true"
        />
        by
        <a href="https://eazybytes.com/" target="_blank" rel="noreferer">
          eazybytes
        </a>
      </footer>
    </>
  );
}
