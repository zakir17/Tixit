import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/events/main">
        {" "}
        <h1>TiXiT</h1>
      </Link>
      <div>
        <Link to="/events/favorites">
          <button>TixList</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
