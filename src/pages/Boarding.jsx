import React from "react";
import styles from "../styles/Boarding.module.css";
import boarding from "../assets/boarding1.jpg"
import { FaVideo, FaStethoscope, FaClock, FaMobileAlt, FaCat, FaDog } from "react-icons/fa";

const Boarding = () => {
  return (
    <div className={styles["boarding-container"]}>
      {/* Header Section */}
      <header className={styles["boarding-header"]}>
        <h1 className={styles.headline}>A Home Away from Home for Your Pets</h1>
        <p className={styles.subheadline}>
          Pakistan's First Purpose-Built Pet Hotel – Designed with your pet’s comfort in mind.
        </p>
      </header>

      {/* Intro Section */}
      <section className={styles["boarding-intro"]}>
        <p>
          Whether it’s for a weekend getaway or an extended stay, Benny’s Pet Lounge offers a safe,
          comfortable, and loving environment for your furry family members.
        </p>
      </section>

      {/* Tabs */}
      <div className={styles["boarding-tabs"]}>
        <div className={styles["tab-card"]}>
          <FaCat className={styles["tab-icon"]} />
          <h3>Cats</h3>
          <p>
            Our cat suites feature cozy bedding, sunny napping spots, climbing shelves, and daily
            cuddle sessions. Perfect for your feline royalty.
          </p>
        </div>
        <div className={styles["tab-card"]}>
          <FaDog className={styles["tab-icon"]} />
          <h3>Small Breed Dogs</h3>
          <p>
            Spacious play areas, soft beds, social playtimes, and constant human interaction ensure
            your little dog feels right at home.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <section className={styles["boarding-features"]}>
        <h2>Why Choose Benny’s Boarding?</h2>
        <div className={styles["features-grid"]}>
          <div className={styles["feature-item"]}>
            <FaVideo className={styles["feature-icon"]} />
            <p>📹 Camera Access – Check in on your pets anytime, anywhere.</p>
          </div>
          <div className={styles["feature-item"]}>
            <FaStethoscope className={styles["feature-icon"]} />
            <p>🩺 On-Site Vet – Professional care just a paw’s reach away.</p>
          </div>
          <div className={styles["feature-item"]}>
            <FaClock className={styles["feature-icon"]} />
            <p>🕒 24/7 Caretakers – Around-the-clock love and supervision.</p>
          </div>
          <div className={styles["feature-item"]}>
            <FaMobileAlt className={styles["feature-icon"]} />
            <p>📱 Regular Updates – Daily WhatsApp photos & videos.</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className={styles["boarding-image"]}>
        <img
          src={boarding}
          alt="Happy pet in boarding suite"
        />
      </div>

      {/* Closing Section */}
      <footer className={styles["boarding-footer"]}>
        <p>We don’t just watch over your pets — we treat them like our own.</p>
      </footer>
    </div>
  );
};

export default Boarding;
