interface Images {
  url: string;
}

interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
}
interface date {
  start: Start;
}
interface Name {
  name: string;
}
interface Classification {
  segment: Name;
  genre: Name;
}

interface Embedded {
  venues: Venue[];
}
interface Venue {
  name: string;
  city: Name;
  state: Name;
}

export default interface Event {
  name: string;
  id: string;
  url: string;
  images: Images[];
  dates: date;
  classification: Classification;
  _embedded: Embedded;
}
