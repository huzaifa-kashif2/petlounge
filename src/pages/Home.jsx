import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import img1 from "../assets/home1.jpg";
import img2 from "../assets/home2.jpg";
import img3 from "../assets/home3.jpg";
import img4 from "../assets/home4.jpg";
import img5 from "../assets/home5.jpg";
import img6 from "../assets/home6.jpg";

const features = [
  {
    imgSrc: img1,
    alt: "24/7 Care",
    title: "24/7 Caretakers",
    description:
      "Round-the-clock care to keep tails wagging and whiskers twitching happily.",
  },
  {
    imgSrc: img2,
    alt: "On-Site Vet",
    title: "On-Site Vet",
    description:
      "Immediate medical attention for peace of mind — your pet’s health comes first.",
  },
  {
    imgSrc: img3,
    alt: "Live Cameras",
    title: "Live Camera Access",
    description:
      "Check in anytime through our secure camera feed to see your pet enjoying life.",
  },
  {
    imgSrc: img4,
    alt: "Spa Grooming",
    title: "Luxury Spa Grooming",
    description:
      "From blueberry facials to pawdicures — because they deserve the royal treatment.",
  },
  {
    imgSrc: img5,
    alt: "Daily Updates",
    title: "Daily Photo & Video Updates",
    description: "Get a daily dose of cuteness straight to your phone.",
  },
  {
    imgSrc: img6,
    alt: "Play Areas",
    title: "Indoor & Outdoor Play",
    description:
      "Spacious playgrounds for fetch, zoomies, and lazy afternoon naps.",
  },
];

const funFacts = [
  "🐶 Dogs sleep an average of 12–14 hours a day — perfect for our cozy suites.",
  "🐱 Cats purr at a frequency that can promote healing — we provide the calmest spaces.",
  "🦴 We bake our own organic pet treats — no preservatives, just love.",
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
          <p>
            Welcome to Benny’s Pet Lounge — Pakistan’s first purpose-built pet
            hotel and grooming haven. Whether your furry friend is here for a
            cozy stay or a pampering spa day, we promise love, comfort, and care
            every step of the way. With 24/7 caretakers, on-site vets, camera
            access for owners, and daily updates, you can relax knowing your pet
            is happy, safe, and living their best life.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/boarding" className={`${styles.btn} ${styles.primary}`}>
              Book Boarding
            </Link>
            <Link
              to="/grooming"
              className={`${styles.btn} ${styles.secondary}`}
            >
              Book Grooming
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.features}>
        <h2>Why Choose Benny’s?</h2>
        <div className={styles.featureGrid}>
          {features.map(({ imgSrc, alt, title, description }, idx) => (
            <div key={idx} className={styles.feature}>
              <img src={imgSrc} alt={alt} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
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

