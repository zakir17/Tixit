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

  console.log(event?.classifications[0].genre.name);

  return (
    <div className="Details">
      {event ? (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[1].url} alt={event.name} />
          <p>{event.dates.start.localDate}</p>
          <p>{event.dates.start.localTime}</p>
        </>
      ) : (
        <p>No Event here yet.</p>
      )}
    </div>
  );
};

export default Details;
