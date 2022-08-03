import Event from "./Event";

interface _Embedded {
  events: Event[];
}

export default interface EventResponse {
  _embedded: _Embedded;
}
