import { Image } from "./image";
import React, { useEffect, useState, useRef } from "react";

export const Gallery = (props) => {
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
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="sectiongallery-title">
          <p className={`fade-in-up ${childInView ? "animated" : ""}`}>
            Building Strong Team Bonds
          </p>
        </div>
        <div className="row" ref={ref}>
          <div className="gallery-items" style={{ backgroundColor: "#000000" }}>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className={`col-sm-6 col-md-4 col-lg-4 fade-in-up ${
                      childInView ? "animated" : ""
                    }`}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
