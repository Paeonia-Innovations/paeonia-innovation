import React, { useEffect, useState } from "react";

export const Navigation = (props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerHeight = document.querySelector(".site-header").offsetHeight;

      // Show header if scrolled to top or scrolling up
      setVisible(
        currentScrollPos <= headerHeight || currentScrollPos < prevScrollPos
      );

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top site-header ${
        visible ? "" : "--is-hidden"
      }`}
    >
      <div className="container">
        <div className="navbar-header">
          {/* <a href="#contact" className="page-scroll contact-icon-all-screens">
            <img
              src="img/email.png"
              alt="Contact Icon"
              className="contact-icon"
            />
          </a> */}
          {/* <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button> */}
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              className="pi-logo"
              src={`${process.env.PUBLIC_URL}/PI logo nows.svg`}
              alt="Logo"
              aria-label="logo"
              style={{
                width: "200px",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "0px",
                cursor: "pointer", // Ensure cursor changes to pointer on hover
              }}
            />
          </a>{" "}
        </div>
        {/* <div
          className="collapse navbar-collapse navbar-right"
          id="bs-example-navbar-collapse-1"
        > */}
        <div className="navbar-right">
          {/* <ul className="nav navbar-nav navbar-right">
            <li> */}
          <a href="#contact" className="page-scroll">
            <img
              src="img/email.png"
              alt="Contact Icon"
              className="contact-icon"
            />
          </a>
          {/* </li>
          </ul> */}
        </div>

        {/* <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};
