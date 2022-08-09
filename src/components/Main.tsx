import { useEffect, useState } from "react";
import { getTixit } from "../service/getTixitService";
import EventContainer from "./EventContainer";
import "./Main.css";

import Event from "../models/Event";
import { useSearchParams } from "react-router-dom";
import SearchTerms from "../models/SearchTerms";

const Main = () => {
  // const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();

  const keyword: string | null = searchParams.get("keyword");
  const city: string | null = searchParams.get("city");
  const dateTime: string | null = searchParams.get("dateTime");
  const stateCode: string | null = searchParams.get("stateCode");
  const classificationName: string | null =
    searchParams.get("classificationName");

  const inquiry: SearchTerms = {
    ...(keyword ? { keyword } : {}),
    ...(city ? { city } : {}),
    ...(dateTime ? { dateTime } : {}),
    ...(stateCode ? { stateCode } : {}),
    ...(classificationName ? { classificationName } : {}),
  };

  useEffect(() => {
    console.log(inquiry);
    if (keyword || city || dateTime || stateCode || classificationName) {
      getTixit(inquiry).then((response) => {
        setEvents(response._embedded.events);
      });
    } else {
      getTixit({}).then((response) => {
        setEvents(response._embedded.events);
      });
    }
  }, [keyword, city, dateTime, stateCode, classificationName]);
  return (
    <div className="Main">
      {/* <button className="showModal" onClick={() => setShowModal(true)}>
        Search
      </button>
      {showModal && <SearchForm onSetShowModal={setShowModal} />} */}

      <EventContainer events={events} />
    </div>
  );
};

export default Main;
