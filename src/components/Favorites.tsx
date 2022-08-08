import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import EventContainer from "./EventContainer";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();
  return (
    <div className="Favorites">
      <h2>Your Saved Tixits: </h2>
      <EventContainer events={favorites} />
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default Favorites;
