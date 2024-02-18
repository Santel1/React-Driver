import React from "react";

import { NavLink } from "react-router-dom";
import { StyledContainerHeader } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledContainerHeader>
      <nav className="nav">
        <NavLink className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="headerLink" to="/favorite">
          Favorite
        </NavLink>
      </nav>
    </StyledContainerHeader>
  );
};

export default Navigation;
