import React, { useState } from "react";
import styles from "../styles/Quiz.module.css";

export default function Quiz() {
  const questions = [
    {
      question: "What’s your ideal weekend plan?",
      options: [
        { text: "Snuggle up with a book/movie", type: "cat" },
        { text: "Hit the outdoors with friends", type: "dog" },
      ],
    },
    {
      question: "How do you feel about meeting new people?",
      options: [
        { text: "Ugh, too much small talk", type: "cat" },
        { text: "Love it! More the merrier", type: "dog" },
      ],
    },
    {
      question: "Pick your dream vacation:",
      options: [
        { text: "A quiet cabin in the hills", type: "cat" },
        { text: "A beach with loud music & people", type: "dog" },
      ],
    },
    {
      question: "What’s your comfort food?",
      options: [
        { text: "Anything warm and home-cooked", type: "cat" },
        { text: "Street food or burgers!", type: "dog" },
      ],
    },
    {
      question: "You’re invited to a party, what’s your first thought?",
      options: [
        { text: "Can I skip it and stay home?", type: "cat" },
        { text: "Yay! Let’s go!", type: "dog" },
      ],
    },
    {
      question: "Pick a hobby:",
      options: [
        { text: "Journaling or painting alone", type: "cat" },
        { text: "Sports or group games", type: "dog" },
      ],
    },
    {
      question: "What best describes your personality?",
      options: [
        { text: "Independent and mysterious", type: "cat" },
        { text: "Loyal and energetic", type: "dog" },
      ],
    },
    {
      question: "Your room is usually...",
      options: [
        { text: "My cozy, private sanctuary", type: "cat" },
        { text: "A chill hangout spot for friends", type: "dog" },
      ],
    },
    {
      question: "Your reaction to sudden loud noises:",
      options: [
        { text: "Instant anxiety", type: "cat" },
        { text: "Curious alertness", type: "dog" },
      ],
    },
    {
      question: "Morning routine?",
      options: [
        { text: "Slow wake-ups with coffee", type: "cat" },
        { text: "Jump out and start the day", type: "dog" },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let catScore = 0,
      dogScore = 0;

    Object.values(answers).forEach((value) => {
      if (value === "cat") catScore++;
      else if (value === "dog") dogScore++;
    });

    if (catScore > dogScore) {
      setResult(
        `<h2>You’re a CAT personality! 🐱</h2>
        <p>You enjoy your space, prefer quality over quantity, and love peaceful moments. Mysterious yet full of affection, you’re a calm soul!</p>`
      );
    } else if (dogScore > catScore) {
      setResult(
        `<h2>You’re a DOG personality! 🐶</h2>
        <p>Energetic, loyal, and always ready for fun – you’re the life of the party! You thrive in company and spread joy wherever you go.</p>`
      );
    } else {
      setResult(
        `<h2>You’re a purr-fect blend! 🐾</h2>
        <p>You carry the chill vibes of a cat and the playful loyalty of a dog. Truly the best of both worlds!</p>`
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1>🐾 What's Your Pet Personality? 🐾</h1>

      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} className={styles.question}>
            <h3>
              Q{index + 1}. {q.question}
            </h3>
            <div className={styles.options}>
              {q.options.map((opt, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`q${index}`}
                    value={opt.type}
                    required
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                  {opt.text}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className={styles.btn}>
          See Result
        </button>
      </form>

      {result && (
        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      )}
    </div>
  );
}
