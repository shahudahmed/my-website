export default function Footer() {
  return (
    <footer id="contact-footer">
      <div className="container">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p><i className="fas fa-envelope"></i> message@bigredbanana.in</p>
            <p><i className="fas fa-phone"></i> (+91) 7024783943</p>
            <p><i className="fas fa-map-marker-alt"></i> Raipur, Chhattisgarh</p>
          </div>
          <div className="footer-section">
            <h4>Our Services</h4>
            <a href="#"><i className="fas fa-share-alt"></i> Social Media Marketing</a>
            <a href="#"><i className="fas fa-search"></i> Search Engine Optimization</a>
            <a href="#"><i className="fas fa-pen-fancy"></i> Content Creation & Strategy</a>
            <a href="#"><i className="fas fa-bullhorn"></i> Digital Advertising (PPC)</a>
            <a href="#"><i className="fas fa-palette"></i> Brand Identity & Design</a>
            <a href="#"><i className="fas fa-chart-line"></i> Analytics & Reporting</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about"><i className="fas fa-info-circle"></i> About Us</a>
            <a href="#work"><i className="fas fa-briefcase"></i> Portfolio</a>
            <a href="#team"><i className="fas fa-users"></i> Our Team</a>
            <a href="#pricing"><i className="fas fa-tags"></i> Pricing</a>
            <a href="/blog"><i className="fas fa-blog"></i> Blog & Insights</a>
            <a href="#"><i className="fas fa-handshake"></i> Careers</a>
            <a href="#"><i className="fas fa-file-contract"></i> Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <p>Follow our journey and get daily marketing tips!</p>
            <div className="social-links flex gap-3 mt-2">
              <a href="#" title="Instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" title="Facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" title="LinkedIn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" title="Twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" title="YouTube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" title="TikTok" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center py-4">
          <p>&copy; 2024 Big Red Banana Digital Marketing Agency. All rights reserved. Let's go bananas!
            <span className="red-banana-emoji">🍌</span>
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            Crafted with ❤️ and lots of ☕ by our amazing team
          </p>
        </div>
      </div>
    </footer>
  );
}
