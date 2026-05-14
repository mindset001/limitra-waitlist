"use client";

import { useState } from "react";

const Logo = () => (
  <div className="footer-logo" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src="/assets/images/logo2.png" alt="Limitra Logo" height={40} />
  </div>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("limitra-theme", nextTheme);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for joining the waitlist!");
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="logo-container">
            <Logo />
          </div>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle color mode"
          >
            <svg className="theme-toggle-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg className="theme-toggle-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 7.4A9 9 0 1 1 12 3Z"></path>
            </svg>
            <span>Theme</span>
          </button>

          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
            Now Accepting Members
          </div>
          
          <h1>Nigeria&apos;s Premium<br/>Marketplace is Almost Here</h1>
          <p>LIMITRA is launching soon. Join the waitlist <br />for exclusive early access, first drops, and launch offers.</p>
          
          <div className="form-wrapper">
            <form className="waitlist-form" onSubmit={handleJoinWaitlist}>
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Subscribe
              </button>
            </form>
            <div className="social-proof">
              <div className="avatars">
                <img src={`https://i.pravatar.cc/100?img=12`} alt="avatar" />
                <img src={`https://i.pravatar.cc/100?img=33`} alt="avatar" />
                <img src={`https://i.pravatar.cc/100?img=47`} alt="avatar" />
              </div>
              <span>Trusted by <strong>500+</strong> Early adopters</span>
            </div>
          </div>

          <div className="steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Join the waitlist</h3>
              <p>Sign up with your email to reserve your spot. No payment required.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Get Early Access</h3>
              <p>Receive exclusive notification 48 hours before public launch.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Shop before Launch</h3>
              <p>Sign up with your Browse and purchase premium items before they&apos;re available to everyone.</p>
            </div>
          </div>

          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2>Why LIMITRA?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <h3>First Access. Every Time.</h3>
              <p>Shop premium products sourced from the best markets — before they sell out.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              </div>
              <h3>Premium Quality Items</h3>
              <p>Every product is carefully curated for exceptional quality and timeless style.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>Express shipping on all orders. Your premium products, delivered swiftly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
              <h3>Limited Launch Offers</h3>
              <p>Founding members receive exclusive discounts and early access to collections.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3>Secure Checkout</h3>
              <p>Shop with confidence. Bank-level security for every transaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3>Curated Collections</h3>
              <p>Handpicked essentials that define modern luxury and sophisticated style.</p>
            </div>
          </div>
          <p style={{ marginTop: '60px', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>Built for shoppers who value quality and style.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2>What People Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>Finally, a brand that understands premium quality and exclusive access. Can&apos;t wait for launch.</p>
              <div className="testimonial-author">
                <h4>Abubakar Dauda</h4>
                <span>Fashion Influencer</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>The curation looks incredible. This is exactly what the market has been missing.</p>
              <div className="testimonial-author">
                <h4>Marcus Chidubem</h4>
                <span>Style Enthusiast</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>Early access to limited drops? Count me in. LIMITRA is going to be huge.</p>
              <div className="testimonial-author">
                <h4>Laurel Akinwale</h4>
                <span>Luxury Shopper</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {[
              {
                q: "When do you launch?",
                a: "We are currently in private beta and plan to launch fully by next quarter. Join the waitlist to be notified first."
              },
              {
                q: "What do waitlist members get?",
                a: "Waitlist members will receive early access, a founding member badge, and exclusive discounts on our first curated drop."
              },
              {
                q: "Is joining free?",
                a: "Yes! Joining the waitlist is completely free and only requires your email address."
              },
              {
                q: "Will there be exclusive discounts?",
                a: "Absolutely. Early members will get access to special promotional pricing that won't be available to the general public."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="faq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="cta-pattern"></div>
        <div className="fast">
          <h1>Spots are filling fast, 5000+ members and counting</h1>
        </div>
        <div className="container">
          <h2>Your spot is waiting,<br /> Claim it Now!</h2>
          <p>5000+ Nigerians already secured founding member access and exclusive launch pricing</p>
          <button className="btn btn-accent" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Claim My Spot</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Logo />
          <div className="footer-center">
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            <div className="copyright">
              © 2026 LIMITRA. All rights reserved.
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
