import { Link } from "react-router-dom";
import "../style/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NavBar</div>

      <ul className="nav-links">
        <li>
          <Link to="/">List</Link>
        </li>

        <li>
          <Link to="/add">Add Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;