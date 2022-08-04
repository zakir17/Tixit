import { useEffect, useState } from "react";
import { getTixit } from "../service/getTixitService";
import EventContainer from "./EventContainer";
import "./Main.css";
import SearchForm from "./SearchForm";
import axios from "axios";
import Event from "../models/Event";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();
  const userSearch = searchParams.get("q");

  // useEffect(() => {
  //   getTixit(searchTerms).then((response) => {
  //     setEvents(response._embedded.events);
  //   });
  // }, []);
  return (
    <div className="Main">
      <EventContainer events={events} />
    </div>
  );
};

export default Main;
