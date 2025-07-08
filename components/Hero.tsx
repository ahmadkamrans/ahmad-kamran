import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const videos = [
  {
    src: "https://www.youtube.com/embed/zMX4jDXJ8uI",
    title:
      "Custom Software Solutions with Client Reviews | Ahmad Kamran - Full Stack Engineer",
  },
  {
    src: "https://www.youtube.com/embed/63plgWelKEo",
    title:
      "Manual replies. Missed leads. Wasted hours | AI Agents That Work with Your Stack",
  },
  {
    src: "https://www.youtube.com/embed/GG72LK1nKOQ",
    title:
      "AI Lead Generation Agent That Finds, Enriches & Emails Leads Automatically | Apollo + GPT + n8n",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
    nextArrow: (
      <MdArrowForward
        size={32}
        style={{
          color: "#000",
          right: 10,
          zIndex: 4,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    ),
    prevArrow: (
      <MdArrowBack
        size={32}
        style={{
          color: "#000",
          left: 10,
          zIndex: 4,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    ),
  };

  return (
    <section className="hero">
      <style>{`
        .slick-dots {
          position: absolute !important;
          bottom: -25px !important;
          left: 0;
          width: 100%;
          z-index: 2;
        }
        .slick-dots li button:before {
          font-size: 15px !important;
          color: #222 !important;
          opacity: 0.75;
        }
        .slick-dots li.slick-active button:before {
          color: #0070f3 !important;
          opacity: 1;
        }
        .slick-arrow {
          z-index: 3;
        }
        .slick-slider {
          position: relative;
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col col-6 col-d-12">
            <div className="hero__left">
              <h1 className="hero__title">Hey everyone, I'm Ahmad Kamran</h1>
              <p className="hero__description">
                Hi, I'm Ahmad – Full Stack Developer. Helping Founders Build AI
                MVPs, SaaS Platforms & Agents — Fast, Lean, and Scalable | 10+
                Yr Full-Stack Expert
              </p>
            </div>
          </div>
          <div className="col col-6 col-d-12" style={{ borderRadius: "10px" }}>
            <div style={{ position: "relative", paddingBottom: 40 }}>
              <Slider {...settings}>
                {videos.map((video, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%",
                        background: "#000",
                        overflow: "hidden",
                        borderRadius: "20px",
                      }}
                    >
                      <iframe
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: 0,
                          borderRadius: "10px",
                          background: "#000",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
