import React, { useEffect, useState, useRef } from "react";

export const Mission = (props) => {
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
    <div id="mission" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""}`}
                >
                  <div className="mission-item">
                    <h3>{d.title}</h3>
                    <div className="spacer"></div> {/* Add a spacer div */}
                    <p>
                      We create{" "}
                      <span class="highlight">
                        innovative analytical solutions
                      </span>{" "}
                      to serve the{" "}
                      <span class="highlight">pressing pain-points</span> of our
                      industrial customers by leveraging on our{" "}
                      <span class="highlight">
                        multi-disciplinary, technological expertise{" "}
                      </span>
                      (semiconductors, AI, and chemistry) and our{" "}
                      <span class="highlight">
                        global sales and support network
                      </span>
                      .
                    </p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
