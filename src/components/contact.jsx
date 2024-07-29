import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [, setState] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState(""); //state for success message
  const [formInView, setFormInView] = useState(false); // state to track if form is in view
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const elementPosition =
          formRef.current.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          setFormInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check once on mount in case form is already in view
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    props.data.address
  )}`;

  //Function to detect mobile device
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_glye7pm", //service ID from EmailJS
        "template_dgm8t1d", //template ID from EmailJS
        e.target,
        "Q0syV6H_5pAHvwxU9" //public key from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setSuccessMessage("Email sent to the Paeonia Team successfully!");
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div
            className={`col-md-8 ${formInView ? "fade-in-up animated" : ""}`}
            ref={formRef}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Contact us today to learn more about our expertise and how we
                  can support your success.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
              {successMessage && (
                <div className="alert alert-success mt-3">{successMessage}</div>
              )}
            </div>
          </div>
          <div
            className={`col-md-3 col-md-offset-1 contact-info ${
              formInView ? "fade-in-up animated" : ""
            }`}
          >
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {/* {props.data ? props.data.address : "loading"} */}
                <a
                  href={googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  {props.data.address}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {/* {props.data ? props.data.phone : "loading"} */}
                {isMobile() ? (
                  <a href={`tel:${props.data.phone}`} className="phone-link">
                    {props.data.phone}
                  </a>
                ) : (
                  <span className="phone-text">{props.data.phone}</span>
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {/* {props.data ? props.data.email : "loading"} */}
                <a href={`mailto:${props.data.email}`} className="email-link">
                  {props.data.email}
                </a>
              </p>
            </div>

            <div className="contact-item">
              <p>
                Link to{" "}
                <a
                  href="https://www.paeonia.com.sg/"
                  className="paeonia-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paeonia Group
                </a>
              </p>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  { <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> }
                  <li>
                    <a
                      href="https://www.linkedin.com/company/paeonia-group/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Design by Paeonia Innovations
            {/* {" "} */}
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
          {/* <object
            className="Apppi-logo1"
            type="image/svg+xml"
            data={`${process.env.PUBLIC_URL}/pi_full_icon5.svg`}
            aria-label="logo"
            style={{
              width: "200px",
              height: "30px",
              display: "block",
              marginLeft: "auto",
              marginTop: "0px",
            }}
          >
            Your browser does not support SVG
          </object> */}
        </div>
      </div>
    </div>
  );
};
