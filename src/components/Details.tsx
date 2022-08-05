import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleEvent from "../models/SingleEventResponse";
import { getTixitById } from "../service/getTixitService";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [event, setEvent] = useState<SingleEvent | null>(null);

  useEffect(() => {
    getTixitById(id!).then((response) => {
      console.log(response);
      setEvent(response);
    });
  }, []);

  return (
    <div className="Details">
      {event ? (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[1].url} alt={event.name} />
          <div>Don't miss your chance to see {event.name}!</div>
          <p>
            When: {event.dates.start.localDate} at {event.dates.start.localTime}
          </p>
          <p>
            {event.classifications[0].genre.name} type event at{" "}
            {event._embedded.venues[0].name}
          </p>
          <p>
            Get your tickets <a href={event.url}>here!</a>
          </p>
        </>
      ) : (
        <p>No Event here yet.</p>
      )}
    </div>
  );
};

export default Details;
