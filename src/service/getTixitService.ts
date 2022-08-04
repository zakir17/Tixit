import axios from "axios";
import MultipleEventResponse from "../models/MultipleEventResponse";
import SingleEventResponse from "../models/SingleEventResponse";

const key: string = process.env.REACT_APP_KEY || "";

export const getTixit = (searchTerms: any): Promise<MultipleEventResponse> => {
  searchTerms.apikey = key;

  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: searchTerms,
    })
    .then((response) => {
      return response.data;
    });
};

export const getTixitById = (id: string): Promise<SingleEventResponse> => {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events/${encodeURIComponent(
        id
      )}.json`,
      {
        params: { apikey: key },
      }
    )
    .then((response) => {
      return response.data;
    });
};
