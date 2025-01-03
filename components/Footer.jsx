import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-4 text-center">
      <p>© {new Date().getFullYear()} heart & hustle films. all rights reserved.</p>
      <Link href="/privacy-policy">privacy</Link>
    </footer>
  );
};

export default Footer;
