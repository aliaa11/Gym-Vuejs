<template>
    <footer class="site-footer">
      <div class="footer-container container">
        <div class="footer-section">
          <h4>Contact Us</h4>
          <div class="contact-item">
            <span class="contact-label">Phone</span>
            <p>(023) 18 9999 - (123) 18 9999</p>
          </div>
          <div class="contact-item">
            <span class="contact-label">Address</span>
            <p>72 Kargnam, 45 Opal Point Suite 3B</p>
          </div>
          <div class="contact-item">
            <span class="contact-label">Email</span>
            <p>contactcompany@dutm.com</p>
          </div>
        </div>
  
        <div class="footer-section">
          <h4>SUBSCRIBE TO OUR MAILING LIST</h4>
          <p class="newsletter-desc">Sign up to receive the latest information</p>
          <div class="subscribe-form">
            <input 
              type="email" 
              placeholder="Enter Your Mail"
              class="email-input"
            >
            <button class="subscribe-btn">Subscribe</button>
          </div>
        </div>
  
        <div class="footer-section">
          <h4>Quick Links</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">Terms&amp;Use</a>
            <a href="#" class="footer-link">Photos/Policy</a>
          </div>
        </div>
      </div>
  
      <div class="copyright-section">
        <p>Copyright &copy;2025 All rights reserved | This template is made with by Calcillo</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter'
  }
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #2a2a2a;
    color: #ffffff;
    padding: 40px 0 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
  }
  
  .footer-section {
    margin-bottom: 20px;

  }
  
  h4 {
    color: #f15d44;
    font-size: 18px;
    margin-bottom: 20px;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 10px;
  }
  
  h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: #f15d44;
  }
  
  .contact-item {
    margin-bottom: 15px;
  }
  
  .contact-label {
    display: block;
    color: #f15d44;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  .contact-item p {
    margin: 0;
    font-size: 15px;
    color: #cccccc;
  }
  
  .newsletter-desc {
    color: #cccccc;
    font-size: 15px;
    margin-bottom: 15px;
  }
  
  .subscribe-form {
    display: flex;
    margin-top: 15px;
    background-image: url(/public/img/footer-signup.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px;
  }
  
  .email-input {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
  }
  
  .subscribe-btn {
    background-color: #f15d44;
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .subscribe-btn:hover {
    background-color: #d04a32;
  }
  
  .footer-links {
    display: flex;
    flex-direction: column;
  }
  
  .footer-link {
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 15px;
    transition: color 0.3s;
  }
  
  .footer-link:hover {
    color: #f15d44;
  }
  
  .copyright-section {
    text-align: center;
    padding-top: 20px;
    margin-top: 30px;
    border-top: 1px solid #444444;
  }
  
  .copyright-section p {
    color: #aaaaaa;
    font-size: 14px;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
  </style>