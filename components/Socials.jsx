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
    <div className="fixed bottom-8 right-8 flex flex-col space-y-3 bg-white/25 p-2 rounded-lg shadow-lg z-50">
      {socialMedia.map(({icon, link, color}, index) => (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className={color}>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
