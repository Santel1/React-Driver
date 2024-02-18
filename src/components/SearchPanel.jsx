import React from "react";
import { SearchPanelStyle } from "./SearchPanel.styled";

const SearchPanel = ({
  carsModel,
  selectedCar,
  handleSelectChange,
  handleSearch,
}) => {
  return (
    <SearchPanelStyle>
      <ul className="searchPanelList">
        <li className="searchPanelItem">
          <label className="searchPanelLabel" htmlFor="car-model">
            Car brand
          </label>
          <select
            className="searchSelectInput"
            name="cars"
            id="car-model"
            onChange={handleSelectChange}
            value={selectedCar}
          >
            <option value="">All</option>
            {[...carsModel]
              .sort((a, b) => a.localeCompare(b))
              .map((car, index) => {
                return (
                  <option key={index} value={car}>
                    {car}
                  </option>
                );
              })}
          </select>
        </li>
        <li className="searchPanelItem">
          <label className="searchPanelLabel" htmlFor="rent-price">
            Price/ 1 hour
          </label>
          <select className="searchSelectInput" name="price" id="rent-price">
            <option value="">To $</option>
          </select>
        </li>
        <li className="searchPanelItem fromTo">
          <label className="searchPanelLabel" htmlFor="pet-select">
            Сar mileage / km
          </label>
          <div className="rowInput">
            <input
              className="searchPanelInput"
              type="text"
              placeholder="From"
              name="carMillageFrom"
            />
            <input
              className="searchPanelInput right"
              type="text"
              placeholder="To"
              name="carMillageTo"
            />
          </div>
        </li>

        <button className="searchPanelBtn" onClick={handleSearch}>
          Search
        </button>
      </ul>
    </SearchPanelStyle>
  );
};

export default SearchPanel;
