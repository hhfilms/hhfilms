import Link from "next/link";

const Footer = () => {
  return (
    <footer className="capitalize bg-dark text-white py-4 text-center flex flex-col md:flex-row justify-between px-12">
      <p>© {new Date().getFullYear()} heart & hustle films. all rights reserved.</p>
      <Link href="/privacy-policy">privacy</Link>
    </footer>
  );
};

export default Footer;
