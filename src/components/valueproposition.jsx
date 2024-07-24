import React, { useEffect, useState, useRef } from "react";

export const ValueProposition = (props) => {
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
    <div id="valueproposition" className="text-center">
      <div className="container">
        {/* <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div> */}
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""}`}
                >
                  <div className="valueproposition-item">
                    {/* <div className="valueproposition-content"> */}
                    <h3>{d.title}</h3>
                    <div className="spacer"></div> {/* Add a spacer div */}
                    <p>
                      {" "}
                      At Paeonia Innovations, we are creating the world’s most{" "}
                      <span class="highlight">compact solutions</span> to enable{" "}
                      <span class="highlight">accurate</span>,{" "}
                      <span class="highlight">repeatable</span>,{" "}
                      <span class="highlight">robust</span> and{" "}
                      <span class="highlight">real-time chemical analysis</span>
                      , leaving time for customers to focus on getting their job
                      done.
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
