import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const works = [
  {
    images: [
      "/images/work-1.jpg",
      "/images/work-1-2.jpg",
      "/images/work-1-3.jpg",
    ],
    link: "/work/music-love-fest.html",
    alt: "Music love fest",
    category: "Print Design",
    title: "Music love fest",
    description:
      "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  },
  {
    images: [
      "/images/work-2.jpg",
      "/images/work-2-1.jpg",
      "/images/work-2-2.jpg",
      "/images/work-2-3.jpg",
    ],
    link: "/work/jazz-concert.html",
    alt: "Jazz concert",
    category: "Book Cover",
    title: "Jazz concert",
    description:
      "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  },
  {
    images: ["/images/work-3.jpg"],
    link: "/work/geametric-band.html",
    alt: "Geametric band",
    category: "Music flyer",
    title: "Geametric band",
    description:
      "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  },
  {
    images: ["/images/work-4.jpg"],
    link: "/work/music-festival.html",
    alt: "Music festival",
    category: "Music flyer",
    title: "Music festival",
    description:
      "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
};

export default function Works() {
  return (
    <div className="container">
      <style>{`
        .work__image .slick-slide > div {
          height: 100%;
          position: relative;
        }
      `}</style>
      <section className="section works animate">
        <div className="row">
          <div className="col col-4 col-d-12">
            <div className="section__info">
              <h2 className="section__title">Work</h2>
              <p className="section__description">
                I shows only the best websites and portfolios built completely
                with passion, simplicity & creativity!
              </p>
              <a href="/work/index.html" className="section__link">
                Show all works <i className="ion ion-md-arrow-forward"></i>
              </a>
            </div>
          </div>
          <div className="col col-8 col-d-12">
            <div className="row">
              {works.map((work, idx) => (
                <article className="work col col-6 col-d-12" key={idx}>
                  <div className="work__content">
                    <a
                      // href={work.link}
                      className="work__image work-slider-container"
                    >
                      <Slider {...sliderSettings}>
                        {work.images.map((img, i) => (
                          <div key={i} className="work-slider-slide">
                            <img
                              src={img}
                              alt={work.alt}
                              className="work-slider-img"
                            />
                          </div>
                        ))}
                      </Slider>
                    </a>
                    <div className="work__info">
                      <div className="work__category">{work.category}</div>
                      <h3 className="work__title">
                        <a href={work.link}>{work.title}</a>
                      </h3>
                      <p className="work__description">{work.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
