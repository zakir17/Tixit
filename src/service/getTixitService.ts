import axios from "axios";
import EventResponse from "../models/EventResponse";
import SearchTerms from "../models/SearchTerms";

const key: string = process.env.REACT_APP_KEY || "";

export const getTixit = (searchTerms: SearchTerms): Promise<EventResponse> => {
  searchTerms.apikey = key;

  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events", {
      params: key,
    })
    .then((response) => {
      return response.data;
    });
};
