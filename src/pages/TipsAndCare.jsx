import React, { useState } from "react";
import styles from "../styles/TipsAndCare.module.css";

const mythsData = [
  { myth: "Cats always land on their feet.", fact: "Cats can get injured if they fall from high places — keep them safe indoors." },
  { myth: "Dogs wag their tails only when happy.", fact: "Tail wagging can mean excitement, nervousness, or alertness." },
  { myth: "Bathing pets daily keeps them clean.", fact: "Over-bathing can dry out their skin. Once a month is enough unless dirty." },
];

export default function TipsAndCare() {
  const [currentMyth, setCurrentMyth] = useState(0);

  const nextMyth = () => {
    setCurrentMyth((prev) => (prev + 1) % mythsData.length);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🐾 Pet Tips & Care</h1>
      <p className={styles.subtitle}>
        Your ultimate guide to keeping your furry friends happy, healthy, and pampered.
      </p>

      <section className={styles.grooming}>
        <div className={styles.card}>
          <h2>🐶 Dog Grooming Tips</h2>
          <ul>
            <li>Brush your dog’s coat 2-3 times a week to prevent tangles.</li>
            <li>Trim nails every 3-4 weeks to avoid discomfort.</li>
            <li>Clean ears gently with a vet-approved cleaner.</li>
            <li>Use dog-specific shampoo for a shiny coat.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>🐱 Cat Grooming Tips</h2>
          <ul>
            <li>Brush your cat regularly to reduce hairballs.</li>
            <li>Check teeth and gums for signs of dental issues.</li>
            <li>Trim claws every 2-3 weeks.</li>
            <li>Provide scratching posts to keep claws healthy.</li>
          </ul>
        </div>
      </section>

      <section className={styles.quickCare}>
        <h2>💡 Quick Care Cards</h2>
        <div className={styles.careGrid}>
          <div className={styles.careItem}>Always keep fresh water available.</div>
          <div className={styles.careItem}>Provide a balanced diet with proper nutrients.</div>
          <div className={styles.careItem}>Exercise your pets daily for mental & physical health.</div>
          <div className={styles.careItem}>Regular vet check-ups prevent serious health issues.</div>
        </div>
      </section>

      <section className={styles.mythBuster}>
        <h2>🔍 Pet Myth Buster</h2>
        <div className={styles.mythBox}>
          <p className={styles.myth}><strong>Myth:</strong> {mythsData[currentMyth].myth}</p>
          <p className={styles.fact}><strong>Fact:</strong> {mythsData[currentMyth].fact}</p>
          <button onClick={nextMyth} className={styles.nextBtn}>Next Myth ➡</button>
        </div>
      </section>

      <section className={styles.seasonal}>
        <h2>🌦 Seasonal Care Tips</h2>
        <div className={styles.card}>
          <h3>☀ Summer</h3>
          <p>Keep pets cool, avoid midday walks, and always have shade & water.</p>
        </div>
        <div className={styles.card}>
          <h3>❄ Winter</h3>
          <p>Use pet-safe sweaters, keep them dry, and avoid icy surfaces.</p>
        </div>
      </section>
    </div>
  );
}