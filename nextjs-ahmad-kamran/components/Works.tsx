import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const works = [
  {
    images: [
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/1/1751481421756?e=1752710400&v=beta&t=LVNbyMwSaO6ADxTAy0GKbw2YctDNX62ToK6XZ1OYBew",
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/7/1751481421756?e=1752710400&v=beta&t=o58cI2ULy7M7wKb8b3GTT26GBewnvfTbHRAYtUVcd-g",
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
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/2/1751481421756?e=1752710400&v=beta&t=5_t7WEXFIm9xZrRVNrbrD3xhm0gg8dPj3R7AyPKE7lE",
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/3/1751481421756?e=1752710400&v=beta&t=kVg6vzMfS13Smhw4lfYrN_PzN14KKTyqu4GZLHrlG9E",
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
    images: [
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/3/1751481421756?e=1752710400&v=beta&t=kVg6vzMfS13Smhw4lfYrN_PzN14KKTyqu4GZLHrlG9E",
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/5/1751481421756?e=1752710400&v=beta&t=FpAKNgNiFwE359JoenkDOl8kpBay7DWWWpKGFhJuHyE",
      "/images/work-2-2.jpg",
    ],
    link: "/work/geametric-band.html",
    alt: "Geametric band",
    category: "Music flyer",
    title: "Geametric band",
    description:
      "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  },
  {
    images: [
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/4/1751481421756?e=1752710400&v=beta&t=RZDThwtciR64iJaSV86i2uudl37q9KPYb_u4UW1GmAo",
      "https://media.licdn.com/dms/image/v2/D4D1FAQFOuKiMRdnxQA/feedshare-document-images_800/B4DZfMbSF1GUAg-/6/1751481421756?e=1752710400&v=beta&t=5c-C1PIPySuZe2_a2l4kaegdjZ9K99hSZBDa4UWEBuw",
    ],
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
        .work-slider-container .slick-dots {
          display: block !important;
          position: absolute;
          bottom: 12px;
          left: 0;
          width: 100%;
          text-align: center;
          z-index: 10;
        }
        .work-slider-container .slick-dots li {
          margin: 0 6px;
        }
        .work-slider-container .slick-dots li button:before {
          color: #222 !important;
          opacity: 1 !important;
          font-size: 18px !important;
        }
        .work-slider-container .slick-prev {
          left: 10px !important;
          z-index: 11;
        }
        .work-slider-container .slick-next {
          right: 10px !important;
          z-index: 11;
        }
        .work-slider-container .slick-prev:before,
        .work-slider-container .slick-next:before {
          color: #fff !important;
          opacity: 1 !important;
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
