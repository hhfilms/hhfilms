import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialMedia = [
  {icon: <InstagramIcon fontSize="medium" />, link: "https://www.instagram.com/_hh_films/", color: "text-gray-50 hover:text-gray-800"},
  {icon: <YoutubeIcon fontSize="medium" />, link: "https://www.youtube.com/@HeartHustleFilms", color: "text-gray-50 hover:text-gray-800"},
  {icon: <FacebookIcon fontSize="medium" />, link: "https://www.facebook.com/heartandhustlefilms", color: "text-gray-50 hover:text-gray-800"},
];

const Socials = () => {
  return (
    <div className="flex bg-gray-50/25 p-2 shadow-lg z-50 sticky flex-row justify-around md:fixed md:bottom-8 md:right-8 md:flex-col md:space-y-3  md:rounded-lg">
      {socialMedia.map(({icon, link, color}, index) => (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className={color}>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
