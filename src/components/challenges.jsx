import React, { useEffect, useState, useRef } from "react";

export const Challenges = (props) => {
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
    <div id="challenges" className="text-center">
      <div className="container">
        <div className={`col-md-12 challenges-item`} ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`}>
                  <div className="challenge-text">
                    <h3 className={`${inView ? "animated" : ""}`}>{d.title}</h3>
                    <div className="content-wrapper">
                      <div
                        className={`left-side ${inView ? "fadeInLeft" : ""}`}
                      >
                        <p>
                          Repeatability, accuracy and ease of measurement is
                          often a <span className="highlight">trilemma</span>{" "}
                          for most lab operators and something they usually have
                          to sacrifice one for the other.
                        </p>
                      </div>
                      <div className="vertical-line"></div>
                      <div
                        className={`right-side ${inView ? "fadeInRight" : ""}`}
                      >
                        <p>
                          We enable this by{" "}
                          <span className="highlight">breaking through</span>{" "}
                          this boundary with our{" "}
                          <span className="highlight">
                            semiconductors + AI approach
                          </span>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
