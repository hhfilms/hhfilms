import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center flex justify-between px-12">
      <p>© {new Date().getFullYear()} heart & hustle films. all rights reserved.</p>
      <Link href="/privacy-policy">privacy</Link>
    </footer>
  );
};

export default Footer;
