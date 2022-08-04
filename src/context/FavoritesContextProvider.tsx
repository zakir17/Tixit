import { ReactNode, useState } from "react";
import Event from "../models/Event";

import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Event[]>([]);
  const addFavorite = (event: Event): void => {
    setFavorites((prev) => {
      return [...prev, event];
    });
  };
  const removeFavorite = (id: string): void => {
    setFavorites((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
      // const index: number = prev.findIndex((item) => item.id === id);
      // return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isFav = (id: string): boolean =>
    favorites.some((event) => event.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFav }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
