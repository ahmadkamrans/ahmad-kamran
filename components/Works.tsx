import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const works = [
  // Blog: Vestra.app Case Study
  {
    images: [
      "/images/repi-work.jpeg",
      "/images/i-built-3.jpeg",
      "/images/sales-agent.jpeg",
    ],
    link: "/blog/vestra-app-case-study",
    alt: "Vestra.app – Automating Property Management with AI-Powered Simplicity",
    category: "Case Study",
    title:
      "Case Study: Vestra.app – Automating Property Management with AI-Powered Simplicity",
    description:
      "Vestra.app is a modern SaaS platform built for property managers, automating 80% of daily tasks with AI-powered financial insights, flexible rent collection, real-time chat, and secure document storage. Developed by Ahmad Kamran for founder Nathan, Vestra streamlines onboarding, operations, and reporting—delivering a seamless experience for landlords, staff, and tenants.",
  },
  // Blog: WhatsApp & Voice AI Agent Demo
  {
    images: ["/images/whatsapp-agent.jpeg"],
    link: "/blog/whatsapp-voice-ai-agent-demo",
    alt: "WhatsApp & Voice AI Agent Demo",
    category: "AI Demo",
    title:
      "WhatsApp & Voice AI Agent Demo: Healthcare Triage & Appointment Booking",
    description:
      "This demo showcases the capabilities of WhatsApp and Voice AI agents for healthcare triage and appointment booking. Users can upload documents to train the AI agent with custom knowledge, interact via voice to describe symptoms, and receive urgent care recommendations. The system can book appointments, request additional details, and escalate to a human agent when needed. All interactions are logged in a web dashboard, supporting both automated and human-assisted responses for seamless healthcare support.",
  },
  // Blog: Modular AI Agents Case Study
  {
    images: ["/images/3agent.jpeg", "/images/built-for-stack.jpeg"],
    link: "/blog/modular-ai-agents-case-study",
    alt: "Modular AI Agents Case Study",
    category: "Case Study",
    title:
      "Case Study: Modular AI Agents That Save Time, Scale Outreach, and Automate Support",
    description:
      "Discover how modular, production-ready AI agents are transforming real-world SaaS teams by automating support, scaling outreach, and saving hours every week. Built by Ahmad Kamran, this customizable suite includes WhatsApp, Voice, and Sales Outreach agents—each designed for seamless integration, human handoff, and real business impact.",
  },
  // {
  //   images: ["/images/3agent.jpeg", "/images/built-for-stack.jpeg"],
  //   link: "/work/music-love-fest.html",
  //   alt: "Music love fest",
  //   category: "Print Design",
  //   title: "Music love fest",
  //   description:
  //     "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  // },
  // {
  //   images: ["/images/repi-work.jpeg", "/images/i-built-3.jpeg"],
  //   link: "/work/jazz-concert.html",
  //   alt: "Jazz concert",
  //   category: "Book Cover",
  //   title: "Jazz concert",
  //   description:
  //     "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  // },
  // {
  //   images: ["/images/i-built-3.jpeg", "/images/voice-agent.jpeg"],
  //   link: "/work/geametric-band.html",
  //   alt: "Geametric band",
  //   category: "Music flyer",
  //   title: "Geametric band",
  //   description:
  //     "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  // },
  // {
  //   images: ["/images/whatsapp-agent.jpeg", "/images/sales-agent.jpeg"],
  //   link: "/work/music-festival.html",
  //   alt: "Music festival",
  //   category: "Music flyer",
  //   title: "Music festival",
  //   description:
  //     "An alternative to paperback is the glossy cover, otherwise known as a dust cover, found on magazines, and comic books.",
  // },
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
