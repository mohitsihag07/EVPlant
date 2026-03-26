export default function PlantPage() {
    return (
        <div>

            {/* HERO */}
            <section className="about-hero">
                <div className="container">
                    <h1>Our Manufacturing Plant</h1>
                    <p>Advanced infrastructure and modern assembly process.</p>
                </div>
            </section>

            {/* PLANT DETAILS */}
            <section className="plant">
                <div className="container plant-content">

                    <div className="image-box">
                        <img src="https://cdn-s3.autocarindia.com/legacy/cdni/ExtraImages/20230329024447_Honda%20Factory.jpg?w=728&q=75" alt="Plant" width="100%" />
                    </div>

                    <div>
                        <h2>State-of-the-Art Facility</h2>
                        <p>
                            Our plant is equipped with advanced machinery and skilled
                            professionals to ensure high-quality EV scooter production.
                        </p>
                        <p>
                            We follow strict quality control and efficient assembly processes.
                        </p>
                    </div>

                </div>
            </section>

            {/* PROCESS */}
            <section className="about-section">
                <div className="container about-grid">

                    <div className="card">
                        <h3>Assembly</h3>
                        <p>Precision assembly with modern tools.</p>
                    </div>

                    <div className="card">
                        <h3>Testing</h3>
                        <p>Each scooter undergoes rigorous testing.</p>
                    </div>

                    <div className="card">
                        <h3>Quality Check</h3>
                        <p>Ensuring top-notch performance and safety.</p>
                    </div>

                </div>
            </section>

        </div>
    );
}