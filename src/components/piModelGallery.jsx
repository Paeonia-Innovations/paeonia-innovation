import React, { useEffect, useState, useRef } from "react";

export const PIModelGallery = (props) => {
  const [childInView, setChildInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          setChildInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="piModelGallery" className="gallery-container">
      <div className="container">
        <div className="row" ref={ref}>
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.title}-${i}`}
                className={`fade-in-up ${childInView ? "animated" : ""}`}
              >
                <img
                  src="img/portfolio/DSC00402.png"
                  className="img-responsive"
                  alt=""
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
