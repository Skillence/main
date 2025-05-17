import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Footer = () => {
   const [email, setEmail] = useState("");
  const navigate=useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      from_email: email,
      message: `${email} Request to subscribe to newsletter`,
    };

    emailjs.send('service_5w0y969', 'template_meaiok7', templateParams, 'kvOwKjPDsFKEUJomg')
      .then(() => {
        toast.success("Subscription request sent successfully!");
        setEmail(""); // Clear input
      })
      .catch(() => {
       toast.error("Failed to send subscription request. Please try again later.");
      });
  };

  return (
    <div className="home-footer">
      <footer className="footer-footer1 thq-section-padding">
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
             <div className="footer-newsletter">
      <img alt="Company Logo" src={Logo} width={150} className="footer-image1" />
      <span className="thq-body-small">
        Subscribe to our newsletter for the latest updates on new{" "}
        <b>Internships </b> and <b>Hackathons.</b>
      </span>
      <div className="footer-actions">
        <form className="footer-form" onSubmit={handleSubmit}>
          <div className="footer-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-text-input thq-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="thq-button-outline footer-button">
            <span className="thq-body-small hover:text-red-600 hover:cursor-pointer">
              Subscribe
            </span>
          </button>
        </form>
        <span className="footer-content2 thq-body-small">
          Stay updated with our latest news and events by subscribing to our newsletter.
        </span>
      </div>
    </div>
            <div className="footer-links">
              <div className="footer-column1">
                <strong className="thq-body-large footer-column1-title">
                  Company
                </strong>
                <div className="footer-footer-links">
                  <a
                    onClick={() => navigate("/")}
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    Home
                  </a>
                  <a
                    onClick={() => navigate("/about-us")} 
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    About Us
                  </a>
                  
                  <a
                    onClick={() => navigate("/Internship")} 
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    Internships
                  </a>
                  <a
                    onClick={() => navigate("/hackathon")} 
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    Hackathons
                  </a>
                </div>
              </div>
              <div className="footer-column2">
                <strong className="thq-body-large footer-column2-title">
                  Quick Links
                </strong>
                <div className="footer-footer-links1">
                  <a
                    onClick={() => navigate("/contact-us")} 
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    Contact Us
                  </a>
                  <a
                    onClick={() => navigate("/FAQs")} 
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    FAQs
                  </a>
                  
                  <a
                    onClick={() => navigate("/about-us")} 
                    rel="noreferrer noopener"
                    className="thq-body-small hover:text-red-600 hover:cursor-pointer"
                  >
                    Careers
                  </a>
                 
                </div>
              </div>
              <div className="footer-column3">
                <strong className="thq-body-large footer-social-link1-title">
                  Connect with Us
                </strong>
                <div className="footer-social-links">
                  
                  <div className="footer-link1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <span className="thq-body-small hover:text-red-600 hover:cursor-pointer">Instagram</span>
                  </div>
                 
                  <div className="footer-link3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <span className="thq-body-small hover:text-red-600 hover:cursor-pointer">LinkedIn</span>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <span className="thq-body-small">
                &copy; 2025 Skillence. All rights reserved.
              </span>
              <div className="footer-footer-links2">
                <span 
                onClick={() => navigate("/privacy-policy")}
                className="thq-body-small hover:text-red-600 hover:cursor-pointer hover:cursor-pointer hover:text-red-600">Privacy Policy</span>
                <span
                onClick={() => navigate("/terms-of-service")}
                className="thq-body-small hover:text-red-600 hover:cursor-pointer hover:cursor-pointer hover:text-red-600">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
