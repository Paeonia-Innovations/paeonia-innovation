import React, { useEffect, useState, useRef } from "react";

export const CuttingEdge = (props) => {
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
    <div id="cuttingEdge" className="text-center">
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
                  <div className="cuttingEdge-item">
                    {/* <div className="cuttingEdge-content"> */}
                    <h3>{d.title}</h3>
                    <div className="spacer"></div>
                    <p>
                      {" "}
                      Our <span class="highlight">semiconductors</span> +{" "}
                      <span class="highlight">AI approach</span> enables us to
                      take advantage of the{" "}
                      <span class="highlight">latest advances</span> in{" "}
                      <span class="highlight">foundries</span> to repeatedly
                      produce{" "}
                      <span class="highlight">high signal-to-noise data</span>{" "}
                      to extract <span class="highlight">accurately</span> the{" "}
                      <span class="highlight">important parameters</span> in{" "}
                      <span class="highlight"> analysis</span>.
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
