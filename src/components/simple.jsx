import React, { useEffect, useState, useRef } from "react";

export const Simple = (props) => {
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
    <div id="simple" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="simple-item">
              <div className="text-row">
                <h3>Simple</h3>
                <div className="spacer"></div>
                <p>
                  Just plug in the module via USB to a computer with the
                  software installed and you are good to go even in the field.
                </p>
              </div>
              <div
                className={`image-row fade-in-up ${inView ? "scale-up" : ""}`}
              >
                <img
                  src="img/portfolio/SpectrometerPage.png"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
