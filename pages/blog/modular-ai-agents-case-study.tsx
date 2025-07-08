import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./blog-detail.css";

export default function ModularAIAgentsCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="content" aria-label="Content">
        <div className="container">
          <div className="post-head">
            <div className="post-info">
              <div className="post-tags">
                <span className="post-tag">AI</span>
                <span className="post-tag">case-study</span>
                <span className="post-tag">Automation</span>
                <span className="post-tag">Agents</span>
              </div>
              <h1 className="post-title">
                Case Study: Modular AI Agents That Save Time, Scale Outreach,
                and Automate Support
              </h1>
              <div className="post-description">
                Client: Internal R&D for Real-World SaaS Teams
                <br />
                Built By: Ahmad Kamran — AI & SaaS Engineer (10+ years
                experience)
                <br />
                Project Type: Customizable AI Agent Suite
                <br />
                Demo Video Playlist:{" "}
                <a
                  href="https://www.youtube.com/@ahmadkamran518/videos"
                  target="_blank"
                  className="text-blue-500"
                  rel="noopener noreferrer"
                >
                  YouTube Playlist
                </a>
              </div>
            </div>
            {/* <img
              src="/images/ai-agents.jpg"
              alt="Modular AI Agents Case Study"
            /> */}
            {/* <div className="post-image-caption">
              Modular AI Agents Suite Demo
            </div> */}
          </div>
        </div>
        {/* begin post */}
        <div className="container animate">
          <article className="post">
            <h2>The Challenge: AI That Actually Works for Real Teams</h2>
            <p>
              While tools like ChatGPT, Apollo, and Dialogflow are great at
              demos, real companies struggle to:
            </p>
            <ul>
              <li>Integrate AI into their tech stack</li>
              <li>Customize logic for support, outreach, or booking flows</li>
              <li>Maintain human handoff, context, and task completion</li>
              <li>Avoid vendor lock-in and boxed solutions</li>
            </ul>
            <p>
              Ahmad Kamran set out to build modular, production-ready AI agents
              that can plug into any system — handling real-world workflows for
              sales, support, and service industries.
            </p>
            <h2>
              The Solution: 3 Real AI Agents Built for Scale & Customization
            </h2>
            <p>
              Ahmad developed and shipped a full AI Agent Suite — fully
              adaptable and ready for deployment in actual business
              environments.
            </p>
            <h3>1. WhatsApp AI Agent – Real-Time Customer Support</h3>
            <p>
              <strong>Problem:</strong> Businesses receiving hundreds of
              WhatsApp messages daily struggle to triage, respond, or escalate
              in real time.
            </p>
            <p>
              <strong>Solution:</strong> A real-time AI agent that handles
              incoming WhatsApp messages, responds using a structured knowledge
              base, and escalates to a human when needed.
            </p>
            <ul>
              <li>Built-in human escalation logic</li>
              <li>
                Can integrate with Calendly, Google Calendar, or custom systems
              </li>
              <li>Trained for multilingual support and domain-specific FAQs</li>
            </ul>
            <p>
              <strong>Use Cases:</strong>
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>✅ Healthcare triage and appointment booking</li>
              <li>✅ Real estate or rental inquiries</li>
              <li>✅ eCommerce support (returns, deliveries, FAQs)</li>
            </ul>
            <h3>2. Voice AI Agent – Smart Phone Call Handling</h3>
            <p>
              <strong>Problem:</strong> Service businesses lose time answering
              repetitive phone calls or miss bookings outside business hours.
            </p>
            <p>
              <strong>Solution:</strong> A voice agent that answers calls,
              transcribes in real-time, understands the intent, and replies with
              a human-like voice. Built using Deepgram + custom logic.
            </p>
            <ul>
              <li>
                Automatically handles bookings, reschedules, and general
                inquiries
              </li>
              <li>Escalates sensitive calls via call forwarding</li>
              <li>Works with your existing CRM or scheduling system</li>
            </ul>
            <p>
              <strong>Use Cases:</strong>
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>✅ Home services (cleaning, repair, appointments)</li>
              <li>✅ Restaurant and hospitality lines</li>
              <li>✅ SaaS product support via phone</li>
            </ul>
            <h3>3. Sales Outreach AI Agent – Automated Cold Email Engine</h3>
            <p>
              <strong>Problem:</strong> Founders and sales teams waste hours
              manually finding leads, writing emails, and remembering
              follow-ups.
            </p>
            <p>
              <strong>Solution:</strong> A fully automated agent that pulls
              leads (via Apollo, LinkedIn scraping, or your CRM), generates
              personalized GPT-powered cold emails, and sends them with
              automated follow-ups.
            </p>
            <ul>
              <li>
                Smart GPT-based personalization using job title, company, and
                intent
              </li>
              <li>
                Sends emails via Gmail or MailerSend, logs data to Google Sheets
                or CRM
              </li>
              <li>Works with any lead source — not tied to Apollo</li>
            </ul>
            <p>
              <strong>Use Cases:</strong>
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>✅ SaaS founders scaling outbound</li>
              <li>✅ Agencies booking discovery calls</li>
              <li>✅ Coaches or consultants doing high-touch outreach</li>
            </ul>
            <h2>The Results: Battle-Tested AI You Can Actually Use</h2>
            <ul className="results-list" style={{ listStyle: "none" }}>
              <li>
                ✅ Customizability – Each agent can plug into any existing
                system (CRM, Sheets, custom APIs)
              </li>
              <li>
                ✅ Escalation & Human Handoff – Built-in fallback routes for
                sensitive or failed queries
              </li>
              <li>
                ✅ Production-Ready Logic – These are not just demos, but real
                frameworks used in active operations
              </li>
              <li>
                ✅ Time Savings – 10+ hours saved weekly per agent, per team
              </li>
              <li>
                ✅ Improved User Experience – Instant responses, natural
                conversations, and human-like voice flow
              </li>
            </ul>
            <h3>Architecture & Tech Stack</h3>
            <ul>
              <li>
                <strong>AI Engine:</strong> OpenAI GPT-4, Groq, LangChain
              </li>
              <li>
                <strong>Voice & STT:</strong> Deepgram
              </li>
              <li>
                <strong>TTS:</strong> ElevenLabs
              </li>
              <li>
                <strong>Automation:</strong> n8n Workflows
              </li>
              <li>
                <strong>Messaging:</strong> Twilio (WhatsApp), Twilio Voice
              </li>
              <li>
                <strong>CRM & Sheets Integration:</strong> Custom Webhooks +
                Google API
              </li>
              <li>
                <strong>Deployment:</strong> Vercel, DigitalOcean
              </li>
            </ul>
            <h3>Founder Note</h3>
            <blockquote>
              “These agents aren’t just cool demos. I built them to solve real
              problems for real teams — and they’ve been tested across
              industries like healthcare, real estate, SaaS, and home services.
              If you have manual work eating up your team’s time — I can help
              you replace it with AI.”
              <br />— Ahmad Kamran
            </blockquote>
            <h3>See Them in Action</h3>
            <p>
              <span role="img" aria-label="TV">
                📺
              </span>{" "}
              Full demo playlist:{" "}
              <a
                href="https://www.youtube.com/@ahmadkamran518/videos"
                target="_blank"
                className="text-blue-500"
                rel="noopener noreferrer"
              >
                https://www.youtube.com/@ahmadkamran518/videos
              </a>
              <br />
              <span role="img" aria-label="Envelope">
                📩
              </span>{" "}
              Message Ahmad to see how these agents can power your product or
              operations.
            </p>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <iframe
                width="800"
                height="400"
                style={{ overflow: "hidden", borderRadius: "12px" }}
                src="https://www.youtube.com/embed/d9ve3TxLFVI"
                title="Modular AI Agents Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </article>
        </div>
        {/* end post */}
      </main>
      <Footer />
    </>
  );
}
