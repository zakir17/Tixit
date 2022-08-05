import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>TiXiT</h1>
      <div>
        <Link to="/events/favorites">
          <button>TixList</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
