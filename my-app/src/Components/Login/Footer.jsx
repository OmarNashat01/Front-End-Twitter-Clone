import React from "react";
import LoginCss from "./Login.module.css"

const today = new Date();
const CurrentYera = today.getFullYear();

function Footer() {
  return (
    <footer className={LoginCss.loginFotter}>
      <a className={LoginCss.footerLinks} href="">
        About
      </a>
      <a className={LoginCss.footerLinks} href="">
        Help Center
      </a>
      <a className={LoginCss.footerLinks} href="">
        Terms of Service
      </a>
      <a className={LoginCss.footerLinks} href="">
        Privacy Policy
      </a>
      <a className={LoginCss.footerLinks} href="">
        Cookie Policy
      </a>
      <a className={LoginCss.footerLinks} href="">
        Accessibility
      </a>
      <a className={LoginCss.footerLinks} href="">
        Ads info
      </a>
      <a className={LoginCss.footerLinks} href="">
        Blog
      </a>
      <a className={LoginCss.footerLinks} href="">
        Status
      </a>
      <a className={LoginCss.footerLinks} href="">
        Careers
      </a>
      <a className={LoginCss.footerLinks} href="">
        Brand Resources
      </a>
      <a className={LoginCss.footerLinks} href="">
        Advertising
      </a>
      <a className={LoginCss.footerLinks} href="">
        Marketing
      </a>
      <a className={LoginCss.footerLinks} href="">
        Twitter for Business
      </a>
      <a className={LoginCss.footerLinks} href="">
        Developers
      </a>
      <a className={LoginCss.footerLinks} href="">
        Directory
      </a>
      <a className={LoginCss.footerLinks} href="">
        Settings
      </a>
      <p>© {CurrentYera} Twitter, Inc.</p>
    </footer>
  );
}

export default Footer;
