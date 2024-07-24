import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <div className="col-md-6 intro-paragraph">
                  <div className="separator"></div>
                  <p>
                    At{" "}
                    <span className="highlight-bold">Paeonia Innovations</span>,{" "}
                    we are <span className="highlight-bold">pioneering</span>{" "}
                    ultra-compact solutions for{" "}
                    <span className="highlight-bold">precise</span> chemical
                    analysis.
                  </p>
                </div>
                <a
                  href="#valueproposition"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
