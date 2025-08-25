import React, { useEffect, useState, useRef } from "react";
const items = [
  "Streamline continuous reactor design and scale-up",
  "Maximize yield and conversion",
  "Minimize unwanted side reactions",
  "Enhance product quality",
];
export const RTDP2 = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const [visibleItems, setVisibleItems] = useState(0);

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
          animateListItems();
        }
      }
    };

    const animateListItems = () => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setVisibleItems(count);
        if (count >= items.length) {
          clearInterval(interval);
        }
      }, 700); // adjust timing
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="rtdP2" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rtdPage2">
              <div className="col-12 col-md-4">
                <div className="spacer"></div>

                <p>
                  {" "}
                  By measuring RTD, you can:{" "}
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      textAlign: "left",
                    }}
                  >
                    {items.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          opacity: visibleItems > index ? 1 : 0,
                          transition: "opacity 0.6s ease-in-out",
                          //   textDecoration:
                          //     visibleItems - 1 === index ? "underline" : "none",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </p>
                <div className="spacer"></div>
              </div>
              <div
                className={`col-12 col-md-8 fade-in-up ${
                  inView ? "scale-up" : ""
                }`}
              >
                <div className="img-container">
                  <img
                    src="img/portfolio/RTDPage.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
