export default function BlogSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <section className="section section-small animate">
            <div className="section__info">
              <div className="section__head">
                <h2 className="section__title">Writing</h2>
              </div>
            </div>
            <div className="section__inner">
              <div className="article animate grid__post">
                <a
                  className="article__image"
                  href="/blog/that-which-does-not-kill-us-makes-us-stronger.html"
                >
                  <img
                    src="/images/post-1.jpg"
                    alt="That which does not kill us makes us stronger"
                  />
                </a>
                <div className="article__content">
                  <div className="article-tags__box">
                    <a
                      href="/tags/indexc98b.html?tag=workflow"
                      className="article__tag"
                    >
                      workflow
                    </a>
                    <a
                      href="/tags/indexa913.html?tag=notes"
                      className="article__tag"
                    >
                      notes
                    </a>
                    <a
                      href="/tags/index68c9.html?tag=study"
                      className="article__tag"
                    >
                      study
                    </a>
                  </div>
                  <h2 className="article__title">
                    <a href="/blog/that-which-does-not-kill-us-makes-us-stronger.html">
                      That which does not kill us makes us stronger
                    </a>
                  </h2>
                  <p className="article__excerpt">
                    Hymnals are books with collections of musical hymns that can
                    typically be found in churches. Prayerbooks or missals are
                    books that contain written prayers and are commonly carried
                    by monks, nuns, and other devoted followers or clergy.
                  </p>
                </div>
              </div>
            </div>
            <div className="section__navigation">
              <a
                href="/blog/index.html"
                className="button button--primary section-button"
              >
                All posts <i className="ion ion-md-arrow-forward"></i>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
