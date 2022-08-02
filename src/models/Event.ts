interface Image {
  image: string;
}
interface Start {
  localDate: string;
  localTime: string;
}
interface Name {
  name: string;
}
interface Classification {
  segment: Name;
  genre: Name;
}

interface Embedded {
  venue: Venue;
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
  images: Image;
  date: Start;
  classification: Classification;
  embedded: Embedded;
}
