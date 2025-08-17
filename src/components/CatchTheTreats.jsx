import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CatchTheTreats.module.css"; // or your relevant CSS module path

export function CatchTheTreats() {
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