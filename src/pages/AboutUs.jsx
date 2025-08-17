import React from "react";
import styles from "../styles/AboutUs.module.css";
import {
  FaPaw,
  FaHeart,
  FaShieldAlt,
  FaCamera,
  FaClock,
  FaBath,
  FaHome,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaHome className={styles["feature-icon"]} />,
    title: "Luxury Boarding",
    description: "Private, cozy suites with daily housekeeping & soft bedding.",
  },
  {
    icon: <FaBath className={styles["feature-icon"]} />,
    title: "Pet Spa & Grooming",
    description:
      "Premium baths, trims, styling & aromatherapy for total relaxation.",
  },
  {
    icon: <FaShieldAlt className={styles["feature-icon"]} />,
    title: "24/7 Care & Security",
    description: "On-site vets, trained caretakers & constant monitoring.",
  },
  {
    icon: <FaCamera className={styles["feature-icon"]} />,
    title: "Live Camera Access",
    description: "Watch your pet’s stay anytime from your phone.",
  },
  {
    icon: <FaClock className={styles["feature-icon"]} />,
    title: "Flexible Stays",
    description: "Hourly, daily, or long-term packages to suit your needs.",
  },
  {
    icon: <FaHeart className={styles["feature-icon"]} />,
    title: "Love Above All",
    description: "Every pet gets personal attention, hugs, and playtime.",
  },
  {
    icon: <FaPaw className={styles["feature-icon"]} />,
    title: "Pet Wellness",
    description: "Nutritious meals, vet checks & activity-based health care.",
  },
  {
    icon: <FaGraduationCap className={styles["feature-icon"]} />,
    title: "Pet Training Sessions",
    description:
      "Fun and positive training to build good habits and strengthen your bond.",
  },
];

const AboutUs = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-bg"]}></div>

      <div className={styles["about-content"]}>
        <h1 className={styles["about-title"]}>About Benny’s Pet Lounge 🐾</h1>
        <p className={styles["about-intro"]}>
          At <strong>Benny’s Pet Lounge</strong>, we believe every tail wag and
          purr deserves the finest care. As Pakistan’s <strong>first luxury pet hotel </strong>
          and grooming haven, we’ve built a space where pets aren’t just guests
          — they’re family.
        </p>

        <p className={styles["about-desc"]}>
          From spacious, air-conditioned suites to spa-level grooming, on-site
          vets, and 24/7 caretakers, everything here is designed for your pet’s
          comfort, safety, and happiness. We go beyond “boarding” — we create a
          home where love and care never clock out.
        </p>

        <div className={styles["about-features"]}>
          {features.map(({ icon, title, description }, idx) => (
            <div key={idx} className={styles["feature-card"]}>
              {icon}
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className={styles["about-mission"]}>
          <h2>Our Promise 💖</h2>
          <p>
            We’re more than a pet hotel — we’re a place where your furry
            companion feels safe, loved, and truly at home. Whether they’re here
            for a spa day or an extended stay, they’ll leave happier, healthier,
            and a little bit spoiled.
          </p>
        </div>

        <div className={styles["about-cta"]}>
          <Link to="/appointment-form" className={styles["book-btn"]}>
            📅 Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
