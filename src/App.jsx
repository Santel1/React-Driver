import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { StyledContainer } from "./App.styled";
import { Loader } from "./components/Loader";
import Navigation from "./components/Navigation";

const HomePage = lazy(() => import("./pages/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));

export const App = () => {
  return (
    <StyledContainer>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};
