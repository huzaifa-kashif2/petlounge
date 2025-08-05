import React from "react";
import styles from "./Contact.module.css";
import logo from "../../assets/logo.png"
import {
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactCard}>
      <img src={logo} alt="Logo" className={styles.logo} /> {/* Replace with your own logo */}
      <h2 className={styles.title}>Bennys Pets Lounge</h2>

      <div className={styles.info}>
        <p>
          <FaMapMarkerAlt className={styles.icon} />
          V-11, Street 17, Sector V,<br />
          DHA Phase 2, Lahore, 54792, Pakistan
        </p>

        <p>
          <FaPhone className={styles.icon} /> 0321 1234567
        </p>

        <p>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:info@bennyspetlounge.com">
            info@bennyspetlounge.com
          </a>
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
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6805.348647515624!2d74.40136627763954!3d31.47814386923759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908ab93291a45%3A0xdaea234f9647e517!2sSector%20V%20DHA%20Phase%202%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1754405397981!5m2!1sen!2s"
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
