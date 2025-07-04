export default function Testimonials() {
  return (
    <div className="container">
      <section className="section testimonials animate">
        <div className="row">
          <div className="col col-12">
            <div className="section__info">
              <div className="section__head">
                <h2 className="section__title">Clients</h2>
              </div>
            </div>
            <div className="row">
              <div className="testimonial-item col col-4 col-d-6 col-t-12">
                <div className="testimonial-content">
                  <div className="client-meta">
                    <div className="image-container">
                      <img
                        className="client-avatar"
                        src="/images/client-1.jpg"
                        alt="Hanna Septimus"
                      />
                    </div>
                    <div className="client-info">
                      <h3 className="client-name">
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener"
                        >
                          Hanna Septimus
                        </a>
                      </h3>
                      <p className="client-designation">Product Designer</p>
                    </div>
                  </div>
                  <p className="client-text">
                    Keeping your eye on the ball while performing a deep dive on
                    the start-up mentality to derive convergence on
                    cross-platform integration
                  </p>
                </div>
              </div>
              {/* Repeat for other testimonials as in the HTML */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
