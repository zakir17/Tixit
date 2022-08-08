import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/events/main">
        {" "}
        <img src={require("../assets/Tixitlogo1.png")} />
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
