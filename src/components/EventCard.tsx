import Event from "../models/Event";
import "./EventCard.css";
interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <li className="EventCard">
      <h2>{event.name}</h2>
      <img src={""} alt={event.name} />
      {/* <p>{event.images.image.url}</p> */}
      <a href={event.url} target="_blank">
        Buy Tickets!
      </a>
    </li>
  );
};

export default EventCard;
