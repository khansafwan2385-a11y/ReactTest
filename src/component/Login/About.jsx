
import React from "react";
import "./About.css";

function About() {
  const services = [
    {
      icon: "🩺",
      title: "Expert Doctors",
      desc: "Experienced medical professionals dedicated to your health and well-being.",
    },
    {
      icon: "🏥",
      title: "Modern Facilities",
      desc: "Modern healthcare facilities designed to provide comfortable patient care.",
    },
    {
      icon: "❤️",
      title: "Patient First",
      desc: "Your comfort, safety, and satisfaction remain our top priorities.",
    },
    {
      icon: "⏰",
      title: "Easy Appointments",
      desc: "Convenient appointment booking to help you access healthcare with ease.",
    },
  ];

  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-tag">
            WELCOME TO HEALTH CARE HOSPITAL
          </span>

          <h1>
            Caring For Life,
            <br />
            <span>Every Single Day.</span>
          </h1>

          <p>
            Your health is our priority. We bring compassionate care,
            trusted medical professionals, and modern healthcare
            services together to support you at every step.
          </p>

          <div className="about-hero-buttons">
            <a href="/login" className="about-btn-primary">
              Book An Appointment <span>→</span>
            </a>

            <a href="#our-story" className="about-btn-outline">
              Discover Our Story
            </a>
          </div>

          <div className="about-hero-note">
            <span className="about-note-icon">✓</span>
            Compassionate Care · Trusted Professionals · Your Well-being
          </div>
        </div>

        <div className="about-floating-card">
          <div className="floating-icon">💙</div>
          <div>
            <strong>Care That Matters</strong>
            <p>Every patient. Every moment.</p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="about-stats">
        <div className="about-stat">
          <span className="stat-icon">👨‍⚕️</span>
          <div>
            <h2>Expert Care</h2>
            <p>Qualified Professionals</p>
          </div>
        </div>

        <div className="about-stat">
          <span className="stat-icon">🩺</span>
          <div>
            <h2>Patient First</h2>
            <p>Personalized Attention</p>
          </div>
        </div>

        <div className="about-stat">
          <span className="stat-icon">🏥</span>
          <div>
            <h2>Modern Care</h2>
            <p>Healthcare Facilities</p>
          </div>
        </div>

        <div className="about-stat">
          <span className="stat-icon">💚</span>
          <div>
            <h2>Trusted Support</h2>
            <p>Care With Compassion</p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story" id="our-story">
        <div className="about-story-visual">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85"
              alt="Modern hospital and healthcare environment"
            />

            <div className="story-image-label">
              <span>+</span>
              <div>
                <strong>Your Health, Our Mission</strong>
                <p>Care with compassion</p>
              </div>
            </div>
          </div>

          <div className="story-decoration"></div>
        </div>

        <div className="about-story-content">
          <span className="about-section-label">ABOUT OUR HOSPITAL</span>

          <h2>
            Healthcare With
            <br />
            <span>A Human Touch.</span>
          </h2>

          <p>
            At Health Care Hospital, we believe that quality healthcare
            begins with understanding people. Every patient deserves
            respect, attention, and care that puts their needs first.
          </p>

          <p>
            Our hospital management system makes it easier to access
            important services, manage appointments, and connect with
            the right healthcare professionals.
          </p>

          <div className="about-feature-list">
            <div>
              <span>✓</span>
              Patient-focused healthcare services
            </div>
            <div>
              <span>✓</span>
              Convenient appointment management
            </div>
            <div>
              <span>✓</span>
              Organized and accessible patient records
            </div>
            <div>
              <span>✓</span>
              Dedicated medical and support teams
            </div>
          </div>

          <a href="/login" className="about-story-link">
            Get Started <span>→</span>
          </a>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-purpose">
        <div className="about-purpose-heading">
          <span className="about-section-label">WHAT DRIVES US</span>
          <h2>Our Purpose, Your Health</h2>
          <p>
            Everything we do is guided by our commitment to better,
            more accessible, and more compassionate healthcare.
          </p>
        </div>

        <div className="purpose-grid">
          <div className="purpose-card purpose-mission">
            <div className="purpose-icon">🎯</div>
            <span className="purpose-small-label">OUR MISSION</span>
            <h3>Care Without Compromise</h3>
            <p>
              To provide accessible, patient-centered healthcare
              services with compassion, professionalism, and respect
              for every individual.
            </p>
            <div className="purpose-number">01</div>
          </div>

          <div className="purpose-card purpose-vision">
            <div className="purpose-icon">🌟</div>
            <span className="purpose-small-label">OUR VISION</span>
            <h3>A Healthier Tomorrow</h3>
            <p>
              To build a trusted healthcare environment where
              technology, teamwork, and human care work together
              for a healthier community.
            </p>
            <div className="purpose-number">02</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-services">
        <div className="about-services-heading">
          <div>
            <span className="about-section-label">WHAT WE OFFER</span>
            <h2>Care Designed Around You</h2>
          </div>

          <p>
            A smoother healthcare experience through reliable
            services and thoughtful patient support.
          </p>
        </div>

        <div className="about-services-grid">
          {services.map((service, index) => (
            <div className="about-service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <span className="service-index">
                0{index + 1} / HEALTHCARE
              </span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-bottom-line"></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why">
        <div className="about-why-content">
          <span className="about-section-label">THE DIFFERENCE WE MAKE</span>

          <h2>
            Because Your Health
            <br />
            <span>Deserves The Best Care.</span>
          </h2>

          <p>
            Healthcare should feel reassuring, not complicated.
            We focus on making your experience organized,
            comfortable, and centered around your needs.
          </p>

          <a href="/login" className="about-btn-primary">
            Explore Our Services <span>→</span>
          </a>
        </div>

        <div className="about-why-points">
          <div className="why-point">
            <span className="why-check">✓</span>
            <div>
              <h3>People Before Processes</h3>
              <p>We value your concerns, time, and individual needs.</p>
            </div>
          </div>

          <div className="why-point">
            <span className="why-check">✓</span>
            <div>
              <h3>Organized Healthcare</h3>
              <p>Clearer appointment and patient management workflows.</p>
            </div>
          </div>

          <div className="why-point">
            <span className="why-check">✓</span>
            <div>
              <h3>Care You Can Understand</h3>
              <p>We believe healthcare information should be easy to access.</p>
            </div>
          </div>

          <div className="why-point">
            <span className="why-check">✓</span>
            <div>
              <h3>Continuous Improvement</h3>
              <p>We strive to make the healthcare experience better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta">
        <div className="cta-decoration cta-decoration-one"></div>
        <div className="cta-decoration cta-decoration-two"></div>

        <div className="about-cta-content">
          <span className="cta-label">WE ARE HERE FOR YOU</span>

          <h2>
            Your Journey To Better
            <br />
            Health Starts Here.
          </h2>

          <p>
            Take the next step toward a more organized healthcare
            experience. Connect with us and explore our services.
          </p>

          <div className="about-hero-buttons">
            <a href="/login" className="cta-white-btn">
              Book An Appointment <span>→</span>
            </a>

            <a href="/contact" className="cta-outline-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;