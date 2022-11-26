import React from "react";
// import FacebookIcon from "@material-ui/icons/Facebook";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <h2 style={{ color: "#ff96b4" }}>Helpful links</h2>
        <div className="photos">
          <div>
            <h3>Video Maker</h3>
            <p>Stock footage</p>
            <p>Plans</p>
            <p>FAQ</p>
            <p>Editing Tools</p>
            <p>Templates</p>
            <p>Image resizer</p>
            <p>Versus</p>
          </div>
          <div>
            <h3>Blog</h3>
            <p>Video Marketing</p>
            <p>Video Tips</p>
            <p>Case Studies</p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Contact</p>
            <p>About Us</p>
            <p>Carrer Help Center</p>
            <p>Terms & Services</p>
            <p>Privaxy Plolicy</p>
            <p>Data processing agreement</p>
          </div>
          <div>
            <h3>Social</h3>
            <p>
              <FacebookIcon className="social-media" />
              Facebook
            </p>
            <p>
              <TwitterIcon className="social-media" />
              Twitter
            </p>
            <p>
              <MusicNoteIcon className="social-media" />
              Tiktok
            </p>
            <p>
              <YouTubeIcon className="social-media" />
              YouTube
            </p>
            <p>
              <LinkedInIcon className="social-media" />
              Linkedin
            </p>
            <p>
              <InstagramIcon className="social-media" />
              Instagram
            </p>
            <p>
              <LocalPrintshopIcon className="social-media" />
              Pinterest
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
