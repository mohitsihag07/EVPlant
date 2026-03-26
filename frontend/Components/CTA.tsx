import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta cta--closing">
      <div className="container cta-grid">
        <div className="cta-main">
          <h2>Built for Mobility. Supported for You.</h2>
          <p>Buy EV scooters, order spare parts, or enquire about assembly & bulk orders.</p>
          <div className="cta-actions">
            <Link href="/Contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/Products" className="btn btn-outline">
              Buy Scooters
            </Link>
          </div>
        </div>

        <aside className="cta-side" aria-label="Quick contact">
          <h4 className="cta-side-text">Quick Path</h4>
          <div className="cta-side-list">
            <div className="cta-side-item">
              <div className="cta-side-icon">🛵</div>
              <div className="cta-side-text">
                <strong>Scooter Sales</strong>
                <span>Models & pricing assistance</span>
              </div>
            </div>
            <div className="cta-side-item">
              <div className="cta-side-icon">🧰</div>
              <div className="cta-side-text">
                <strong>Spare Parts</strong>
                <span>Order compatible components</span>
              </div>
            </div>
            <div className="cta-side-item">
              <div className="cta-side-icon">🏭</div>
              <div className="cta-side-text">
                <strong>Assembly Enquiry</strong>
                <span>Bulk/partner manufacturing</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}