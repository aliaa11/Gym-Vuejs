<template>
  <div>
    <!-- Breadcrumb -->
    <section class="breadcrumb-section">
      <div class="container">
        <div class="breadcrumb-text">
          <h2>CONTACT</h2>
          <div class="breadcrumb-option">
            
            <span>Contact</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24112.92132811736!2d-74.20651812810036!3d40.93514309648714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fda38587e887%3A0xf03207815e338a0d!2sHaledon%2C%20NJ%2007508%2C%20USA!5e0!3m2!1sen!2sbd!4v1578120776078!5m2!1sen!2sbd"
        height="400"
        style="border: 0; width: 100%;"
        allowfullscreen=""
      ></iframe>
      <div class="map-marker">
        <i class="fa fa-map-marker text-red"></i>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="contact-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="contact-info">
              <h4>CONTACTS US</h4>
              <div class="contact-address">
                <div class="ca-widget address">
                  <div class="cw-icon">
                    <i class="fa fa-map-marker"></i>
                  </div>
                  <div class="cw-text">
                    <h5>Address</h5>
                    <p>50-45 Road 11378 New York</p>
                  </div>
                </div>
                <div class="ca-widget phone">
                  <div class="cw-icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="cw-text">
                    <h5>Phone</h5>
                    <p>+65 11.188.888</p>
                  </div>
                </div>
                <div class="ca-widget email">
                  <div class="cw-icon">
                    <i class="fa fa-envelope"></i>
                  </div>
                  <div class="cw-text">
                    <h5>Email</h5>
                    <p>hellocolorlib@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="contact-form">
              <h4>LEAVE A COMMENT</h4>
              <form action="#" method="post">
                <div class="row">
                  <div class="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="col-lg-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div class="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Your messages"
                    ></textarea>
                    <button type="submit" class="submit-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
/* General Styles */
html, body {
  height: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col-lg-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 0 15px;
}

.col-lg-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
}

.col-lg-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  padding: 0 15px;
}

.col-lg-12 {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px;
}

.text-red {
  color: #f44336;
}

/* Breadcrumb */
.breadcrumb-section {
  background-color: #333;
  
  background-size: cover;
  background-position: center;
  padding: 60px 0 30px;
  color: white;
  text-align: center;
}

.breadcrumb-text h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
}

.breadcrumb-option a, .breadcrumb-option span {
  color: #bbb;
  font-size: 14px;
}

/* Map */
.map {
  position: relative;
  height: 400px;
}

.map-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
}

/* Contact Section */
.contact-section {
  padding: 60px 0;
  background-color: #f5f5f5;
}

.contact-info h4, .contact-form h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
}

.ca-widget {
  display: flex;
  margin-bottom: 25px;
}

.cw-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #f44336;
}

.cw-text h5 {
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
}

.cw-text p {
  font-size: 16px;
  color: #333;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  font-size: 14px;
}

.contact-form textarea {
  height: 150px;
  resize: none;
}

.submit-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .col-lg-4, .col-lg-6, .col-lg-8, .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>