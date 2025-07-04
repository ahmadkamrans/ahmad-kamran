export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="container">
            <div className="footer__author">
              <div className="footer__author-info">
                <h3 className="footer__author-name">Ahmad Kamran</h3>
                <div className="social">
                  <ul className="social__list list-reset">
                    <li className="social__item">
                      <a
                        className="social__link"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Social link"
                      >
                        <i className="ion ion-logo-twitter"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        className="social__link"
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Social link"
                      >
                        <i className="ion ion-logo-facebook"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        className="social__link"
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Social link"
                      >
                        <i className="ion ion-logo-instagram"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        className="social__link"
                        href="https://pinterest.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Social link"
                      >
                        <i className="ion ion-logo-pinterest"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        className="social__link"
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Social link"
                      >
                        <i className="ion ion-logo-github"></i>
                      </a>
                    </li>
                    <li className="social__item">
                      <a
                        className="social__link"
                        href="https://vimeo.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Social link"
                      >
                        <i className="ion ion-logo-vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="footer__author-bio">
                  Hi, I'm Ahmad – Full Stack Developer. I'm a creative and
                  curious person who has a lot of experience and fond moments
                  working with design, websites, and marketing.
                </p>
              </div>
            </div>
          </div>
          <div className="footer__bg " data-bg="/images/bg.jpg"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <div className="copyright">
                2025 &copy; <a href="/index.html">Ahmad</a>. Published with{" "}
                <a href="https://jekyllrb.com/">Jekyll</a>. Crafted & Designed
                by{" "}
                <a href="https://jekyllthemes.io/developers/artem-sheludko">
                  Artem Sheludko
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="top" title="Top">
        <i className="ion ion-ios-arrow-up"></i>
      </div>
    </>
  );
}
