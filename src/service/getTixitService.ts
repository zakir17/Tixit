import axios from "axios";
import EventResponse from "../models/EventResponse";
import SearchTerms from "../models/SearchTerms";

const key: string = process.env.REACT_APP_KEY || "";

export const getTixit = (searchTerms: any): Promise<EventResponse> => {
  searchTerms.apikey = key;

  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: searchTerms,
    })
    .then((response) => {
      return response.data;
    });
};

export const getTixitById = (id: string): Promise<EventResponse> => {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events.json/${encodeURIComponent(
        id
      )}`,
      {
        params: key,
      }
    )
    .then((response) => {
      return response.data;
    });
};
