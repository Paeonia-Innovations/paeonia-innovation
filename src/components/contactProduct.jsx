import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const ContactProduct = (props) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div id="contactProduct">
        <div className="container">
          <div
            className={`col-md-12 ${formInView ? "fade-in-up animated" : ""}`}
            ref={formRef}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Reach out to us at{" "}
                  <a href={`mailto:${props.data.email}`} className="email-link">
                    {props.data.email}
                  </a>{" "}
                  to get a quotation, learn more about our offerings or have
                  more detailed information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
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

          <p>&copy; 2024 Design by Paeonia Innovations</p>
        </div>
      </div>
    </div>
  );
};
