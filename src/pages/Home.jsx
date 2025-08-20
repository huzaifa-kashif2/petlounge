import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { CatchTheTreats } from "../components/CatchTheTreats";
import video from "../assets/video.mp4";
import PawWall from "./PawWall";

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
          <h1>Where Every Paw Feels at Home</h1>
          <p>
            Welcome to Benny’s Pet Lounge — Pakistan’s first purpose-built pet
            hotel and grooming haven.
          </p>
          <div className={styles.ctaButtons}>
            <div className={styles.btnRow}>
              <Link
                to="/boarding"
                className={`${styles.btn} ${styles.primary}`}
              >
                Book Boarding
              </Link>
              <Link
                to="/grooming"
                className={`${styles.btn} ${styles.secondary}`}
              >
                Book Grooming
              </Link>
            </div>

            <div className={styles.btnRow}>
              <Link
                to="/appointment-form"
                className={`${styles.btn} ${styles.primary}`}
              >
                Appointment Form
              </Link>
              <Link
                to="/testimonials"
                className={`${styles.btn} ${styles.secondary}`}
              >
                Testimonials
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gameAndPlaceholderWrapper}>
        <CatchTheTreats />
        <div className={styles.placeholderDiv}>
          <div className={styles.videoContainer}>
            <video
              src={video}
              controls
              autoPlay={false}
              loop
              muted
              style={{ width: "100%", height: "60vh", borderRadius: "12px" }}
            />
          </div>
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
        <Link
          to="/testimonials"
          className={`${styles.btn} ${styles.secondary}`}
        >
          See what others say
        </Link>
      </div>
      <section className={styles.pawWallSection}>
        <PawWall />
      </section>

      <section className={styles.contactSnippet}>
        <h2>Book Your Pet’s Stay Today!</h2>
<p className={styles.contactInfo}>
  📍 DHA Phase 2, Lahore | 📞{" "}
  <a href="tel:+923070444055" className={styles.contactLink}>
    0307 0444055
  </a>{" "}
  | <span className={styles.emailIcon}>📧</span>{" "}
  <a
    href="mailto:info@bennyspetslounge.com"
    className={styles.contactLink}
  >
    info@bennyspetslounge.com
  </a>
</p>
        <div className={styles.btnRow}>
          <Link to="/contact" className={`${styles.btn} ${styles.primary}`}>
            Contact Us
          </Link>
          <a
            href="mailto:info@bennyspetslounge.com?subject=Booking%20Inquiry&body=Hello%20Benny's%20Pet%20Lounge%2C%0A%0AI%20would%20like%20to%20book%20a%20service%20for%20my%20pet."
            className={`${styles.btn} ${styles.secondary}`}
          >
            Email Us
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Benny’s Pet Lounge. All rights reserved.</p>
      </footer>
    </>
  );
};
export default Home;
