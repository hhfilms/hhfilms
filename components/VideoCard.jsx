const VideoCard = ({ video }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{video.title}</h2>
          <p className="text-red-500 mb-4">{video.description}</p>
          <a href={`/videos/${video.id}`} className="text-blue-500 hover:underline">Watch Now</a>
        </div>
      </div>
    );
  };
  
  export default VideoCard;