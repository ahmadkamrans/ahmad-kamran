import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./blog-detail.css";

export default function VestraAppCaseStudy() {
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
                <span className="post-tag">Property</span>
                <span className="post-tag">SaaS</span>
              </div>
              <h1 className="post-title">
                Case Study: Vestra.app – Automating Property Management with
                AI-Powered Simplicity
              </h1>
              <div className="post-description">
                Client: Nathan – Real Estate & Tech Entrepreneur
                <br />
                Industry: Property Management SaaS
                <br />
                Founder: Nathan
                <br />
                Development Partner: Ahmad Kamran, AI & SaaS Engineer (10+ years
                experience)
                <br />
                Website:{" "}
                <a
                  href="https://vestra.app"
                  target="_blank"
                  className="text-blue-500"
                  rel="noopener noreferrer"
                >
                  https://vestra.app
                </a>
              </div>
            </div>
            {/* <img
              src="/images/vestra.png"
              alt="Vestra.app – Automating Property Management with AI-Powered Simplicity"
            /> */}
            {/* <div className="post-image-caption">
              Vestra.app Dashboard Screenshot
            </div> */}
          </div>
        </div>
        {/* begin post */}
        <div className="container animate">
          <article className="post">
            <h2>The Challenge: Manual Chaos in Property Management</h2>
            <p>
              Nathan, a real estate entrepreneur with a strong tech background,
              noticed a growing inefficiency across property management
              workflows. Property managers (PMs) juggled dozens of manual tasks
              daily:
            </p>
            <ul>
              <li>Rent collection through offline or fragmented systems</li>
              <li>Tenant communications via email, phone, or even paper</li>
              <li>Maintenance requests tracked manually or over calls</li>
              <li>Disorganized lease applications and document storage</li>
              <li>Zero automation or insight into financial performance</li>
            </ul>
            <p>
              The property management tools on the market were either too rigid,
              too generic, or lacked the customization and control needed for
              scale.
            </p>
            <p>
              Nathan approached Ahmad Kamran to design and develop an all-in-one
              solution that would eliminate these inefficiencies, with a strong
              focus on automation, security, and a seamless user experience.
            </p>
            <h2>The Solution: Vestra – The Modern OS for Property Managers</h2>
            <p>
              After a deep discovery session, Ahmad proposed and architected a
              custom SaaS platform with the following pillars:
            </p>
            <h3>1. Multi-Role, Multi-Tenant Web App</h3>
            <ul>
              <li>
                Landlords, property managers, staff, and tenants—all with
                distinct roles and permissions
              </li>
              <li>
                Scalable architecture built for adding multiple properties,
                teams, and tenants under each PM account
              </li>
              <li>Super Admin dashboard for platform-wide oversight</li>
            </ul>
            <h3>2. Streamlined Onboarding & Operations</h3>
            <ul>
              <li>
                <strong>Property Managers</strong> can:
                <ul>
                  <li>Add properties through a smart step-form</li>
                  <li>Invite tenants via email or link</li>
                  <li>Add staff to manage support tickets and maintenance</li>
                </ul>
              </li>
              <li>
                <strong>Tenants</strong> can:
                <ul>
                  <li>Easily set up accounts</li>
                  <li>
                    View leases, pay rent, request repairs—all from one place
                  </li>
                </ul>
              </li>
            </ul>
            <h3>3. Flexible Rent Collection with Stripe Connect</h3>
            <ul>
              <li>PMs define custom rent due dates and invoice ranges</li>
              <li>
                <strong>Tenants</strong> can:
                <ul>
                  <li>Split rent with roommates</li>
                  <li>Pay in parts (e.g. 50% now, 50% later)</li>
                </ul>
              </li>
              <li>
                All payments are processed via Stripe Connect with full security
                and compliance
              </li>
              <li>
                PMs withdraw directly to their bank or card—no need to leave the
                platform
              </li>
            </ul>
            <h3>4. Live Chat for Support & Maintenance</h3>
            <ul>
              <li>Real-time messaging between tenants and support staff</li>
              <li>Staff can track, respond, and resolve issues faster</li>
              <li>Centralizes all communications for easy reference</li>
            </ul>
            <h3>5. Secure Document Storage</h3>
            <ul>
              <li>
                Lease agreements, ID verifications, and property-related
                documents
              </li>
              <li>
                All stored securely in the cloud, organized per property and
                tenant
              </li>
            </ul>
            <h3>6. AI-Powered Financial Insights</h3>
            <ul>
              <li>
                Leveraging OpenAI, Vestra generates natural-language summaries
                of:
              </li>
              <ul>
                <li>Monthly earnings</li>
                <li>Maintenance costs</li>
                <li>Refunds and other adjustments</li>
              </ul>
              <li>
                PMs get clean, human-readable reports that require no training
                or spreadsheets
              </li>
            </ul>
            <h2>Results: A Smarter, Simpler Way to Manage Properties</h2>
            <ul className="results-list" style={{ listStyle: "none" }}>
              <li>
                ✅ Automation of 80% of daily tasks, reducing manual work and
                errors
              </li>
              <li>
                ✅ Seamless rent collection through flexible and secure payment
                flows
              </li>
              <li>
                ✅ Faster maintenance resolution with integrated support chat
              </li>
              <li>
                ✅ Higher tenant satisfaction, with self-serve tools and payment
                flexibility
              </li>
              <li>
                ✅ Improved visibility for PMs through AI-powered summaries and
                reporting
              </li>
              <li>
                ✅ Scalable architecture, ready to onboard thousands of
                properties and users
              </li>
            </ul>
            <h3>Founder Testimonial</h3>
            <blockquote>
              Working with Ahmad has been an incredible experience. He has
              demonstrated deep technical expertise, clear communication, and a
              commitment to delivering a high-quality product to our team. He
              really took the time to understand our needs and translated them
              into a solution that exceeded our expectations. Since implementing
              our Vestro property management solution, we've seen significant
              improvements in operational efficiency and client satisfaction. I
              highly recommend Ahmad to anyone looking for a skilled and
              reliable software developer. Thank you, Ahmad, for your
              outstanding work—we look forward to many more projects together.
            </blockquote>
            <h3>Tech Stack Highlights</h3>
            <ul>
              <li>
                <strong>Backend:</strong> Node.js, Express.js
              </li>
              <li>
                <strong>Frontend:</strong> Next.js, Tailwind
              </li>
              <li>
                <strong>Payments:</strong> Stripe Connect
              </li>
              <li>
                <strong>AI Reporting:</strong> OpenAI GPT
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL
              </li>
              <li>
                <strong>Chat System:</strong> Real-time WebSocket integration
              </li>
              <li>
                <strong>Hosting:</strong> DigitalOcean + Vercel
              </li>
            </ul>
            <h3>Interested in Building Something Like Vestra?</h3>
            <p>
              If you're looking to build a scalable SaaS platform that automates
              operations and delivers a great user experience, let’s talk.
              <br />
              Visit:{" "}
              <a
                href="https://vestra.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vestra.app
              </a>
            </p>
          </article>
        </div>
        {/* end post */}
      </main>
      <Footer />
    </>
  );
}
