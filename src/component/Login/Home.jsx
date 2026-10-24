
import React from "react";
import "./Home.css";

function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  

  return (
    <div className="hospital-home">
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">
              Welcome to Health Care Hospital
            </span>

            <h1>
              Your Health,
              <br />
              Our Priority
            </h1>

            <p>
              Providing compassionate care and modern medical
              services to help you and your family live healthier.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollToSection("services")}>
                Our Services
              </button>

              <button
                className="secondary-btn"
                onClick={() => scrollToSection("about")}
              >
                About Hospital
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Our Medical Services</h2>
        <p>
          Quality healthcare and compassionate support for you
          and your family.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">✚</div>
            <h3>General Medicine</h3>
            <p>Medical care for everyday health needs.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">♡</div>
            <h3>Cardiology</h3>
            <p>Care and support for heart health.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">✚</div>
            <h3>Emergency Care</h3>
            <p>Prompt attention when urgent care is needed.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Our Hospital</h2>
        <p>
          Our mission is to provide accessible, compassionate
          healthcare with modern facilities and a patient-first
          approach.
        </p>
      </section>

     
    </div>
  );
}

export default Home;