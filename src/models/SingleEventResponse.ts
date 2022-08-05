interface Genre {
  name: string;
}

interface Classification {
  genre: Genre;
}

interface Venue {
  name: string;
}

interface Start {
  localDate: string;
  localTime: string;
}

interface Dates {
  start: Start;
}

interface Image {
  url: string;
}

interface Embedded {
  venues: Venue[];
}

export default interface SingleEvent {
  name: string;
  id: string;
  url: string;
  images: Image[];
  dates: Dates;
  classifications: Classification[];
  _embedded: Embedded;
}
