const VideoCard = ({video}) => {
  return (
    <div className="bg-midnight rounded-lg shadow-md overflow-hidden">
      <video poster={`/${video.url}.png`} controls width="250" className="w-full">
        {/* <source src={`${video.url}`} type="video/webm" /> */}
        <source src={`/${video.url}.mp4`} type="video/mp4" />
      </video>
      <div className="p-4 text-center text-gray-50">
        <h2 className="text-lg font-bold mb-2">{video.title}</h2>
        <p className="text-red-500 mb-4">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
