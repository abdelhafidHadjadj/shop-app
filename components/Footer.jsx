import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="logo-box">Logo</div>
        <div className="footer-inner-box">
          {footerLinks.map((item) => (
            <Link href={item.link}>{item.text}</Link>
          ))}
        </div>
      </div>
      <div className="copyright">
        <p>Copyright@2023</p>
      </div>
    </footer>
  );
};

export default Footer;
