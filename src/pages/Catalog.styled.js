import styled from "styled-components";

export const CatalogStyle = styled.div`
  .loadMoreBtn {
    border-radius: 12px;
    padding: 14px 44px;
    background: var(--primery-color-blue);
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: var(--primery-color-white);
    transition: all 0.35s;
  }
  .loadMoreBtn:hover {
    background-color: var(--secondary-color-blue);
  }
  .wrap {
    display: flex;
    justify-content: center;
  }
`;

export const CatalogListStyle = styled.ul`
  display: grid;
  justify-items: center;
  padding: 0px 40px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 20px;
`;
