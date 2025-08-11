import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaSearchPlus,
  FaDownload,
  FaShareAlt,
  FaRandom,
  FaPlay,
  FaPause,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "../styles/PawWall.module.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";

const ALL = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img15, img16
];

function pickSize() {
  const r = Math.random();
  if (r < 0.55) return "span-1";
  if (r < 0.85) return "span-2";
  return "span-3";
}

function pickShape() {
  const shapes = ["shape-rect", "shape-square"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

export default function PawWall() {
  const initial = useMemo(() =>
    ALL.map((src, i) => ({
      id: i,
      src,
      title: `Benny’s Star ${i + 1}`,
      caption: `Loved & groomed — #${i + 1}`,
      size: pickSize(),
      shape: pickShape(),
    }))
  , []);

  const [items, setItems] = useState(initial);
  const [favorites, setFavorites] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pawFavs") || "[]"));
    } catch {
      return new Set();
    }
  });
  const [modalIndex, setModalIndex] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const autoplayRef = useRef(null);
  const [filterFav, setFilterFav] = useState(false);

  const shuffle = () => {
    setItems(prev => {
      const arr = [...prev];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr.map(item => ({
        ...item,
        size: pickSize(),
        shape: pickShape()
      }));
    });
  };

  const toggleFav = (id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      localStorage.setItem("pawFavs", JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const openModalAt = (index) => {
    setModalIndex(index);
    setAutoplay(false);
  };

  const closeModal = () => setModalIndex(null);

  const goto = (dir) => {
    if (modalIndex === null) return;
    const visible = visibleItems();
    const idxInVisible = visible.findIndex(v => v.id === items[modalIndex].id);
    let nextIdx = idxInVisible + dir;
    if (nextIdx < 0) nextIdx = visible.length - 1;
    if (nextIdx >= visible.length) nextIdx = 0;
    const nextId = visible[nextIdx].id;
    const newIndex = items.findIndex(it => it.id === nextId);
    setModalIndex(newIndex);
  };

  const visibleItems = () => filterFav ? items.filter(it => favorites.has(it.id)) : items;

  useEffect(() => {
    const handler = (e) => {
      if (modalIndex !== null) {
        if (e.key === "ArrowRight") goto(1);
        if (e.key === "ArrowLeft") goto(-1);
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalIndex, items, favorites, filterFav]);

  useEffect(() => {
    if (autoplay && modalIndex !== null) {
      autoplayRef.current = setInterval(() => goto(1), 3000);
    } else {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, modalIndex, items, favorites, filterFav]);

  const downloadImage = (src, title = "bennyspet") => {
    const a = document.createElement("a");
    a.href = src;
    a.download = `${title}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const tryShare = async (src, title) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: src });
      } catch (_) {}
    } else {
      try {
        await navigator.clipboard.writeText(src);
        alert("Image link copied to clipboard.");
      } catch {
        alert("Sharing not available.");
      }
    }
  };

  const sortFavoritesFirst = () => {
    setItems(prev => {
      const favs = prev.filter(it => favorites.has(it.id));
      const rest = prev.filter(it => !favorites.has(it.id));
      return [...favs, ...rest];
    });
  };

  useEffect(() => {
    if (filterFav && visibleItems().length === 0) {
      setFilterFav(false);
    }
  }, [favorites]);

  const touchRef = useRef({ startX: 0, endX: 0 });
  useEffect(() => {
    const el = document;
    const start = (e) => {
      touchRef.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const end = (e) => {
      touchRef.current.endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const dx = touchRef.current.endX - touchRef.current.startX;
      if (dx > 50) goto(-1);
      if (dx < -50) goto(1);
    };
    el.addEventListener("touchstart", start);
    el.addEventListener("touchend", end);
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, [modalIndex, items, favorites, filterFav]);

  const tiles = visibleItems();

  return (
    <div className={styles.outerWrap} aria-live="polite">
      <div className={styles.toolbar}>
        <div className={styles.leftControls}>
          <button className={styles.toolBtn} onClick={shuffle}><FaRandom /> Shuffle</button>
          <button
            className={`${styles.toolBtn} ${filterFav ? styles.activeTool : ""}`}
            onClick={() => setFilterFav(f => !f)}
          >
            <FaHeart /> Favorites
          </button>
          <button className={styles.toolBtn} onClick={sortFavoritesFirst}>
            <FaHeart style={{opacity:0.9}} /> Bring Fav Up
          </button>
        </div>

        <div className={styles.rightControls}>
          <button
            className={styles.toolBtn}
            onClick={() => {
              if (modalIndex === null && tiles.length > 0) {
                const id = tiles[0].id;
                const idx = items.findIndex(it => it.id === id);
                setModalIndex(idx);
                setAutoplay(true);
              } else setAutoplay(a => !a);
            }}
          >
            {autoplay ? <><FaPause /> Pause</> : <><FaPlay /> Slideshow</>}
          </button>
        </div>
      </div>

      <div className={styles.outerFrame}>
        <div className={styles.innerMat}>
          <div className={styles.grid}>
            {tiles.map((it, i) => {
              const index = items.findIndex(x => x.id === it.id);
              return (
                <article
                  key={it.id}
                  className={`${styles.tile} ${styles[it.size]} ${styles[it.shape]}`}
                >
                  <div className={styles.frame}>
                    <img src={it.src} alt={it.title} loading="lazy" decoding="async" />
                  </div>

                  <div className={styles.tileOverlay}>
                    <div className={styles.meta}>
                      <strong>{it.title}</strong>
                      <span className={styles.caption}>{it.caption}</span>
                    </div>

                    <div className={styles.actions}>
                      <button className={styles.iconBtn} onClick={() => openModalAt(index)}>
                        <FaSearchPlus />
                      </button>
                      <button className={styles.iconBtn} onClick={() => toggleFav(it.id)}>
                        {favorites.has(it.id) ? <FaHeart color="#e74c3c" /> : <FaRegHeart />}
                      </button>
                      <button className={styles.iconBtn} onClick={() => downloadImage(it.src, `benny-${it.id}`)}>
                        <FaDownload />
                      </button>
                      <button className={styles.iconBtn} onClick={() => tryShare(it.src, it.title)}>
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {modalIndex !== null && (
        <div className={styles.modal}>
          <div className={styles.modalBg} onClick={closeModal} />
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeModal}><FaTimes /></button>
            <button className={styles.modalNavLeft} onClick={() => goto(-1)}><FaChevronLeft /></button>
            <button className={styles.modalNavRight} onClick={() => goto(1)}><FaChevronRight /></button>

            <div className={styles.modalInner}>
              <img src={items[modalIndex].src} alt={items[modalIndex].title} />
              <div className={styles.modalMeta}>
                <h3>{items[modalIndex].title}</h3>
                <p>{items[modalIndex].caption}</p>
                <div className={styles.modalActions}>
                  <button onClick={() => toggleFav(items[modalIndex].id)} className={styles.iconBtn}>
                    {favorites.has(items[modalIndex].id) ? <FaHeart color="#e74c3c" /> : <FaRegHeart />}
                  </button>
                  <button onClick={() => downloadImage(items[modalIndex].src, items[modalIndex].title)} className={styles.iconBtn}>
                    <FaDownload />
                  </button>
                  <button onClick={() => tryShare(items[modalIndex].src, items[modalIndex].title)} className={styles.iconBtn}>
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
