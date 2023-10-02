import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div>Logo</div>
        <div>
          {footerLinks.map((item) => (
            <Link href={item.link}>{item.text}</Link>
          ))}
        </div>
      </div>
      <div>Copyright@2023</div>
    </footer>
  );
};

export default Footer;
