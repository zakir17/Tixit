import { useEffect, useState } from "react";
import { getTixit } from "../service/getTixitService";
import EventContainer from "./EventContainer";
import "./Main.css";
import SearchForm from "./SearchForm";

import Event from "../models/Event";
import { useSearchParams } from "react-router-dom";
import SearchTerms from "../models/SearchTerms";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();

  const keyword: string | null = searchParams.get("keyword");
  const city: string | null = searchParams.get("city");
  const dateTime: string | null = searchParams.get("dateTime");
  const stateCode: string | null = searchParams.get("stateCode");
  const classificationName: string | null =
    searchParams.get("classificationName");

  const test: SearchTerms = {
    ...(keyword ? { keyword } : {}),
    ...(city ? { city } : {}),
    ...(dateTime ? { dateTime } : {}),
    ...(stateCode ? { stateCode } : {}),
    ...(classificationName ? { classificationName } : {}),
  };

  useEffect(() => {
    console.log(test);
    getTixit({ test }).then((response) => {
      setEvents(response._embedded.events);
    });
  }, [test]);
  return (
    <div className="Main">
      <SearchForm />
      <EventContainer events={events} />
    </div>
  );
};

export default Main;
