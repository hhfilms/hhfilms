import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-midnight text-white py-4 text-center">
      <p>© {new Date().getFullYear()} Heart & Hustle Films. All rights reserved.</p>
      <Link href="/privacy-policy">Privacy</Link>
    </footer>
  );
};

export default Footer;
