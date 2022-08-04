interface PriceRanges {
  min: string;
  max: string;
  currency: string;
}

interface Genre {
  name: string;
}

interface Classification {
  genre: Genre;
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

export default interface SingleEvent {
  name: string;
  id: string;
  url: string;
  images: Image[];
  dates: Dates;
  classifications: Classification[];
  info: string;
  priceRanges: PriceRanges;
  _embedded?: string;
}
