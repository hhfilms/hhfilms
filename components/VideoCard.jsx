const VideoCard = ({video}) => {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-md overflow-hidden">
      <video poster={`https://hhf-assets.s3.us-east-2.amazonaws.com/${video.url}.png`} controls width="250" className="w-full">
        {/* <source src={`${video.url}`} type="video/webm" /> */}
        <source src={`https://hhf-assets.s3.us-east-2.amazonaws.com/${video.url}.mp4`} type="video/mp4" />
      </video>
      <div className="p-4 text-center text-gray-50">
        <h2 className="text-2xl font-extralight font-assistant text-center text-gray-50 sm:text-3xl">{video.title}</h2>
        <p className="text-gray-50 w-3/4 m-auto font-extralight leading-relaxed text-center mb-4 md:block sm:text-base lg:text-lg">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
