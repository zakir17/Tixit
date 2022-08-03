import Event from "../models/Event";
import EventCard from "./EventCard";
import "./EventContainer.css";
interface Props {
  events: Event[];
}

const EventContainer = ({ events }: Props) => {
  return (
    <div className="EventContainer">
      <ul>
        {events.map((singleEvent) => (
          <EventCard event={singleEvent} key={`${singleEvent}`} />
        ))}
      </ul>
    </div>
  );
};

export default EventContainer;
