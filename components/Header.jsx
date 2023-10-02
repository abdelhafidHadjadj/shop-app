import React from "react";
import { navBarLinks } from "@/constants";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <header>
      <nav className="NavBar">
        <span>Logo</span>
        <ul>
          {navBarLinks.map((item) => (
            <Link key={item.text} href={item.link}>
              {item.text}
            </Link>
          ))}
        </ul>
        <CustomButton title={"Sign Up"} containerStyle={"primary-btn"} />
      </nav>
    </header>
  );
};

export default Header;
