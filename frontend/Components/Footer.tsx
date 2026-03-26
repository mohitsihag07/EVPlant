import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer-grid">

                    <div>
                        <h3>EV Plant</h3>
                        <p>Leading EV scooter assembly plant focused on innovation and sustainability.</p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/About">About</Link></li>
                            <li><Link href="/Products">Products</Link></li>
                        </ul>
                    </div>
                    {/* <br /> */}

                    <div className="mt-[100px]">
                        <h4>Contact</h4>
                        <p>📞 +91 9876543210</p>
                        <p>📧 info@evplant.com</p>
                        <p>🧰 spares@evplant.com</p>
                        <p>🏭 partners@evplant.com</p>
                        <p>📍 India</p>
                    </div>

                </div>

            </div>
        </footer>
    );
}