import React, { useEffect, useState, useRef } from "react";

export const ReactionMonitoringP1 = (props) => {
  const [inView, setInView] = useState(false);
  //const [showImage, setShowImage] = useState(false);
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
    <div id="reactionMonitoringP1" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rmPage1">
              <div className="col-12 col-md-6">
                <h3>REACTION MONITORING</h3>
                <div className="spacer"></div>

                <p>
                  {" "}
                  Real-time reaction monitoring empowers you to observe your
                  chemical processes as they unfold-offering immediate feedback
                  on concentration changes, reaction rates, and conversion
                  levels. With live data at your fingertips, you can make
                  smarter, faster decisions at evey stage of development and
                  production.
                </p>
                <div className="spacer"></div>
              </div>
              <div
                className={`col-12 col-md-6 fade-in-up ${
                  inView ? "scale-up" : ""
                }`}
              >
                <div className="img-container">
                  <img
                    src="img/portfolio/ReactionMonitoring.png"
                    className="img-responsive"
                    alt="Reaction Monitoring"
                    // style={{ cursor: "zoom-in" }}
                    // onClick={() => setShowImage(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fullscreen image overlay with close button */}
      {/* {showImage && (
        <div
          style={{
            position: "fixed",
            top: 150,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowImage(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "#fff",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
            >
              ✖ Close
            </button>
            <img
              src="img/portfolio/ReactionMonitoring.png"
              alt="Full View"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                borderRadius: "8px",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
        </div>
      )} */}
    </div>
  );
};
