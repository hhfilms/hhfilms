import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialMedia = [
  {icon: <InstagramIcon fontSize="inherit" />, link: "https://www.instagram.com/_hh_films/", color: "inherit"},
  {icon: <YoutubeIcon fontSize="inherit" />, link: "https://www.youtube.com/@HeartHustleFilms", color: "inherit"},
  {icon: <FacebookIcon fontSize="inherit" />, link: "https://www.facebook.com/heartandhustlefilms", color: "inherit"},
];

const Socials = ({containerClass}) => {
  return (
    <div className={`${containerClass}`}>
      {socialMedia.map(({icon, link}, index) => (
        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
