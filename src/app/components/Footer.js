// components/Footer.js
import '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Walk-in Jobs HYD</h3>
          <p>Your trusted source for daily walk-in job updates in Hyderabad. We connect job seekers with immediate opportunities.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Latest Jobs</a><br/>
          <a href="/today">Today's Walk-ins</a><br/>
          <a href="/upcoming">Upcoming Jobs</a><br/>
          <a href="/contact">Contact Us</a>
        </div>
        
        <div className="footer-section">
          <h3>Job Categories</h3>
          <a href="/category/it">IT Jobs</a><br/>
          <a href="/category/sales">Sales Jobs</a><br/>
          <a href="/category/marketing">Marketing Jobs</a><br/>
          <a href="/category/fresher">Fresher Jobs</a>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@walkinjobshyd.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Hyderabad, Telangana</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Walk-in Jobs Hyderabad. All rights reserved.</p>
      </div>
    </footer>
  );
}