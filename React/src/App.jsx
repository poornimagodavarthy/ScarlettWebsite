import React, { useState } from 'react';


const METHOD_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin with a focused conversation to understand how your team currently finds information, where knowledge lives, and where friction slows decisions."
  },
  {
    number: "02",
    title: "Knowledge Mapping",
    description: "We review your internal documents, systems, and terminology to identify where AI can deliver fast, reliable answers with clear source attribution."
  },
  {
    number: "03",
    title: "Pilot Build (4–6 Weeks)",
    description: "We design and deploy a private AI pilot tailored to your workflows — enabling teams to ask questions in natural language and receive precise, document-linked answers."
  },
  {
    number: "04",
    title: "Refine & Extend",
    description: "Your team tests the system in real workflows. We refine lightly and outline what makes sense to scale, adapt, or expand next."
  }
];

const STATISTICS = [
  { number: "95%", label: "Less Time Spent Searching for Information" },
  { number: "60%", label: "Fewer Repetitive Internal Questions" },
  { number: "100%", label: "Source-Verified Answers" }
];
const CASE_STUDIES = [
  {
    title: "Knowledge System for a Global Brand Agency",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMethod, setExpandedMethod] = useState(null);
  const [expandedCase, setExpandedCase] = useState(null);

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

      {/* Header */}
      <div className="divider-line"></div>
      <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 3vw, 1.5rem)' }}>
      <div className="header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <img 
            src="ScarlettLabsLogo.png" 
            alt="Scarlett Labs Logo" 
            width="130"
            className="logo-img"
          />
          
          <h1 style={{ fontSize: '2rem', fontWeight: 300, margin: 0, position: 'relative', zIndex: 10 }} className="brand-name">
            Scarlett Labs
          </h1>
          <p style={{ fontSize: '1rem', fontWeight: 300, margin: 0 }} className="tagline">
            Boutique AI Consulting
          </p>
        </div>
        
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-responsive ${mobileMenuOpen ? 'mobile-open' : ''}`} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem', flex: 2 }}>
          <a href="#method" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Method</a>
          <a href="#results" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Results</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <button className="cta-button" onClick={() => { setShowModal(true); setMobileMenuOpen(false); }}>Let's Talk</button>
        </nav>
        
        {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
      </div>

        {/* Hero */}
        <div style={{ padding: '0 clamp(1rem, 5vw, 2rem)', marginTop: 0 }}>
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          fontWeight: 300, 
          color: '#000', 
          marginTop: '7rem', 
          marginBottom: '1.5rem', 
          lineHeight: 1.2, 
          textAlign: 'center' 
        }}>
          Intelligence for accessing your organization's knowledge. 
        </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: '#333', 
            marginBottom: '15rem', 
            fontWeight: 300, 
            textAlign: 'center' 
          }}>
            We help operations teams bring clarity to internal knowledge by making existing documents easier to find, reference, and trust.
          </p>

          <p style={{
          maxWidth: '700px',
          margin: '0 auto 6rem',
          fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
          padding: '0 1rem',
          lineHeight: 1.7,
          color: '#444',
          textAlign: 'center'
        }}>
        </p>

        </div>
      </div>

      {/* Method Section */}
      <div id="method" style={{ padding: 'clamp(2rem, 4vw, 2.5rem) clamp(1rem, 5vw, 3rem)', background: '#f8f8f8' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#4a1a1a', marginBottom: '3rem', fontWeight: 400 }}>
          Our Method
        </h2>
        {METHOD_STEPS.map((method, idx) => (
        <div 
          key={idx} 
          className={`method-card ${window.innerWidth <= 768 && expandedMethod !== idx ? 'method-card-collapsed' : ''}`}
          onClick={() => window.innerWidth <= 768 && setExpandedMethod(expandedMethod === idx ? null : idx)}
        >
          <div className="method-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
              <div style={{ fontSize: window.innerWidth <= 768 ? '2rem' : '3rem', color: '#4a1a1a', fontWeight: 300 }}>
                {method.number}
              </div>
              <div style={{ fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.8rem', color: '#000', fontWeight: 500 }}>
                {method.title}
              </div>
            </div>
            {window.innerWidth <= 768 && (
              <div className={`method-toggle ${expandedMethod === idx ? 'open' : ''}`}>+</div>
            )}
          </div>
          <div className="method-description" style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginTop: window.innerWidth <= 768 && expandedMethod === idx ? '1rem' : '0' }}>
            {method.description}
          </div>
        </div>
      ))}
      </div>

      {/* Results Section */}
      <div id="results" style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 8vw, 6rem)', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#4a1a1a', marginBottom: '3rem', fontWeight: 400 }}>
          Results That Matter
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
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
        <div 
          key={idx} 
          className={`case-study-card ${window.innerWidth <= 768 && expandedCase !== idx ? 'case-study-collapsed' : ''}`}
          onClick={() => window.innerWidth <= 768 && setExpandedCase(expandedCase === idx ? null : idx)}
          style={{ background: '#f8f8f8', padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, fontSize: '1.6rem', color: '#4a1a1a', marginBottom: window.innerWidth <= 768 ? '0' : '1rem', fontWeight: 500 }}>
              {study.title}
            </div>
            {window.innerWidth <= 768 && (
              <div className={`case-toggle ${expandedCase === idx ? 'open' : ''}`}>+</div>
            )}
          </div>
          <div className="case-description" style={{ marginTop: window.innerWidth <= 768 && expandedCase === idx ? '1rem' : '0' }}>
            <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
              {study.description}
            </div>
            <div style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>
              <strong>{study.impact}</strong>
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* About Section */}
      <div id="about" style={{ padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 8vw, 6rem)', background: '#4a1a1a', color: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 400 }}>
          About Us
        </h2>
        
        <div style={{ maxWidth: '100%' }}>
        <div className="about-grid-custom" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }}>
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
      <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 8vw, 6rem)', background: 'white', textAlign: 'center' }}>
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
        padding: '2rem clamp(1rem, 8vw, 6rem)',
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
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea
                placeholder="What would you like to explore or improve?"
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