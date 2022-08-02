import axios from "axios";
import EventResponse from "../models/EventResponse";

const key: string = process.env.REACT_APP_KEY || "";

export const getTixit = (searchTerms: any): Promise<EventResponse> => {
  searchTerms.apikey = key;

  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events", {
      params: searchTerms,
    })
    .then((response) => {
      return response.data;
    });
};
