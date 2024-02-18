import styled from "styled-components";

export const FavoriteStyle = styled.div``;

export const FavoritesListStyle = styled.ul`
  display: grid;
  justify-items: center;
  padding: 0px 40px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 29px;
  row-gap: 50px;
`;

export const FavoriteMessage = styled.p`
  text-align: center;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--primery-color-black);
`;
