import Script from "next/script";

const YouTubePlayer = ({id}) => {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64"></iframe>
      <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" />
    </div>
  );
};

export default YouTubePlayer;
