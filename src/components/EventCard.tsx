import Event from "../models/Event";
import "./EventCard.css";
interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <li className="EventCard">
      <h2>{event.name}</h2>
      <img src={event.images.url} alt={event.name} />
    </li>
  );
};

export default EventCard;
