import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    name: "Ayesha Khan",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "I’ve never seen my cat come back from grooming this calm and happy! Benny’s Pet Lounge is truly a game changer for pet parents. From the ambiance to the love they pour into each session — highly recommend!"
  },
  {
    name: "Hassan Raza",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "Exceptional experience! Their staff truly knows how to handle even the grumpiest pets with care and patience. My dog now loves his spa days. Thank you, Benny’s!"
  },
  {
    name: "Mehak Iqbal",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "Not just grooming, this place feels like a retreat for pets. Soothing environment, luxury accessories, and the most professional team I’ve seen in Pakistan. Worth every penny!"
  },
  {
    name: "Ali Naveed",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "A true five-star hotel for pets. As a frequent traveler, I finally feel stress-free leaving my pets at Benny’s. They’re loved, pampered, and treated like royalty."
  },
  {
    name: "Fatima Noor",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "Everything is top-notch — from the hygiene to the warm welcome. I got my pet's grooming and accessories from here and couldn’t be more impressed. Lahore needed this!"
  },
  {
    name: "Zara Khalid",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "I came here after a friend recommended it, and I’m so glad I did. The staff made me feel welcome and my little buddy had the time of his life. So grateful!"
  },
  {
    name: "Omar Siddiqui",
    location: "Lahore",
    stars: "⭐⭐⭐⭐⭐",
    text: "From the beautiful decor to the gentle groomers, every detail screams love. It’s not just a service — it’s an experience. Highly recommend it to every pet parent out there!"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonialsData);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % filteredTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredTestimonials]);

  useEffect(() => {
    const filtered = testimonialsData.filter(
      (t) =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTestimonials(filtered.length > 0 ? filtered : testimonialsData);
    setIndex(0);
  }, [searchQuery]);

  return (
    <div>
      <header className={styles.header}>
        <h1>Real Stories from Pet Parents 🐾</h1>
        <p className={styles.paw}>See why Lahore’s pets love us!</p>
      </header>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchQuery}jdnsfuisdnfsidu
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.carousel}>
        {filteredTestimonials.length > 0 && (
          <div className={styles.testimonial}>
            <div className={styles.stars}>{filteredTestimonials[index].stars}</div>
            <p>{filteredTestimonials[index].text}</p>
            <div className={styles.author}>{filteredTestimonials[index].name}</div>
            <div className={styles.location}>{filteredTestimonials[index].location}</div>
          </div>
        )}
      </div>

      <div className={styles.writeReview}>
        <h2>🐾 Write Your Own Review</h2>
        <input type="text" placeholder="Your Name"  />
        <input type="text" placeholder="Location"  />
        <textarea rows="4" placeholder="Your experience..." ></textarea>
        <button disabled>Submit Review</button>
      </div>

      <div className={styles.pawDecor}>🐾 🐾 🐾</div>
    </div>
  );
}
