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
      <p>{}</p>
    </li>
  );
};

export default EventCard;
