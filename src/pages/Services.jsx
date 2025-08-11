import React from "react";
import styles from "../styles/Services.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const serviceList = [
    {
      icon: "🛁",
      title: "Shampoo & Conditioning Baths",
      description: "Gentle products for a healthy, shiny coat.",
    },
    {
      icon: "✂",
      title: "Trims & Styling",
      description: "From breed-specific cuts to fun makeovers.",
    },
    {
      icon: "🐾",
      title: "Shaves & Hygiene Cuts",
      description: "Keeping your pet neat and comfy.",
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <header className={styles.header}>
        <h1>Our Premium Services</h1>
        <p>Because every pet deserves to be pampered in style.</p>
      </header>

      <section className={styles.servicesGrid}>
        {serviceList.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <div className={styles.icon}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Give Your Pet the Benny’s Experience</h2>
        <p>
          Schedule a session today and let us transform grooming into a luxury
          retreat for your furry friend.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => navigate("/appointment-form")}
        >
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Services;
