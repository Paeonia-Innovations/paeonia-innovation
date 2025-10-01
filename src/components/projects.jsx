import React, { useEffect, useState, useRef } from "react";

export const Projects = (props) => {
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
    <div id="projects" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="projects-item">
                  <h3 className={`${inView ? "animated" : ""}`}>{d.title}</h3>
                  <div className="spacer"></div>
                  <p>
                    <ul>
                      <li
                        className={`${inView ? "fadeInLeft" : ""}`}
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        In under six months, our lean but highly skilled team
                        developed a fully functional prototype—from chip design
                        and AI algorithms to integrated hardware and software.
                        The product has been commercially launched with an OEM
                        partner company with highly accurate composition
                        analysis.
                      </li>
                      <div style={{ height: "0.5em" }}></div>
                      <li
                        className={`${inView ? "fadeInRight" : ""}`}
                        style={{ animationDelay: `${i * 0.5 + 0.5}s` }}
                      >
                        In a year, we soft-launched our next product, OrionIR™
                        Novel Mid-IR Spectrometer, which has been successfully
                        deployed in laboratories.
                      </li>
                      <div style={{ height: "0.5em" }}></div>
                      <li
                        className={`${inView ? "fadeInLeft" : ""}`}
                        style={{ animationDelay: `${i * 0.5 + 1}s` }}
                      >
                        Building on our momentum, we created additional
                        functionalities for OrionIR™ Mid-IR Spectrometer,
                        enabling users.
                      </li>
                      <div style={{ height: "0.5em" }}></div>
                      <li
                        className={`${inView ? "fadeInRight" : ""}`}
                        style={{ animationDelay: `${i * 0.5 + 0.5}s` }}
                      >
                        Recently, we partnered with{" "}
                        <span class="highlight">
                          <a
                            href="https://kax.group/kax-group-and-paeonia-innovations-announce-partnership-meetings-for-september-2025/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-link"
                          >
                            KAX Group
                          </a>
                        </span>{" "}
                        to enable industrial standard chemometric capabilities,
                        process controls and monitoring along with the necessary
                        security standards for our industrial customers to
                        deploy our solutions in their plants.
                      </li>
                      <div style={{ height: "0.5em" }}></div>
                      <li
                        className={`${inView ? "fadeInRight" : ""}`}
                        style={{ animationDelay: `${i * 0.5 + 0.5}s` }}
                      >
                        Currently, we have entered into a partnership with{" "}
                        <span class="highlight">
                          <a
                            href="https://k2photonics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-link"
                          >
                            K2 Photonics
                          </a>
                        </span>{" "}
                        , which has leading ultrafast lasers developed at ETH
                        Zurich Keller’s Group to solve complex measurement
                        challenges using their compact and powerful femtosecond
                        lasers with dual-comb.
                      </li>
                    </ul>
                  </p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
