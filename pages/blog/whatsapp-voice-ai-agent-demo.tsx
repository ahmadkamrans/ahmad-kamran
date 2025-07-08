import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./blog-detail.css";

export default function WhatsAppVoiceAIAgentDemo() {
  return (
    <>
      <Navbar />
      <main className="content" aria-label="Content">
        <div className="container">
          <div className="post-head">
            <div className="post-info">
              <div className="post-tags">
                <a href="/tags/indexc98b.html?tag=AI" className="post-tag">
                  AI
                </a>
                <a href="/tags/indexa913.html?tag=Voice" className="post-tag">
                  Voice
                </a>
                <a
                  href="/tags/index68c9.html?tag=WhatsApp"
                  className="post-tag"
                >
                  WhatsApp
                </a>
                <a
                  href="/tags/index9a5f.html?tag=Healthcare"
                  className="post-tag"
                >
                  Healthcare
                </a>
              </div>
              <h1 className="post-title">
                WhatsApp & Voice AI Agent Demo: Healthcare Triage & Appointment
                Booking
              </h1>
              <div className="post-description">
                This demo showcases the capabilities of WhatsApp and Voice AI
                agents for healthcare triage and appointment booking. Users can
                upload documents to train the AI agent with custom knowledge,
                interact via voice to describe symptoms, and receive urgent care
                recommendations. The system can book appointments, request
                additional details, and escalate to a human agent when needed.
                All interactions are logged in a web dashboard, supporting both
                automated and human-assisted responses for seamless healthcare
                support.
              </div>
              <div className="post-meta">
                <div className="post-meta__left">
                  <a href="#" className="post-author-image">
                    <img src="/images/ahmad-kamran.jpeg" alt="Ahmad Kamran" />
                  </a>
                  <div className="post-meta__bottom">
                    <a className="post-author-name" href="#">
                      Ahmad Kamran
                    </a>
                    <span className="post-date">
                      <time dateTime="2024-06-07">7 Jun 2024</time> – 3 min read
                    </span>
                  </div>
                </div>
                {/* <div className="post-meta__right">
                  <div className="post-share">
                    <ul className="share__list list-reset">
                      <li className="share__item">
                        <a
                          className="share__link share__twitter"
                          href="#"
                          title="Share on Twitter"
                          rel="nofollow"
                        >
                          <i className="ion ion-logo-twitter"></i>
                        </a>
                      </li>
                      <li className="share__item">
                        <a
                          className="share__link share__facebook"
                          href="#"
                          title="Share on Facebook"
                          rel="nofollow"
                        >
                          <i className="ion ion-logo-facebook"></i>
                        </a>
                      </li>
                      <li className="share__item">
                        <a
                          className="share__link share__pinterest"
                          href="#"
                          title="Share on Pinterest"
                          rel="nofollow"
                        >
                          <i className="ion ion-logo-pinterest"></i>
                        </a>
                      </li>
                      <li className="share__item">
                        <a
                          className="share__link share__linkedin"
                          href="#"
                          title="Share on LinkedIn"
                          rel="nofollow"
                        >
                          <i className="ion ion-logo-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="post-image">
              <img
                src="/images/whatsapp-agent.jpeg"
                alt="WhatsApp & Voice AI Agent Demo"
              />
            </div>
            <div className="post-image-caption">Demo Screenshot</div>
          </div>
        </div>
        {/* begin post */}
        <div className="container animate">
          <article className="post">
            <h2>Overview</h2>
            <p>
              This demo presents a real-time AI solution integrating WhatsApp
              and Voice agents for healthcare triage and appointment booking.
              The system allows users to upload documents to train the AI agent
              with custom knowledge, interact via voice or WhatsApp, and receive
              intelligent responses for symptom triage and appointment
              scheduling. The workflow also supports escalation to a human agent
              and logs all interactions in a web dashboard.
            </p>
            <h3>Demo Video</h3>
            <div className="yt-vedios">
              <iframe
                width="500"
                height="300"
                style={{ overflow: "hidden", borderRadius: "12px" }}
                src="https://www.youtube.com/embed/IK8swdj1g6s"
                title="Real-Time AI WhatsApp & Voice Agent (Agentic) Demo | Built with RAG, OpenAI, Twilio, LangChain"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <h3>Key Features</h3>
            <ul>
              <li>Document upload for custom AI training (RAG)</li>
              <li>
                Voice AI agent for healthcare triage and appointment booking
              </li>
              <li>WhatsApp AI agent for chat-based support</li>
              <li>Urgency detection and emergency recommendations</li>
              <li>Appointment scheduling with user details</li>
              <li>Escalation to human agent and chat log dashboard</li>
            </ul>
            <h3>Sample Workflow</h3>
            <ol>
              <li>
                User uploads a healthcare triage document to train the agent.
              </li>
              <li>
                Voice agent interacts with user, detects symptoms, and provides
                recommendations.
              </li>
              <li>
                Agent books appointments and requests additional details as
                needed.
              </li>
              <li>
                WhatsApp agent responds to chat messages and can escalate to a
                human agent.
              </li>
              <li>
                All interactions are logged and visible in the web dashboard.
              </li>
            </ol>
            <p>
              This solution demonstrates seamless integration of AI and human
              support for healthcare scenarios, ensuring both automation and
              personal assistance when required.
            </p>
          </article>
        </div>
        {/* end post */}
      </main>
      <Footer />
    </>
  );
}
