import React, { useEffect, useState, useRef } from "react";

export const Vision = (props) => {
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
    <div id="vision" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""}`}
                >
                  <div className="vision-item">
                    <h3>{d.title}</h3>
                    <div className="spacer"></div> {/* Add a spacer div */}
                    <p>
                      Our goal is to be the{" "}
                      <span class="highlight">
                        top global innovation powerhouse{" "}
                      </span>
                      that produces{" "}
                      <span class="highlight">
                        novel and leading analytical solutions{" "}
                      </span>
                      to solve all{" "}
                      <span class="highlight">measurement pain-points</span> of
                      our customers through our{" "}
                      <span class="highlight">
                        partnerships with prestigious universities and research
                        institutes worldwide
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
