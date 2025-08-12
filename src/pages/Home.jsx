import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

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

// Mini game component
function CatchTheTreats() {
  const [basketX, setBasketX] = useState(150);
  const [treats, setTreats] = useState([]);
  const [score, setScore] = useState(0);
  const gameRef = useRef(null);
  const animationRef = useRef(null);
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    const gameLoop = (timestamp) => {
      if (timestamp - lastSpawnTime.current > 1000) {
        setTreats((prev) => [
          ...prev,
          {
            id: Date.now(),
            x: Math.floor(Math.random() * 280),
            y: 0,
            type: Math.random() > 0.5 ? "bone" : "fish",
          },
        ]);
        lastSpawnTime.current = timestamp;
      }

      setTreats((prev) =>
        prev
          .map((t) => {
            const newY = t.y + 3;
            const caught =
              newY > 200 && t.x > basketX - 30 && t.x < basketX + 60;
            if (caught) {
              setScore((s) => s + 1);
              return null;
            }
            return newY < 250 ? { ...t, y: newY } : null;
          })
          .filter(Boolean)
      );

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationRef.current);
  }, [basketX]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setBasketX((prev) => Math.max(prev - 20, 0));
      } else if (e.key === "ArrowRight") {
        setBasketX((prev) => Math.min(prev + 20, 300));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const gameArea = gameRef.current;
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const rect = gameArea.getBoundingClientRect();
      const relativeX = touch.clientX - rect.left;
      setBasketX(Math.max(0, Math.min(relativeX - 30, 300)));
    };
    gameArea?.addEventListener("touchmove", handleTouchMove);
    return () => gameArea?.removeEventListener("touchmove", handleTouchMove);
  }, []);

  return (
    <div className={styles.gameContainer} ref={gameRef}>
      <h3>Catch the Treats 🐶🐱</h3>
      <p>Score: {score}</p>
      <div className={styles.gameArea}>
        {treats.map((treat) => (
          <div
            key={treat.id}
            className={`${styles.treat} ${styles[treat.type]}`}
            style={{ left: treat.x, top: treat.y }}
          ></div>
        ))}
        <div className={styles.basket} style={{ left: basketX }}></div>
      </div>
      <p className={styles.gameHint}>Use ⬅ ➡ or swipe to move</p>
    </div>
  );
}

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

      <section>
        <CatchTheTreats />
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
