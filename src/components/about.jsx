import React, { useEffect, useState, useRef } from "react";

export const About = (props) => {
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
    <div id="about">
      <div className="container">
        <div className="row" ref={ref}>
          <div
            style={{ paddingRight: "40px", paddingLeft: "20px" }}
            className={`col-xs-12 col-md-6 fade-in-up ${
              inView ? "animated" : ""
            }`}
          >
            <img
              src="img/portfolio/PIGroupPhoto.jpeg"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div
            className={`col-xs-12 col-md-6 fade-in-up ${
              inView ? "animated" : ""
            }`}
          >
            <div className="about-text">
              <h2>WHO WE ARE</h2>
              <p>
                At Paeonia Innovations, we are more than colleagues—we're a{" "}
                <span className="highlight">dedicated team</span> bonded by{" "}
                <span className="highlight">innovation</span> and a passion for{" "}
                <span className="highlight">excellence</span>. Together, we
                strive to redefine industry standards and deliver{" "}
                <span className="highlight">cutting-edge solutions</span> that
                empower our clients worldwide. With a{" "}
                <span className="highlight">collaborative spirit</span> and
                diverse expertise, we tackle challenges head-on, turning ideas
                into <span className="highlight">impactful realities</span>.
                Join us on our journey to drive forward, supported by a team
                committed to{" "}
                <span className="highlight">making a difference</span> in every
                project we undertake.
              </p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
