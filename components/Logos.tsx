export default function Logos() {
  const logos = [
    {
      src: "/images/word_of_mouth_online_pty_ltd__logo.jpeg",
      alt: "Word of Mouth Online Pty Ltd",
      href: "#",
    },
    {
      src: "/images/vestra_software_solutions_logo.jpeg",
      alt: "Vestra Software Solutions",
      href: "#",
    },
    {
      src: "/images/zoficash_logo.jpeg",
      alt: "Zoficash",
      href: "#",
    },
    {
      src: "/images/golfpay.png",
      alt: "Golfpay",
      href: "#",
    },
    {
      src: "/images/rrf.jpeg",
      alt: "RRF",
      href: "#",
    },
    {
      src: "/images/astechware_logo.jpeg",
      alt: "Astechware",
      href: "#",
    },
    {
      src: "/images/thegrantshub_logo.jpeg",
      alt: "thegrantshub_logo",
      href: "https://www.linkedin.com/company/thegrantshub/",
    },
    {
      src: "/images/driftgolf_logo.jpeg",
      alt: "thegrantshub_logo",
      href: "https://www.linkedin.com/company/driftgolf/",
    },
    {
      src: "/images/1630580396218.jpeg",
      alt: "Selland Technologies",
      href: "https://www.linkedin.com/company/selland-technologies/",
    },
    {
      src: "/images/zidzid.jpeg",
      alt: "Selland Technologies",
      href: "https://www.linkedin.com/company/zid-zid/",
    },
    {
      src: "/images/warcoconstruction_logo.jpeg",
      alt: "warcoconstruction_logo",
      href: "https://www.linkedin.com/company/warcoconstruction/",
    },
    {
      src: "/images/instashowing_logo.jpeg",
      alt: "instashowing_logo",
      href: "https://www.linkedin.com/company/instashowing/",
    },
    {
      src: "/images/1725399994195.jpeg",
      alt: "Eritheia Labs",
      href: "https://www.linkedin.com/company/eritheia-labs/",
    },
    {
      src: "/images/forefastsolutions_logo.jpeg",
      alt: "forefastsolutions_logo Labs",
      href: "https://www.linkedin.com/company/forefastsolutions/",
    },
  ];

  // Duplicate the logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="section logos animate">
      <style>{`
        .logos__carousel {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .logos__track {
          display: flex;
          width: max-content;
          animation: scroll-logos 30s linear infinite;
        }
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logos__item {
          flex: 0 0 auto;
          margin: 0 32px;
        }
        .logos__item img {
          max-height: 60px;
          width: auto;
          display: block;
        }
        @media (max-width: 600px) {
          .logos__item {
            margin: 0 16px;
          }
          .logos__item img {
            max-height: 40px;
          }
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="section__info">
              <h2 className="section__small__title">
                I've worked with some great сompanies
              </h2>
            </div>
            <div className="logos__carousel">
              <ul className="logos__track list-reset">
                {allLogos.map((logo, idx) => (
                  <li className="logos__item" key={idx}>
                    <a href={logo.href} className="logos__link" rel="noopener">
                      <img src={logo.src} alt={logo.alt} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
