import { useEffect, useState } from "react";
import { getTixit } from "../service/getTixitService";
import EventContainer from "./EventContainer";
import "./Main.css";
import SearchForm from "./SearchForm";
import axios from "axios";
import Event from "../models/Event";
import { useSearchParams } from "react-router-dom";
import SearchTerms from "../models/SearchTerms";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState<SearchTerms>({});

  useEffect(() => {
    console.log(searchParams);

    getTixit(search).then((response) => {
      setEvents(response._embedded.events);
    });
  }, [search]);
  return (
    <div className="Main">
      <SearchForm onSearch={setSearch} />
      <EventContainer events={events} />
    </div>
  );
};

export default Main;
