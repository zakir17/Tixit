import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchForm from "./SearchForm";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="Header">
      <Link to="/events/main">
        {" "}
        <img src={require("../assets/Tixitlogo1.png")} />
      </Link>
      <div>
        {" "}
        <Link to="/events/favorites">
          <button>TixList</button>
        </Link>{" "}
        <div>
          <button className="showModal" onClick={() => setShowModal(true)}>
            Search
          </button>
          {showModal && <SearchForm onSetShowModal={setShowModal} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
