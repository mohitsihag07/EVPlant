import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-text">
          <h1>
            Powering the Future with <span style={{ color: "#16A34A" }}>Electric Mobility</span>
          </h1>
          <p>
            High-quality EV scooter assembly plant delivering performance and sustainability.
          </p>

          <div className="hero-buttons">
            <Link href="/Products" className="btn btn-primary">Explore Products</Link>
            <Link href="/Contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        <div className="hero-image">
          <img src="/heroev.png" alt="EV Scooter" width="400" />
        </div>

      </div>
    </section>
  );
}