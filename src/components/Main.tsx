import { useEffect, useState } from "react";
import { getTixit } from "../service/getTixitService";
import EventContainer from "./EventContainer";
import "./Main.css";
import SearchForm from "./SearchForm";
import axios from "axios";
import Event from "../models/Event";
import SearchTerms from "../models/SearchTerms";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [term, setTerm] = useState<SearchTerms>();

  const searchTerm: SearchTerms = {};

  useEffect(() => {
    getTixit(searchTerm).then((response) => {
      setEvents(response._embedded.events);
    });
  }, []);
  return (
    <div className="Main">
      <EventContainer events={events} />
    </div>
  );
};

export default Main;
