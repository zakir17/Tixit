import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./EventCard.css";
interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <li className="EventCard">
      <h2>{event.name}</h2>
      <img src={event.images[1].url} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event.dates.start.localTime}</p>
      <p>{event._embedded.venues[0].city.name}</p>
      <Link to={`/events/details/${encodeURIComponent(event.id)}/details`}>
        See more
      </Link>
    </li>
  );
};

export default EventCard;
