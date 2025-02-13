import { Link, NavLink } from "react-router-dom";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const menuRef = useRef();
  const menuButtonRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const githubProfileUrl = "https://github.com/Benjilo12";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <img
        ref={menuButtonRef}
        src={menu_open}
        alt="menu"
        className="nav-mob-open"
        onClick={openMenu}
      />

      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="logo" style={{ cursor: "pointer" }}>
          Benjis <span>Portfolio</span>
        </h1>
      </Link>

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="close menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/myproject"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
            to="/cvpage"
          >
            Cv
          </NavLink>
        </li>

        <il>
          {" "}
          <motion.a
            className="nav-connect-btn"
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 1.2 }}
          >
            My GitHub Profile
          </motion.a>
        </il>
      </ul>
      <a
        className="nav-connect"
        href={githubProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub Profile
      </a>
    </div>
  );
}

export default Navbar;
