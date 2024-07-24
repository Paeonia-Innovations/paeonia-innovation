import React, { useEffect, useState, useRef } from "react";

export const Purpose = (props) => {
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
    <div id="purpose" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""}`}
                >
                  <div className="purpose-item">
                    <h3>{d.title}</h3>
                    <div className="spacer"></div> {/* Add a spacer div */}
                    <p>
                      {" "}
                      Paeonia Innovations is the R&D arm dedicated to
                      <span class="highlight"> incubating </span> and{" "}
                      <span class="highlight">
                        building technology ventures
                      </span>
                      , <span class="highlight">accelerating</span> their growth
                      <span class="highlight">
                        {" "}
                        from ideas to commercialization
                      </span>
                      .{" "}
                    </p>
                    {/* </div> */}
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
