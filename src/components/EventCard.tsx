import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import Event from "../models/Event";
import "./EventCard.css";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);
  return (
    <li className="EventCard">
      <h2>
        {event.name}{" "}
        {isFav(event.id) ? (
          <i
            className="fa-solid fa-star"
            onClick={(e) => {
              e.stopPropagation();
              removeFavorite(event.id);
            }}
          ></i>
        ) : (
          <i
            className="fa-regular fa-star"
            onClick={(e) => {
              e.stopPropagation();
              addFavorite(event);
            }}
          ></i>
        )}
      </h2>
      <img src={event.images[1].url} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event.dates.start.localTime}</p>
      <p>{event._embedded.venues[0].city.name}</p>
      <Link to={`/events/details/${encodeURIComponent(event.id)}`}>
        See more
      </Link>{" "}
    </li>
  );
};

export default EventCard;
