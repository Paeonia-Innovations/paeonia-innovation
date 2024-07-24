import React, { useEffect, useState, useRef } from "react";

export const Projects = (props) => {
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
    <div id="projects" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="projects-item">
                  <h3 className={`${inView ? "animated" : ""}`}>{d.title}</h3>
                  <div className="spacer"></div>
                  <p>
                    <ul>
                      <li
                        className={`${inView ? "fadeInLeft" : ""}`}
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        &bull; In less than{" "}
                        <span class="highlight">6 months</span>, our lean but
                        extremely
                        <span class="highlight"> ‘mean’</span> team{" "}
                        <span class="highlight">completed </span>
                        our{" "}
                        <span class="highlight">
                          first product prototype from chips
                        </span>{" "}
                        and <span class="highlight">AI code</span> all the way
                        to a working{" "}
                        <span class="highlight">hardware + software</span>{" "}
                        product prototype.
                      </li>
                      <li
                        className={`${inView ? "fadeInRight" : ""}`}
                        style={{ animationDelay: `${i * 0.5 + 0.5}s` }}
                      >
                        &bull; We are already{" "}
                        <span class="highlight">getting ready</span> to start
                        work on the <span class="highlight">next product</span>{" "}
                        in the <span class="highlight">product line</span>.
                      </li>
                      <li
                        className={`${inView ? "fadeInLeft" : ""}`}
                        style={{ animationDelay: `${i * 0.5 + 1}s` }}
                      >
                        &bull; <span class="highlight">Stay tuned</span> for our
                        launch with <span class="highlight">our partners</span>{" "}
                        at <span class="highlight">top conferences</span>.
                      </li>
                    </ul>
                  </p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
