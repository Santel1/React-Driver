import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { addToFavorites, deleteFavorite } from "../redux/advertsSlice";
import {
  selectAdvertsError,
  selectAdvertsFavorites,
  selectAdvertsFilter,
  selectAdvertsIsLoading,
} from "../redux/adverts.selectors";
import { useState } from "react";
import { Loader } from "../components/Loader";
import {
  FavoriteMessage,
  FavoriteStyle,
  FavoritesListStyle,
} from "./Favorites.styled";
import { NavLink } from "react-router-dom";
import ListItem from "../components/ListItem";

const Favorites = () => {
  const isLoading = useSelector(selectAdvertsIsLoading);
  const error = useSelector(selectAdvertsError);
  const dispatch = useDispatch();
  const filter = useSelector(selectAdvertsFilter);
  const favorites = useSelector(selectAdvertsFavorites);
  const [selectedAdvert, setSelectedAdvert] = useState(false);

  const handleOpenModal = (advert) => {
    setSelectedAdvert(advert);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setSelectedAdvert(false);
    document.body.classList.remove("modal-open");
  };

  const handleClickFavorites = (advert) => {
    const isFavorite = favorites.some((favorite) => favorite.id === advert.id);

    if (isFavorite) {
      dispatch(deleteFavorite(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  const filteredAdverts =
    favorites !== null &&
    favorites.filter((advert) =>
      advert.make.toLowerCase().includes(filter.toLowerCase().trim())
    );

  return (
    <FavoriteStyle>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredAdverts.length > 0 ? (
            <FavoritesListStyle>
              {filteredAdverts.map((advert) => (
                <ListItem
                  key={advert.id}
                  advert={advert}
                  favorites={favorites}
                  handleClickFavorites={handleClickFavorites}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </FavoritesListStyle>
          ) : (
            <FavoriteMessage className="favoriteMessage">
              <NavLink className="headerLink" to="/catalog">
                Please add car to favorites from catalog
              </NavLink>
            </FavoriteMessage>
          )}
        </>
      )}
      <Modal
        isOpen={selectedAdvert}
        onClose={handleCloseModal}
        advert={selectedAdvert}
      />
      {error && <p>{error.message}</p>}
    </FavoriteStyle>
  );
};

export default Favorites;
