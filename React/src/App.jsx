import React, { useState } from 'react';

const METHOD_STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start with a complimentary consultation to understand your goals, your team's workflows, and where AI can create meaningful impact. No jargon, no pressure — just a clear conversation about what's possible."
  },
  {
    number: "02",
    title: "Opportunity Mapping",
    description: "During the first week of the engagement, we analyze your tools, content, and processes to identify where AI can remove friction, save time, or unlock new capabilities. You'll receive a concise, founder-led assessment of your highest-value opportunities."
  },
  {
    number: "03",
    title: "Pilot Design & Build (4–6 Weeks)",
    description: "We design and build a tailored pilot solution — usually an internal AI assistant, an automated workflow, or a retrieval-augmented tool with a simple, intuitive interface. This is a collaborative process with weekly check-ins to ensure the solution fits naturally into your operations."
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Your team gets hands-on experience with the pilot. We collect feedback, refine lightly, and help you understand what to keep, change, or scale next."
  }
];

const STATISTICS = [
  { number: "95%", label: "Faster Information Retrieval" },
  { number: "60%", label: "Reduction in Manual Work" },
  { number: "100%", label: "Client Satisfaction" }
];

const CASE_STUDIES = [
  {
    title: "Customer Insights Automation for a Global Brand Agency",
    description:
      "Partnered with a creative strategy team to streamline how they analyze customer feedback and campaign data. Built an AI-driven assistant that organizes survey responses, highlights patterns, and surfaces actionable insights for brand pitches and client presentations.",
    impact: "Cut insight generation time from days to under an hour, improving pitch turnaround and internal clarity."
  },
  {
    title: "Operational AI Assistant for a Service & Support Team",
    description:
      "Implemented an internal knowledge assistant that helps staff instantly find procedures, client information, and internal documentation across manuals, emails, and shared drives. Designed for nontechnical teams with a clean, simple interface.",
    impact: "Reduced repetitive questions and manual searching by 60%, freeing staff to focus on higher-value client work."
  },
  {
    title: "Smart Search for Public Records and Internal Files",
    description:
      "Built a unified AI search tool that helps team members quickly locate documents across multiple departments and file sources. Ideal for property managers, real estate teams, and operations leaders who work with scattered information.",
    impact: "Reduced search time from 3 hours to 2 minutes, improving team efficiency and customer response speed."
  }
];


export default function ScarlettLabs() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async () => {
    const response = await fetch("https://formspree.io/f/xblnywed", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
  
    if (response.ok) {
      alert("Your message was sent!");
      setShowModal(false);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
        }
        
        .divider-line {
          width: 100%;
          height: 1px;
          background-color: #dcdcdc;
          margin-top: 7rem;
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }
        
        .logo-img {
          position: relative;
          z-index: 10;
          margin-top: -1.2rem;
        }
        
        .nav-link {
          font-size: 1.3rem;
          color: #000;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .nav-link:hover { color: #4a1a1a; }
        
        .cta-button, .contact-button {
          background: #4a1a1a;
          color: white;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
          font-family: 'Cormorant Garamond', serif;
        }
        
        .cta-button:hover, .contact-button:hover {
          background: #6a2a2a;
        }
        
        .cta-button {
          padding: 0.8rem 3rem;
          font-size: 1.3rem;
          white-space: nowrap;
        }
        
        .contact-button {
          padding: 1.2rem 4rem;
          font-size: 1.4rem;
          margin-top: 2rem;
        }
        
        .method-card {
          background: white;
          padding: 2.5rem;
          margin-bottom: 2rem;
          border-left: 4px solid #4a1a1a;
          transition: transform 0.3s;
        }
        
        .method-card:hover { transform: translateX(10px); }
        
        .form-trigger {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #D4AF37;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 9999;
          font-weight: 600;
          font-family: 'Cormorant Garamond', serif;
        }
        
        .form-trigger:hover { background: #C4A137; }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          z-index: 99998;
        }
        
        .modal-content {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.15);
          z-index: 99999;
          padding: 2rem;
          max-height: 80vh;
          overflow-y: auto;
        }
        
        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #333;
        }
        
        input, textarea {
          width: 100%;
          padding: 0.75rem;
          margin: 0.5rem 0;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          font-family: 'Cormorant Garamond', serif;
        }
        
        textarea { resize: vertical; }
        
        .submit-button {
          background: #4a1a1a;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 0.5rem;
          font-family: 'Cormorant Garamond', serif;
        }
      `}</style>

      {/* Header */}
      <div className="divider-line"></div>
      <div style={{ padding: '2rem 4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="ScarlettLabsLogo.png" 
              alt="Scarlett Labs Logo" 
              width="130"
              className="logo-img"
            />
            
            <h1 style={{ fontSize: '2rem', fontWeight: 300, margin: 0, position: 'relative', zIndex: 10 }}>
              Scarlett Labs
            </h1>
            <p style={{ fontSize: '1rem', fontWeight: 300, margin: 0 }}>
              Boutique AI Consulting
            </p>
          </div>
          <nav style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem', flex: 2 }}>
            <a href="#method" className="nav-link">Method</a>
            <a href="#results" className="nav-link">Results</a>
            <a href="#about" className="nav-link">About</a>
            <button className="cta-button" onClick={() => setShowModal(true)}>Let's Talk</button>
          </nav>
        </div>

        {/* Hero */}
        <div style={{ padding: '0 2rem', marginTop: 0 }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 300, 
            color: '#000', 
            marginTop: '5rem', 
            marginBottom: '1.5rem', 
            lineHeight: 1.2, 
            textAlign: 'center' 
          }}>
            Where Strategy Meets Intelligence.
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: '#333', 
            marginBottom: '10rem', 
            fontWeight: 300, 
            textAlign: 'center' 
          }}>
            Boutique AI Consulting that turns complexity into clarity.
          </p>
        </div>
      </div>

      {/* Method Section */}
      <div id="method" style={{ padding: '2.5rem 3rem', background: '#f8f8f8' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#4a1a1a', marginBottom: '3rem', fontWeight: 400 }}>
          Our Method
        </h2>
        {METHOD_STEPS.map((method, idx) => (
          <div key={idx} className="method-card">
            <div style={{ fontSize: '3rem', color: '#4a1a1a', fontWeight: 300, marginBottom: '1rem' }}>
              {method.number}
            </div>
            <div style={{ fontSize: '1.8rem', color: '#000', marginBottom: '1rem', fontWeight: 500 }}>
              {method.title}
            </div>
            <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
              {method.description}
            </div>
          </div>
        ))}
      </div>

      {/* Results Section */}
      <div id="results" style={{ padding: '5rem 6rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#4a1a1a', marginBottom: '3rem', fontWeight: 400 }}>
          Results That Matter
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {STATISTICS.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3.5rem', color: '#4a1a1a', fontWeight: 300, marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '1.2rem', color: '#555', fontWeight: 300 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {CASE_STUDIES.map((study, idx) => (
          <div key={idx} style={{ background: '#f8f8f8', padding: '2.5rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.6rem', color: '#4a1a1a', marginBottom: '1rem', fontWeight: 500 }}>
              {study.title}
            </div>
            <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
              {study.description}
            </div>
            <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
              <strong>{study.impact}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div id="about" style={{ padding: '4rem 6rem', background: '#4a1a1a', color: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 400 }}>
          About Us
        </h2>
        
        <div style={{ maxWidth: '80%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3.5fr', gap: '2rem', alignItems: 'start' }}>
            <div>
              <img 
                src="headshot.png" 
                alt="Poornima Godavarthy"
                style={{ 
                  width: '250px', 
                  height: '250px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                }}
              />
              <p style={{
                color: "white",
                fontSize: "1.3rem",
                marginTop: "0.75rem",
                fontWeight: 300,
                letterSpacing: "0.5px"
              }}>
                Poornima Godavarthy<br />
                <span style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                  Founder & Lead AI Consultant
                </span>
              </p>

            </div>
            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 300 }}>
                Scarlett Labs is a female-founded boutique AI consulting firm dedicated to helping organizations explore and implement AI solutions tailored to their needs. 
                <br /><br />
                Founded by Lead AI Consultant Poornima Godavarthy, a Computer Science graduate with experience in machine learning, data science, and product leadership, Scarlett Labs was created to help organizations of all sizes explore AI through simple, focused pilots.
                <br /><br />
                Ready? Let's build something remarkable together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ padding: '5rem 6rem', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#000', marginBottom: '2rem', fontWeight: 400 }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Let's discuss how AI can transform your business.
        </p>
        <button className="contact-button" onClick={() => setShowModal(true)}>
          Schedule a Consultation
        </button>
      </div>

      {/* Footer */}
      <div style={{ 
        padding: '2rem 6rem', 
        background: 'white', 
        textAlign: 'center', 
        color: '#555', 
        fontSize: '0.95rem', 
        borderTop: '1px solid #ddd' 
      }}>
        <p style={{ margin: '0.5rem 0' }}>© 2025 Scarlett Labs • Boutique AI Consulting</p>
        <p style={{ margin: '0.5rem 0' }}>hey@scarlettlabs.co</p>
      </div>

  

      {/* Modal */}
      {showModal && (
        <>
          <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            <h3 style={{ marginTop: 0, color: '#333' }}>Let's Connect</h3>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea
                placeholder="Tell us about your project"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <button onClick={handleSubmit} className="submit-button">Send Message</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}