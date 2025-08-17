import React from "react";
import styles from "../styles/Boarding.module.css";
import boarding from "../assets/boarding1.jpg";
import {
  FaVideo,
  FaStethoscope,
  FaClock,
  FaMobileAlt,
  FaCat,
  FaDog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Boarding = () => {
  return (
    <div className={styles.boardingContainer}>
      <header className={styles.boardingHeader}>
        <h1 className={styles.headline}>A Home Away from Home for Your Pets</h1>
        <p className={styles.subheadline}>
          Pakistan's First Purpose-Built Pet Hotel – Designed with your pet’s comfort in mind.
        </p>
      </header>

      <section className={styles.boardingIntro}>
        <p>
          Whether it’s for a weekend getaway or an extended stay, Benny’s Pet Lounge offers a safe,
          comfortable, and loving environment for your furry family members.
        </p>
      </section>

      <div className={styles.boardingTabs}>
        <div className={styles.tabCard}>
          <FaCat className={styles.tabIcon} />
          <h3>Cats</h3>
          <p>
            Our cat suites feature cozy bedding, sunny napping spots, climbing shelves, and daily
            cuddle sessions. Perfect for your feline royalty.
          </p>
        </div>
        <div className={styles.tabCard}>
          <FaDog className={styles.tabIcon} />
          <h3>Small Breed Dogs</h3>
          <p>
            Spacious play areas, soft beds, social playtimes, and constant human interaction ensure
            your little dog feels right at home.
          </p>
        </div>
      </div>

      <section className={styles.boardingFeatures}>
        <h2>Why Choose Benny’s Boarding?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <FaVideo className={styles.featureIcon} />
            <p>📹 Camera Access – Check in on your pets anytime, anywhere.</p>
          </div>
          <div className={styles.featureItem}>
            <FaStethoscope className={styles.featureIcon} />
            <p>🩺 On-Site Vet – Professional care just a paw’s reach away.</p>
          </div>
          <div className={styles.featureItem}>
            <FaClock className={styles.featureIcon} />
            <p>🕒 24/7 Caretakers – Around-the-clock love and supervision.</p>
          </div>
          <div className={styles.featureItem}>
            <FaMobileAlt className={styles.featureIcon} />
            <p>📱 Regular Updates – Daily WhatsApp photos & videos.</p>
          </div>
        </div>
      </section>

      <div className={styles.boardingImage}>
        <img src={boarding} alt="Happy pet in boarding suite" />
      </div>

      <footer className={styles.boardingFooter}>
        <p>We don’t just watch over your pets — we treat them like our own.</p>
        <div className={styles.boardingCta}>
          <Link to="/appointment-form" className={styles.bookBtn}>
            🐾 Book Me
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Boarding;
