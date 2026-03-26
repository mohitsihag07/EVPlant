export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <h1>Contact EV Plant</h1>
          <p className="lead">Scooter Sales • Spare Parts • Assembly & Bulk Orders</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid contact-modern-grid">
          {/* CONTACT INFO */}
          <div className="contact-info">
            <h2>Direct Channels</h2>

            <div className="contact-cards">
              <div className="mini-card">
                <div className="mini-card__row">
                  <div className="mini-card__icon">🛵</div>
                  <div>
                    <p className="mini-card__title">Scooter Sales</p>
                    <p className="mini-card__value">Call: +91 9876543210</p>
                    <p className="mini-card__value">Email: sales@evplant.com</p>
                    <a className="btn btn-outline" href="tel:+919876543210">
                      Call Sales
                    </a>
                  </div>
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-card__row">
                  <div className="mini-card__icon">🧰</div>
                  <div>
                    <p className="mini-card__title">Spare Parts</p>
                    <p className="mini-card__value">Call: +91 9876543210</p>
                    <p className="mini-card__value">Email: spares@evplant.com</p>
                    <a
                      className="btn btn-outline"
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Parts
                    </a>
                  </div>
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-card__row">
                  <div className="mini-card__icon">🏭</div>
                  <div>
                    <p className="mini-card__title">Assembly Enquiry</p>
                    <p className="mini-card__value">For bulk/partner manufacturing</p>
                    <p className="mini-card__value">Email: partners@evplant.com</p>
                    <a className="btn btn-outline" href="/Plant">
                      Learn About Plant
                    </a>
                  </div>
                </div>
              </div>

              <div className="mini-card">
                <div className="mini-card__row">
                  <div className="mini-card__icon">📍</div>
                  <div>
                    <p className="mini-card__title">Location</p>
                    <p className="mini-card__value">Industrial area • India</p>
                    <p className="mini-card__value">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form">
            <h2>Send Message</h2>

            <form>
              <input
                className="field"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="field"
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                className="field"
                type="text"
                placeholder="Phone Number"
              />

              <select className="field" defaultValue="buy" required>
                <option value="buy">Buy EV Scooters</option>
                <option value="spares">Spare Parts Request</option>
                <option value="assembly">Assembly / Bulk Order</option>
                <option value="service">Service / Workshop Support</option>
              </select>

              <textarea
                className="field"
                placeholder="Your Message"
                rows={5}
              ></textarea>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                <a className="btn btn-outline" href="/Products">
                  View Scooters
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}