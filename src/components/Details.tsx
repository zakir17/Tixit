import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="Details">
      {event ? (
        <>
          <div className="Details-holder">
            <div>
              <h2>{event.name}</h2>
              <img src={event.images[1].url} alt={event.name} />
            </div>
            <div className="Details-text">
              <h3>Don't miss your chance to see {event.name}!</h3>
              <p>
                Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod, minus, officia natus dicta ducimus temporibus eaque nobis
                repellendus asperiores iste itaque? Est minima magni voluptates
                possimus ipsum iusto excepturi ullam.
              </p>
              <p>
                When: {event.dates.start.localDate} at{" "}
                {event.dates.start.localTime}
              </p>
              <p>
                {event.classifications[0].genre.name} type event at{" "}
                {event._embedded.venues[0].name}
              </p>
              <p>
                Get your tickets{" "}
                <button>
                  <a href={event.url} target="_blank">
                    Here!
                  </a>
                </button>
              </p>
              <p>Ticket prices starting at ${event.priceRanges[0].min}.</p>
              <p>
                <button className="back-button" onClick={() => navigate(-1)}>
                  Back
                </button>
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>No Event here yet.</p>
      )}
    </div>
  );
};

export default Details;
