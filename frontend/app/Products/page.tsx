export default function ProductsPage() {
    return (
        <div>

            {/* HERO */}
            <section className="about-hero">
                <div className="container">
                    <h1>Our EV Scooters</h1>
                    <p>Explore our range of high-performance electric scooters.</p>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="products">
                <div className="container product-grid">

                    <div className="card">
                        <img src="/heroev.png" alt="Scooter" />
                        <h3>Model X</h3>
                        <p>Range: 150km</p>
                        <p>Battery: Lithium-ion</p>

                        <a href="/Contact" className="btn btn-outline mt-3">
                            Enquire Now
                        </a>
                    </div>

                    <div className="card">
                        <img src="/heroev.png" alt="Scooter" />
                        <h3>Model y</h3>
                        <p>Range: 150km</p>
                        <p>Battery: Lithium-ion</p>

                        <a href="/Contact" className="btn btn-outline mt-3">
                            Enquire Now
                        </a>
                    </div>

                    <div className="card">
                        <img src="/heroev.png" alt="Scooter" />
                        <h3>Model Z</h3>
                        <p>Range: 150km</p>
                        <p>Battery: Lithium-ion</p>

                        <a href="/Contact" className="btn btn-outline mt-3">
                            Enquire Now
                        </a>
                    </div>

                </div>
            </section>

        </div>
    );
}