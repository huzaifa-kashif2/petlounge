import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import navItems from "./NavItems";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Benny's Pets Lounge" />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={menuOpen ? styles.active : ""}></span>
        <span className={menuOpen ? styles.active : ""}></span>
        <span className={menuOpen ? styles.active : ""}></span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={
                location.pathname === item.path ? styles.activeLink : ""
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
