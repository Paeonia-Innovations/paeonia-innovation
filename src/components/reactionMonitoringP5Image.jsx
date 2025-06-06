import React from "react";

export const ReactionMonitoringP5Image = () => {
  return (
    <div id="reactionMonitoringP5Image" className="text-center">
      <div className="container">
        <div className="col-md-12">
          <div className="rmPage5">
            {/* <h3>Reaction Monitoring</h3> */}
            <div className="spacer"></div>
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                {/* <img
                  src="img/portfolio/conc-plot.png"
                  className="img-responsive"
                  alt=""
                /> */}
                <div className="img-container">
                  <img
                    src="img/portfolio/conc-plot.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* <img
                  src="img/portfolio/predicted-conc.png"
                  className="img-responsive"
                  alt=""
                /> */}
                <div className="img-container">
                  <img
                    src="img/portfolio/predicted-conc.png"
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
