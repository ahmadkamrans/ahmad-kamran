import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero() {
  return (
    <section className="hero">
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
          <div className="col col-5 col-d-12">
            <div className="hero__right">
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={false}
              >
                <div>
                  <img src="/images/01-1.jpg" alt="Ahmad Kamran" />
                </div>
                <div>
                  <img src="/images/01-1.jpg" alt="Ahmad Kamran" />
                </div>
                <div>
                  <img src="/images/01-1.jpg" alt="Ahmad Kamran" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
