import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getLinkClassName = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" className={getLinkClassName}>
        Home
      </NavLink>

      <NavLink to="/enroll" className={getLinkClassName}>
        Enroll
      </NavLink>
    </nav>
  );
};

export default Navbar;
