import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  "Reproducible results aligned with theory",
  "High-resolution RTD profiles, even in complex geometries",
  "Effortless setup with no specialized training required",
];

export const RTDP6 = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          // Adjust threshold as needed
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="rtdP6" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rtdPage6">
              <h3>SIMPLIFYING PRECISION: THE FUTURE OF RTD ANALYSIS</h3>

              <div className="col-12 col-md-12">
                <div className="spacer"></div>

                <p>
                  {" "}
                  Experience next-level flow analysis with our plug-and-play RTD
                  solution-designed for precision, simplicity, and real-time
                  insights. Accurately measure residence time distribution using
                  a compact, USB-powered device, complete with live tracer
                  monitoring and automated RTD plot generation.
                  <br />
                  Whether you're optimizing reactors, validating flow behavior,
                  or scaling up processes, our system delivers:
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      textAlign: "left",
                    }}
                  >
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <strong>
                    Streamline your research. Accelerate your development.
                    Simplify your RTD.
                  </strong>
                </p>
                <div className="spacer"></div>

                <div className="text-center mt-4">
                  <Link
                    to="/form"
                    className="btn"
                    style={{
                      backgroundColor: "#7a1b1f",
                      color: "#fff",
                      border: "none",
                      fontSize: "18px",
                    }}
                  >
                    I'm Interested – Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
