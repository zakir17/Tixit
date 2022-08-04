import { createContext } from "react";
import Event from "../models/Event";

interface FavoritesContextModel {
  favorites: Event[];
  addFavorite: (event: Event) => void;
  removeFavorite: (id: string) => void;
  isFav: (id: string) => boolean;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFav: () => false,
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
