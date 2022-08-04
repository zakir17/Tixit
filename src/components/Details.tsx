import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "../models/Event";
import { getTixitById } from "../service/getTixitService";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;

  const [event, setEvent] = useState<Event | null>(null);

  //   useEffect(() => {
  //       getTixitById(id!).then((response) => {
  //         setEvent(response._embedded.events);
  //       });
  //     }, []);

  return <div className="Details"></div>;
};

export default Details;

// return (
//   <div className="Details">{gif ? <Card gif={gif} /> : <p>Loading</p>}</div>
// );
