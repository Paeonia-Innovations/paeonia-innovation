import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

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
      <div className="container navbar-container">
        <div className="navbar-left">
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
          <Link
            to="/"
            className="navbar-brand page-scroll"
            onClick={() => props.onNavClick("homePage")}
          >
            <img
              className="img-responsive"
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
                cursor: "pointer",
              }}
            />
          </Link>
          {/* <a
            className="navbar-brand page-scroll"
            href="#page-top"
            onClick={() => props.onNavClick("homePage")}
          >
            <img
              className="img-responsive"
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
          </a>{" "} */}
          {/* <a
            className="navbar-brand spectrometer-link"
            href="#novelMidIRSpectrometer"
            onClick={() => props.onNavClick("productPage")}
          >
            Novel Mid-IR Spectrometer
          </a> */}
        </div>

        {/* <div
          className="collapse navbar-collapse navbar-right"
          id="bs-example-navbar-collapse-1"
        > */}
        <div className="navbar-right">
          {/* <ul className="nav navbar-nav navbar-right">
            <li> */}

          <Dropdown className="custom-dropdown">
            <Dropdown.Toggle id="dropdown-usecases" className="custom-toggle">
              Use Cases
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-menu">
              <Dropdown.Item className="custom-item">
                <Link to="/reaction-monitoring" className="dropdown-link">
                  &nbsp;&nbsp;&nbsp;Reaction Monitoring
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="custom-dropdown">
            <Dropdown.Toggle id="dropdown-basic" className="custom-toggle">
              Events
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-menu">
              {/* <Dropdown.Item className="custom-item">
                <Link to="/eventRegistration" className="dropdown-link">
                  &nbsp;&nbsp;&nbsp;Register for Our Seminar!
                </Link>
              </Dropdown.Item> */}
              {/* <hr
                style={{
                  margin: "4px 0",
                  borderTop: "1px solid #ccc",
                  width: "100%",
                }}
              /> */}
              <Dropdown.Item className="custom-item">
                <Link to="/form" className="dropdown-link">
                  &nbsp;&nbsp;&nbsp;Form
                </Link>
              </Dropdown.Item>
              {/* <Dropdown.Item
                className="custom-item"
                onClick={() => props.onNavClick("productPage")}
              >
                &nbsp;&nbsp;&nbsp;Novel Mid-IR Spectrometer
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="custom-dropdown">
            <Dropdown.Toggle id="dropdown-basic" className="custom-toggle">
              Products
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-menu">
              <Dropdown.Item className="custom-item">
                <Link to="/novelMidIRSpectrometer" className="dropdown-link">
                  &nbsp;&nbsp;&nbsp;Novel Mid-IR Spectrometer
                </Link>
              </Dropdown.Item>
              {/* <Dropdown.Item
                className="custom-item"
                onClick={() => props.onNavClick("productPage")}
              >
                &nbsp;&nbsp;&nbsp;Novel Mid-IR Spectrometer
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Link
            to="/#contact"
            className="page-scroll"
            onClick={() => props.onNavClick("contactPage")}
          >
            <img
              src="img/email.png"
              alt="Contact Icon"
              className="contact-icon"
            />
          </Link>
          {/* <a href="#contact" className="page-scroll">
            <img
              src="img/email.png"
              alt="Contact Icon"
              className="contact-icon"
            />
          </a> */}
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
