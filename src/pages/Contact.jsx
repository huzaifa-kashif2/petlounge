import React from "react";
import styles from "../styles/Contact.module.css";
import logo from "../assets/logo.png";
import {
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactCard}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <h2 className={styles.title}>Bennys Pets Lounge</h2>

      <div className={styles.info}>
        <p>
          <FaMapMarkerAlt className={styles.icon} />
          V-11, Street 17, Sector V,
          <br />
          DHA Phase 2, Lahore, 54792, Pakistan
        </p>

        <p>
          <FaPhone className={styles.icon} /> 03070444055
        </p>

        <p>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:info@bennyspetlounge.com">info@bennyspetlounge.com</a>
        </p>

        <p>
          <FaGlobe className={styles.icon} />
          <a
            href="https://bennyspetslounge.com"
            target="_blank"
            rel="noreferrer"
          >
            https://bennyspetslounge.com
          </a>
        </p>
      </div>

      <div className={styles.social}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className={styles.fbIcon} />
        </a>
        <a
          href="https://www.linkedin.com/company/benny-s-pets-lounge/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={styles.fbIcon} />
        </a>
        <a
          href="https://www.instagram.com/bennys_pets_lounge/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className={styles.fbIcon} />
        </a>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.578895788739!2d74.40953447561002!3d31.480768174232047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzUwLjgiTiA3NMKwMjQnNDMuNiJF!5e0!3m2!1sen!2s!4v1755850643391!5m2!1sen!2s" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
}
