import React, { useState } from "react";

export default function Testimonials() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      name: "Nathan",
      designation: "Founder at Vestra Software",
      imgSrc: "/images/client-2.jpg",
      alt: "Nathan - Vestro Software",
      text: "Working with Ahmad has been an incredible experience. He has demonstrated deep technical expertise, clear communication, and a commitment to delivering a high-quality product to our team. He really took the time to understand our needs and translated them into a solution that exceeded our expectations. Since implementing our Vestro property management solution, we've seen significant improvements in operational efficiency and client satisfaction. I highly recommend Ahmad to anyone looking for a skilled and reliable software developer. Thank you, Ahmad, for your outstanding work—we look forward to many more projects together.",
    },
    {
      name: "FKA Novara",
      designation: "Startup Founder",
      imgSrc: "/images/client-3.jpg",
      alt: "FKA Novara",
      text: "We came to meet Ahmad in 2020 as a startup looking for a developer who could finalize a mockup based on Ruby on Rails. With Ahmad's help, we brought our application into production, achieving excellent stability and fully meeting customer requirements. I can highly recommend working with Ahmad.",
    },
    {
      name: "Product Owner",
      designation: "Peer-to-Peer Review System",
      imgSrc: "/images/client-4.jpg",
      alt: "Product Owner - Peer-to-Peer Review System",
      text: "The peer-to-peer review platform Ahmad built for us has enabled over a million businesses in Australia to connect, receive reviews, and manage their marketplace presence efficiently. The dynamic questionnaire system and seamless payment integration have been game changers for our business.",
    },
    {
      name: "Operations Manager",
      designation: "Golf Pay",
      imgSrc: "/images/client-5.jpg",
      alt: "Operations Manager - Golf Pay",
      text: "Ahmad developed a comprehensive golf course management solution for us, integrating booking engines, real-time APIs, and POS payment systems. The platform's flexibility and robust reporting have greatly improved our operations and customer satisfaction.",
    },
    {
      name: "Founder",
      designation: "Zzer",
      imgSrc: "/images/client-6.jpg",
      alt: "Founder - Zzer",
      text: "With Ahmad's expertise, we launched an e-learning platform that supports parents, teachers, and students with dynamic courses, community features, and advanced reporting. The system's scalability and ease of use have been praised by our users.",
    },
    {
      name: "Joseph Chiavatti",
      designation: "Technology Founder & REALTOR®",
      imgSrc: "/images/client-7.jpg",
      alt: "Joseph Chiavatti",
      text: "Ahmad has helped us with several projects in our company. He is a fantastic communicator and does great work. He cares about making sure the project is completed the correct way and is quick to communicate on the different channels that we already use. We continue to use Ahmad for several new product ideas and I'd highly recommend him to anyone else.",
    },
    {
      name: "Sven-Volker Nowarra",
      designation: "In-A-Gadda-Da-Vida",
      imgSrc: "/images/client-8.jpg",
      alt: "Sven-Volker Nowarra",
      text: "Working with Ahmad for more than a year, we are highly confident with the work and consider the results delivered, production ready! We have been developing an app in the social media space, with authorization, buy/sell function, chat and forum capabilities, up to voice calls. Over the year the app has received many updates and changes, and works for both mobile and desktop systems. We are happy to continue our work with Ahmad, and are highly confident with his work.",
    },
    {
      name: "William Schoeffler",
      designation: "Co-Founder and Product @ Hitch",
      imgSrc: "/images/client-9.jpg",
      alt: "William Schoeffler",
      text: "Ahmad is one of the hardest working engineers I've met. He came onto one of our most important projects during a critical phase. He worked endlessly and around the clock to make incredibly quick progress. He is very detailed and focused on making his products scalable and takes responsibility before deployment by doing detailed testing. He works well with teams and on his own very well. Ahmad also spent time researching the product idea and gave invaluable suggestions on product improvements.",
    },
    {
      name: "Anthony Barry",
      designation:
        "MBA | Investor | Sales Leader | Team Builder | Tech Enthusiast | Growth Marketer | Revenue Accelerator",
      imgSrc: "/images/client-10.jpg",
      alt: "Anthony Barry",
      text: "Ahmad has been a pleasure to work with since he joined the team. He is a highly skilled and experienced software engineer who is cooperative and responsive, possesses excellent communication and problem-solving skills, is proactive and accountable, and will go the extra yard to meet time-sensitive priorities. An asset to our company and a privilege to work alongside.",
    },
    {
      name: "Ben Selland",
      designation: "Principal at Selland Technologies",
      imgSrc: "/images/client-11.jpg",
      alt: "Ben Selland",
      text: "Ahmad is an excellent engineer with a strong eye for details. I enjoy working with Ahmad day to day and our team members do as well.",
    },
    {
      name: "Dale Merritt",
      designation: "Golfpay CEO | The '1 Golf' Company",
      imgSrc: "/images/client-12.jpg",
      alt: "Dale Merritt",
      text: "Been working with Ahmad for almost two years, and he's been great to work with. One of the most reliable developers I've had the pleasure to work with. He's always getting better too.",
    },
    {
      name: "Ania Dergachev",
      designation: "Product Designer",
      imgSrc: "/images/client-13.jpg",
      alt: "Ania Dergachev",
      text: "I have the privilege of working closely with Ahmad Kamran. I can confidently say that he is a developer who consistently demonstrates reliability and is a great team player. One of the most admirable qualities of Ahmad is his willingness to tackle any challenge head-on. No matter how complex or intricate the problem is, he approaches it with a positive attitude and a determination to find the best possible solution.",
    },
    {
      name: "Upwork Client",
      designation: "5.00 ★ | Jun 29, 2023 - Jul 17, 2023",
      imgSrc: "/images/client-14.jpg",
      alt: "Upwork Client",
      text: "Was great to work with Ahmad. He was clear, upfront and very diligent with his work. Would highly recommend.",
    },
    {
      name: "Upwork Client",
      designation: "5.00 ★ | Mar 20, 2023 - Apr 8, 2023",
      imgSrc: "/images/client-15.jpg",
      alt: "Upwork Client",
      text: "Great! I am truly impressed with the work done by Ahmad on our project. His technical expertise and attention to detail allowed him to complete the project with great success. He was able to quickly understand and resolve complex issues throughout the development process. Also, he provided detailed, well-structured code that was both efficient and reliable. His communication was top-notch and he was always available to answer any questions I had. I would highly recommend Ahmad for any future projects.",
    },
    {
      name: "Client Name",
      designation: "5.00 ★ | Jun 28, 2022 - Sep 21, 2022",
      imgSrc: "/images/client-18.jpg",
      alt: "Client Name",
      text: "Ahmad was fantastic to work with and did excellent work. I plan to reach back out to him for my next project and as a go-to for Ruby on Rails work.",
    },
    {
      name: "John Smith",
      designation: "",
      imgSrc: "/images/client-21.jpg",
      alt: "John Smith",
      text: "Ahmad performed above and beyond in the Ruby on Rails full-stack development role. His Ruby skills and knowledge of the testing frameworks were deep. He was quick to identify weak design patterns and propose better solutions. His knowledge as a senior engineer can be seen through his work.\n\nAlthough Ahmad had limited knowledge of Vue.js when he started with us, he was quick to pick up and learn the language and did exceptionally well in it.\n\nWe are very satisfied with Ahmad's performance and are glad to have had the opportunity to work with Ahmad and highly recommend him for other projects.\n\nWe will be hiring him again for our upcoming Ruby on Rails projects.",
    },
    {
      name: "Emily Johnson",
      designation: "5.00 ★ | May 21, 2021 - Sep 5, 2021",
      imgSrc: "/images/client-22.jpg",
      alt: "Emily Johnson",
      text: "Complicated and lengthy Ruby on Rails project. Thanks to Ahmad to get it off the ground for me. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. Although Ahmad had not worked on Ember and Angular JS before but he is really a quick learner and performed really well in these as well.",
    },
  ];

  const CHARACTER_LIMIT = 200;
  const TESTIMONIALS_TO_SHOW = 6;

  // Helper to toggle expanded state for a testimonial
  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Helper to render text with proper line breaks
  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

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
              {(showAll
                ? testimonials
                : testimonials.slice(0, TESTIMONIALS_TO_SHOW)
              ).map((testimonial, idx) => {
                const isExpanded = expanded[idx];
                const shouldTruncate =
                  testimonial.text.length > CHARACTER_LIMIT;
                const displayText =
                  isExpanded || !shouldTruncate
                    ? testimonial.text
                    : testimonial.text.slice(0, CHARACTER_LIMIT) + "...";

                return (
                  <div
                    className="testimonial-item col col-4 col-d-6 col-t-12"
                    key={idx}
                  >
                    <div className="testimonial-content">
                      <div className="client-meta">
                        <div className="image-container">
                          <img
                            className="client-avatar"
                            src={testimonial.imgSrc}
                            alt={testimonial.alt}
                          />
                        </div>
                        <div className="client-info">
                          <h3 className="client-name">{testimonial.name}</h3>
                          {testimonial.designation && (
                            <p className="client-designation">
                              {testimonial.designation}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="client-text">
                        {renderText(displayText)}
                        {shouldTruncate && (
                          <button
                            onClick={() => toggleExpand(idx)}
                            className="show-more-btn"
                            style={{
                              background: "none",
                              border: "none",
                              color: "#0070f3",
                              cursor: "pointer",
                              padding: 0,
                              zIndex: 9999,
                              position: "relative",
                            }}
                          >
                            {isExpanded ? "Show less" : "Show more"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {testimonials.length > TESTIMONIALS_TO_SHOW && (
              <div className="row">
                <div
                  className="col col-12"
                  style={{ textAlign: "center", marginTop: "2rem" }}
                >
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="button button--primary section-button"
                    onMouseOver={(e) =>
                      ((e.target as HTMLButtonElement).style.backgroundColor =
                        "#0056b3")
                    }
                    onMouseOut={(e) =>
                      ((e.target as HTMLButtonElement).style.backgroundColor =
                        "#0070f3")
                    }
                  >
                    {showAll
                      ? "Show Less"
                      : `Show More (${
                          testimonials.length - TESTIMONIALS_TO_SHOW
                        } more)`}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
