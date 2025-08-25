import "../css/productIntroVideo.css";

export const WatchAndLearn = (props) => {
  return (
    <div id="watchAndLearn">
      <div className="container">
        <div className="col-md-12">
          <h2 className="video-header">Watch & Learn</h2>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/9w3JEMdvM4Q?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};
