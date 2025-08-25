import React, { useEffect, useState, useRef } from "react";

export const RTDP5 = (props) => {
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
    <div id="rtdP5" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""} rtdPage5`}
                >
                  <h3>{d.title}</h3>
                  <div className="spacer"></div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-12">
                      {d.subtitles
                        ? d.subtitles.map((sub, j) => (
                            <div
                              key={`${sub.subtitle}-${j}`}
                              className={`subtitle-container ${
                                inView ? getAnimationClass(j) : ""
                              }`}
                            >
                              <h3>{sub.subtitle}</h3>

                              <p>{sub.subText}</p>
                              <div className="spacer"></div>
                            </div>
                          ))
                        : "No subtitles available"}
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
