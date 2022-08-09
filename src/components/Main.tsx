import { useEffect, useState } from "react";
import { getTixit } from "../service/getTixitService";
import EventContainer from "./EventContainer";
import "./Main.css";

import Event from "../models/Event";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchTerms from "../models/SearchTerms";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState("0");

  const navigate = useNavigate();

  // let page: string | null = searchParams.get("page");

  const keyword: string | null = searchParams.get("keyword");
  const city: string | null = searchParams.get("city");
  const localDate: string | null = searchParams.get("localDate");
  const stateCode: string | null = searchParams.get("stateCode");

  const classificationName: string | null =
    searchParams.get("classificationName");

  const inquiry: SearchTerms = {
    ...(keyword ? { keyword } : {}),
    ...(city ? { city } : {}),
    ...(localDate ? { localDate } : {}),
    ...(stateCode ? { stateCode } : {}),
    ...(classificationName ? { classificationName } : {}),
    ...(page ? { page } : {}),
  };
  const NextButton = () => {
    inquiry.page = setPage(`${parseInt(page!) + 1} `)!;
    navigate(`/?${new URLSearchParams(searchParams)}`);
    console.log(page);
  };
  useEffect(() => {
    console.log(inquiry);
    if (keyword || city || localDate || stateCode || classificationName) {
      getTixit(inquiry).then((response) => {
        setEvents(response._embedded.events);
      });
    } else {
      getTixit({}).then((response) => {
        setEvents(response._embedded.events);
      });
    }
  }, [keyword, city, localDate, stateCode, classificationName]);
  return (
    <div className="Main">
      <ScrollToTop smooth color="#6f00ff" />
      <EventContainer events={events} />
    </div>
  );
};

export default Main;
