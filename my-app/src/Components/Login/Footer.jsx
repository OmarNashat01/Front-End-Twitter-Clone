import React from "react";

const today = new Date();
const CurrentYera = today.getFullYear();

function Footer() {
  return (
    <footer className="loginFotter">
      <a className="footer-links" href="">
        About
      </a>
      <a className="footer-links" href="">
        Help Center
      </a>
      <a className="footer-links" href="">
        Terms of Service
      </a>
      <a className="footer-links" href="">
        Privacy Policy
      </a>
      <a className="footer-links" href="">
        Cookie Policy
      </a>
      <a className="footer-links" href="">
        Accessibility
      </a>
      <a className="footer-links" href="">
        Ads info
      </a>
      <a className="footer-links" href="">
        Blog
      </a>
      <a className="footer-links" href="">
        Status
      </a>
      <a className="footer-links" href="">
        Careers
      </a>
      <a className="footer-links" href="">
        Brand Resources
      </a>
      <a className="footer-links" href="">
        Advertising
      </a>
      <a className="footer-links" href="">
        Marketing
      </a>
      <a className="footer-links" href="">
        Twitter for Business
      </a>
      <a className="footer-links" href="">
        Developers
      </a>
      <a className="footer-links" href="">
        Directory
      </a>
      <a className="footer-links" href="">
        Settings
      </a>
      <p>© {CurrentYera} Twitter, Inc.</p>
    </footer>
  );
}

export default Footer;
