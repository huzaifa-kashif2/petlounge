import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { CatchTheTreats } from "../components/CatchTheTreats";

const funFacts = [
  "🐶 Dogs sleep an average of 12–14 hours a day - perfect for our cozy suites.",
  "🐱 Cats purr at a frequency that can promote healing - we provide the calmest spaces.",
  "🦴 We bake our own organic pet treats - no preservatives, just love.",
];

const testimonials = [
  {
    quote:
      "I was nervous leaving Milo, but Benny’s made it so easy — constant updates and the sweetest staff ever!",
    author: "Sana, Lahore",
  },
  {
    quote: "My cat came home looking like royalty. The grooming was flawless!",
    author: "Ali, Gulberg",
  },
];



const Home = () => {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>Where Every Paw Feels at Home 🐾</h1>
          <p>Welcome to Benny’s Pet Lounge — Pakistan’s first purpose-built pet hotel and grooming haven. Whether your furry friend is here for a cozy stay or a pampering spa day, we promise love, comfort, and care every step of the way. With 24/7 caretakers, on-site vets, camera access for owners, and daily updates, you can relax knowing your pet is happy, safe, and living their best life.</p>
          <div className={styles.ctaButtons}>
            <Link to="/boarding" className={`${styles.btn} ${styles.primary}`}>Book Boarding</Link>
            <Link to="/grooming" className={`${styles.btn} ${styles.secondary}`}>Book Grooming</Link>
          </div>
        </div>
      </header>

      {/* NEW WRAPPER */}
      <section className={styles.gameAndPlaceholderWrapper}>
        <CatchTheTreats />
        <div className={styles.placeholderDiv}>
          {/* Temporary placeholder for your future component */}
          <h3>Future Component Placeholder</h3>
          <p>This space is reserved for your upcoming content.</p>
        </div>
      </section>

      <section className={styles.funFacts}>
        <h2>Did You Know?</h2>
        <ul>
          {funFacts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      </section>

      <section className={styles.testimonialsPreview}>
        <h2>Happy Tails from Happy Clients</h2>
        {testimonials.map(({ quote, author }, idx) => (
          <div key={idx} className={styles.testimonial}>
            <p>{quote}</p>
            <span>- {author}</span>
          </div>
        ))}
      </section>

      <div className={styles.testimonialButton}>
        <Link to="/testimonials" className={`${styles.btn} ${styles.secondary}`}>
          See what others say
        </Link>
      </div>

      <section className={styles.contactSnippet}>
        <h2>Book Your Pet’s Stay Today!</h2>
        <p>📍 DHA Phase 5, Lahore | 📞 0300-1234567</p>
        <Link to="/contact" className={`${styles.btn} ${styles.primary}`}>
          Contact Us
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Benny’s Pet Lounge. All rights reserved.</p>
      </footer>
    </>
  );
};
export default Home;
