import Link from "next/link";

export default function Plant() {
  return (
    <section className="plant">
      <div className="container plant-content">

        <div className="image-box">
  <img
    src="https://uploads.vw-mms.de/system/production/images/vwn/036/280/images/f0df571db41e31129a22f25b93410b592deaec9c/DB2021AL00433_retina_2400.jpg?1649157514"
    alt="Plant"
  />
</div>

        <div>
          <h2>Advanced Manufacturing Plant</h2>
          <p>
            Our state-of-the-art assembly plant ensures high-quality production
            with modern machinery and expert workforce.
          </p>
          <Link href="/Plant" className="btn btn-primary">Explore Plant</Link>
        </div>

      </div>
    </section>
  );
}