import React, { useEffect } from "react";
import { ModalStyled } from "./Modal.styled";
import { ReactComponent as CloseSvg } from "../images/close.svg";

const Modal = ({ isOpen, onClose, advert }) => {
  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!advert) return;

  const handleClickBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  const rentalConditions = advert.rentalConditions
    .split("\n")
    .map((condition, index) => {
      const parts = condition.split(": "); // Разбиваем строку по ": "
      if (parts.length === 2 && parts[0] === "Minimum age") {
        return (
          <li className="carModalItem" key={index}>
            <span>{parts[0]}:</span>
            <span className="difColor">{parts[1]}</span>
          </li>
        );
      } else {
        return (
          <li className="carModalItem" key={index}>
            {condition}
          </li>
        );
      }
    });

  return isOpen ? (
    <ModalStyled onClick={handleClickBackdrop}>
      <div className="modal">
        <button className="closeButton" onClick={closeModal}>
          <CloseSvg className="closeImg" />
        </button>
        {advert && (
          <>
            <img
              className="modalCarImg"
              src={advert.photoLink || advert.img}
              alt=""
            />

            <div className="wrapperSection">
              <p className="modalCarName">
                {advert.make}&nbsp;
                <span className="modalCarName color">{advert.model}</span>,
                {advert.year}
              </p>
              <p className="modalCarText">
                {advert.address
                  .split(" ")
                  .slice(3, 5)
                  .join(" | ")
                  .replace(/,/g, "")}
                | Id: {advert.id} | Year: {advert.year} | Type: {advert.type}{" "}
                <br />
                Fuel Consumption: {advert.fuelConsumption} | Engine Size:{" "}
                {advert.engineSize}
              </p>
              <p className="modalCarDescription">{advert.description}</p>
            </div>
            <div className="wrapperSection">
              <p className="modalCarSubtitle">
                Accessories and functionalities:
              </p>
              <p className="modalCarText">
                {advert.accessories.join(" | ")} <br />
                {advert.functionalities.join(" | ")}
              </p>
            </div>
            <div className="wrapperSection">
              <p className="modalCarSubtitle">Rental Conditions: </p>
              <ul className="carModalList">
                {rentalConditions}
                <li className="carModalItem">
                  Millage:
                  <span className="difColor">
                    {advert.mileage.toLocaleString().replace(/\s/g, ",")}
                  </span>
                </li>
                <li className="carModalItem">
                  Price:<span className="difColor">{advert.rentalPrice}</span>
                </li>
              </ul>
            </div>
            <button className="modalBtnRent">
              <a href="tel:+380730000000">Rental car</a>
            </button>
          </>
        )}
      </div>
    </ModalStyled>
  ) : null;
};

export default Modal;
