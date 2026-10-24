import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="hospital-login-page">
      <div className="login-main-card">

        {/* LEFT SECTION */}
        <section className="login-brand-panel">
          <div className="login-brand-content">
            <Link to="/" className="login-brand-logo">
              <span className="brand-cross">✚</span>
              <span>
                <strong>Health Care</strong>
                <small>HOSPITAL</small>
              </span>
            </Link>

            <div className="brand-message">
              <span className="brand-eyebrow">
                YOUR HEALTH, OUR PRIORITY
              </span>

              <h1>
                Better Care.
                <br />
                <span>Healthier Tomorrow.</span>
              </h1>

              <p>
                We are committed to providing quality healthcare
                with compassion, trust, and care for every patient.
              </p>

              <div className="brand-features">
                <div><span>✓</span> Trusted Healthcare</div>
                <div><span>✓</span> Expert Medical Team</div>
                <div><span>✓</span> Patient-Focused Care</div>
                <div><span>✓</span> Convenient Services</div>
              </div>
            </div>
          </div>

          <div className="brand-bottom">
            <div className="brand-bottom-icon">✚</div>
            <p>Care with compassion. Every patient, every day.</p>
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="login-form-panel">
          <div className="login-form-inner">

            <div className="login-heading">
              <span className="login-welcome-label">
                WELCOME BACK
              </span>

              <h2>Sign in to your account</h2>

              <p>
                Enter your details to continue to your dashboard.
              </p>
            </div>

            <form className="login-form">

              {/* ROLE */}
              <div className="login-input-group">
                <label htmlFor="role" className="login-field-label">
                  Select Role
                </label>

                <select
                  id="role"
                  name="role"
                  className="login-role-select"
                  defaultValue="PATIENT"
                  required
                >
                    <option disabled>Role</option>
                  <option value="ADMIN">Admin</option>
                  <option value="DOCTOR">Doctor</option>
                  <option value="PATIENT">Patient</option>
                  <option value="RECEPTION">Reception</option>
                </select>
              </div>

              {/* EMAIL */}
              <div className="login-input-group">
                <label htmlFor="email" className="login-field-label">
                  Email Address
                </label>

                <div className="login-input-wrapper">
                  <span className="login-input-icon">✉</span>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="login-input-group">
                <label htmlFor="password" className="login-field-label">
                  Password
                </label>

                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              {/* OPTIONS */}
              <div className="login-options">
                <label className="remember-option">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    value="true"
                  />
                  <span>Remember me</span>
                </label>

                
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="login-submit-button"
              >
                <span>Sign In</span>
                <span className="login-submit-arrow">→</span>
              </button>

              <p className="login-security-note">
                🔒 Your account deserves secure authentication.
              </p>
            </form>

            <div className="login-divider">
              <span></span>
              <small>NEW TO OUR HOSPITAL?</small>
              <span></span>
            </div>

            <p className="login-register-text">
              Create a patient account{" "}
              <Link to="/register">Register here →</Link>
            </p>

            <Link to="/" className="login-back-home">
              ← Back to Home
            </Link>

          </div>
        </section>
      </div>

      <p className="login-copyright">
        © {new Date().getFullYear()} Health Care Hospital.
        All rights reserved.
      </p>
    </div>
  );
}

export default Login;