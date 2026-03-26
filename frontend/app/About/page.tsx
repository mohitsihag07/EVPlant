export default function AboutPage() {
  return (
    <div className="about-page">

      {/* HERO / BANNER */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Company</h1>
          <p>
            Driving innovation in electric mobility with advanced EV scooter assembly solutions.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-section">
        <div className="container about-content">

                    <div className="image-box">
            <img src="https://uploads.vw-mms.de/system/production/images/vwn/036/280/images/f0df571db41e31129a22f25b93410b592deaec9c/DB2021AL00433_retina_2400.jpg?1649157514" alt="Factory" width="100%" />
          </div>

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a leading EV scooter assembly plant focused on delivering
              high-quality, sustainable, and cost-effective electric mobility solutions.
              Our mission is to revolutionize transportation with eco-friendly technology.
            </p>
            <p>
              With modern machinery and a skilled workforce, we ensure every
              scooter meets high standards of performance and reliability.
            </p>
          </div>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-section light-bg">
        <div className="container about-grid">

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To become a leading name in electric vehicle manufacturing and
              promote sustainable transportation across the country.
            </p>
          </div>

          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To deliver innovative, affordable, and high-performance EV scooters
              that reduce carbon footprint and enhance mobility.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">

          <div>
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Scooters / Month</p>
          </div>

          <div>
            <h2>1000+</h2>
            <p>Happy Customers</p>
          </div>

        </div>
      </section>

    </div>
  );
}