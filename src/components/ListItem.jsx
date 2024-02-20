import React from "react";
import { ReactComponent as HeartSvg } from "../images/heart.svg";
import { ListItemStyle } from "./ListItem.styled";

const ListItem = ({
  advert,
  favorites,
  handleClickFavorites,
  handleOpenModal,
}) => {
  return (
    <ListItemStyle className="catalogItem" key={advert.id}>
      <button
        className={`catalogFavoriteBtn ${
          favorites.some((favorite) => favorite.id === advert.id)
            ? "active"
            : ""
        }`}
        onClick={() => handleClickFavorites(advert)}
      >
        <HeartSvg
          className={`catalogFavoriteIcon ${
            favorites.some((favorite) => favorite.id === advert.id)
              ? "active"
              : ""
          }`}
        />
      </button>
      <div className="catalogCarInfo">
        <img
          className="catalogCarImg"
          // src={advert.photoLink || advert.img}
          alt={`${advert.make} ${advert.model},${advert.year}`}
        />
        <div className="wrapper">
          <p className="catalogCarModel">
            {advert.make}&nbsp;
            <span className="catalogCarModel blueText">{advert.model}</span>,
            {advert.year}
          </p>
          <p className="catalogCarPrice">{advert.rentalPrice}</p>
        </div>
        <p className="catalogCarDesc">
          {advert.address.split(" ").slice(3, 5).join(" | ").replace(/,/g, "")}{" "}
          | {advert.rentalCompany} | {advert.type} | {advert.model} |{" "}
          {advert.id} | {advert.functionalities.slice(0, 1)}
        </p>
      </div>
      <button onClick={() => handleOpenModal(advert)} className="catalogCarBtn">
        Learn more
      </button>
    </ListItemStyle>
  );
};

export default ListItem;
