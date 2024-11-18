import React, { useEffect, useState, useRef } from "react";

export const Culture = (props) => {
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

  const getAnimationClass = (index) => {
    switch (index) {
      case 0:
        return "fadeInLeft";
      case 1:
        return "fadeInRight";
      case 2:
        return "fadeInLeft";
      default:
        return "";
    }
  };

  return (
    <div id="culture" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""} culture-item`}
                >
                  <h3>{d.title}</h3>
                  <div className="spacer"></div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      {d.subtitles
                        ? d.subtitles.map((sub, j) => (
                            <div
                              key={`${sub.subtitle}-${j}`}
                              className={`subtitle-container ${
                                inView ? getAnimationClass(j) : ""
                              }`}
                            >
                              <h3>{sub.subtitle}</h3>
                              {/* <div className="arrow-line"></div> */}
                              <p>{sub.subText}</p>
                            </div>
                          ))
                        : "No subtitles available"}
                    </div>
                    <div
                      className={`col-12 col-md-6 fade-in-up ${
                        inView ? "scale-up" : ""
                      }`}
                    >
                      <img
                        src="img/portfolio/PIGroupPhoto.jpeg"
                        className="img-responsive"
                        alt=""
                      />
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
