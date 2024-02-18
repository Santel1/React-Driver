import React, { useEffect, useState } from "react";
import { CatalogListStyle, CatalogStyle } from "./Catalog.styled";
import { Loader } from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFavorite,
  requestAdverts,
  setFilter,
} from "../redux/advertsSlice";
import Modal from "../components/Modal";
import {
  selectAdverts,
  selectAdvertsError,
  selectAdvertsFavorites,
  selectAdvertsFilter,
  selectAdvertsIsLoading,
  selectAdvertsModels,
} from "../redux/adverts.selectors";
import SearchPanel from "../components/SearchPanel";
import ListItem from "../components/ListItem";

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsIsLoading);
  const error = useSelector(selectAdvertsError);
  const carsModel = useSelector(selectAdvertsModels);
  const dispatch = useDispatch();
  const filter = useSelector(selectAdvertsFilter);
  const favorites = useSelector(selectAdvertsFavorites);
  const [selectedAdvert, setSelectedAdvert] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  useEffect(() => {
    dispatch(requestAdverts());
  }, [dispatch]);

  const handleOpenModal = (advert) => {
    setSelectedAdvert(advert);
    document.body.classList.add("modal-open");
    console.log(advert.length);
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

  const handleSelectChange = (event) => {
    setSelectedCar(event.target.value);
  };
  const handleSearch = () => {
    dispatch(setFilter(selectedCar));
    setSelectedAdvert(false);
  };

  const filteredAdverts =
    adverts !== null &&
    adverts.filter((advert) =>
      advert.make.toLowerCase().includes(filter.toLowerCase().trim())
    );

  return (
    <CatalogStyle>
      <SearchPanel
        carsModel={carsModel}
        selectedCar={selectedCar}
        handleSelectChange={handleSelectChange}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <CatalogListStyle>
          {filteredAdverts &&
            filteredAdverts.map((advert) => {
              return (
                <ListItem
                  key={advert.id}
                  advert={advert}
                  favorites={favorites}
                  handleClickFavorites={handleClickFavorites}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}{" "}
        </CatalogListStyle>
      )}
      <Modal
        isOpen={selectedAdvert}
        onClose={handleCloseModal}
        advert={selectedAdvert}
      />
      {error && <p>{error.message}</p>}
    </CatalogStyle>
  );
};

export default Catalog;
