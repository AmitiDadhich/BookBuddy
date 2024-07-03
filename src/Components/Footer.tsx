import React from "react";

// Footer component definition
const Footer = () => {
  return (
    // Footer section
    <footer className="footer">
      <div id="footer" className="container">
        {/* Footer content */}
        <div className="footer-content">
          {/* About section */}
          <div className="footer-section about">
            {/* Heading for About section */}
            <h2 className="footer-heading">About Us</h2>
            {/* Description about the website */}
            <p>In this side you will get all the books for reading....</p>
            {/* Contact information */}
            <div className="contact">
              {/* Phone number */}
              <span>
                <i className="fas fa-phone"></i> 123-456-789
              </span>
              {/* Email address */}
              <span>
                <i className="fas fa-envelope"></i> info@example.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export Footer component
export default Footer;
