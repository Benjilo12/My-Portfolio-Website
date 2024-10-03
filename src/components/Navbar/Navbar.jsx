import { NavLink } from "react-router-dom";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef, useEffect } from "react";
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

      <h1 className="logo" style={{ cursor: "pointer" }}>
        Benjis <span>Portfolio</span>
      </h1>
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="close menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <NavLink className="link" exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/myproject"
            activeClassName="active-link"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/cvpage" activeClassName="active-link">
            Cv
          </NavLink>
        </li>
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
