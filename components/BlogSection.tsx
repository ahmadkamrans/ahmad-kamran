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
              {/* Vestra.app Case Study */}
              <div className="article animate grid__post">
                <a
                  className="article__image"
                  href="/blog/vestra-app-case-study"
                >
                  <img
                    src="/images/post-2.jpg"
                    alt="Vestra.app – Automating Property Management with AI-Powered Simplicity"
                  />
                </a>
                <div className="article__content">
                  <div className="article-tags__box">
                    <span className="article__tag">AI</span>
                    <span className="article__tag">case-study</span>
                    <span className="article__tag">Property</span>
                    <span className="article__tag">SaaS</span>
                  </div>
                  <h2 className="article__title">
                    <a href="/blog/vestra-app-case-study">
                      Case Study: Vestra.app – Automating Property Management
                      with AI-Powered Simplicity
                    </a>
                  </h2>
                  <p className="article__excerpt">
                    Vestra.app is a modern SaaS platform built for property
                    managers, automating 80% of daily tasks with AI-powered
                    financial insights, flexible rent collection, real-time
                    chat, and secure document storage. Developed by Ahmad Kamran
                    for founder Nathan, Vestra streamlines onboarding,
                    operations, and reporting—delivering a seamless experience
                    for landlords, staff, and tenants.{" "}
                    <a href="/blog/vestra-app-case-study">Learn more</a>.
                  </p>
                </div>
              </div>
              <div className="yt-vedios">
                <iframe
                  width="500"
                  height="300"
                  style={{ overflow: "hidden", borderRadius: "12px" }}
                  src="https://www.youtube.com/embed/zMX4jDXJ8uI"
                  title="Custom Software Solutions with Client Reviews | Ahmad Kamran - Full Stack Engineer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>

              {/* WhatsApp & Voice AI Agent Demo */}
              <div className="article animate grid__post">
                <a
                  className="article__image"
                  href="/blog/whatsapp-voice-ai-agent-demo"
                >
                  <img
                    src="/images/post-1.jpg"
                    alt="WhatsApp & Voice AI Agent Demo"
                  />
                </a>
                <div className="article__content">
                  <div className="article-tags__box">
                    <span className="article__tag">AI</span>
                    <span className="article__tag">Voice</span>
                    <span className="article__tag">WhatsApp</span>
                    <span className="article__tag">Healthcare</span>
                  </div>
                  <h2 className="article__title">
                    <a href="/blog/whatsapp-voice-ai-agent-demo">
                      WhatsApp & Voice AI Agent Demo: Healthcare Triage &
                      Appointment Booking
                    </a>
                  </h2>
                  <p className="article__excerpt">
                    This demo showcases the capabilities of WhatsApp and Voice
                    AI agents for healthcare triage and appointment booking.
                    Users can upload documents to train the AI agent with custom
                    knowledge, interact via voice to describe symptoms, and
                    receive urgent care recommendations. The system can book
                    appointments, request additional details, and escalate to a
                    human agent when needed. All interactions are logged in a
                    web dashboard, supporting both automated and human-assisted
                    responses for seamless healthcare support.
                  </p>
                </div>
              </div>
              <div className="yt-vedios">
                <iframe
                  width="500"
                  height="300"
                  style={{ overflow: "hidden", borderRadius: "12px" }}
                  src="https://www.youtube.com/embed/IK8swdj1g6s"
                  title="Real-Time AI WhatsApp &amp; Voice Agent (Agentic) Demo | Built with RAG, OpenAI, Twilio, LangChain"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>

              {/* Modular AI Agents Case Study */}
              <div className="article animate grid__post">
                <a
                  className="article__image"
                  href="/blog/modular-ai-agents-case-study"
                >
                  <img
                    src="/images/ai-agents.jpg"
                    alt="Modular AI Agents Case Study"
                  />
                </a>
                <div className="article__content">
                  <div className="article-tags__box">
                    <span className="article__tag">AI</span>
                    <span className="article__tag">case-study</span>
                    <span className="article__tag">Automation</span>
                    <span className="article__tag">Agents</span>
                  </div>
                  <h2 className="article__title">
                    <a href="/blog/modular-ai-agents-case-study">
                      Case Study: Modular AI Agents That Save Time, Scale
                      Outreach, and Automate Support
                    </a>
                  </h2>
                  <p className="article__excerpt">
                    Discover how modular, production-ready AI agents are
                    transforming real-world SaaS teams by automating support,
                    scaling outreach, and saving hours every week. Built by
                    Ahmad Kamran, this customizable suite includes WhatsApp,
                    Voice, and Sales Outreach agents—each designed for seamless
                    integration, human handoff, and real business impact.{" "}
                    <a
                      href="/blog/modular-ai-agents-case-study"
                      className="text-blue-500"
                    >
                      Learn more
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="yt-vedios">
                <iframe
                  width="500"
                  height="300"
                  style={{ overflow: "hidden", borderRadius: "12px" }}
                  src="https://www.youtube.com/embed/d9ve3TxLFVI"
                  title="Agentic AI Marketing Agent For Weekly Performance Reports | Built with n8n, Stripe, OpenAI, Intercom"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
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
