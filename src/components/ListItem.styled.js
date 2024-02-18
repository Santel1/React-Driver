import styled from "styled-components";

export const ListItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 274px;
  height: 440px;

  .catalogCarImg {
    border-radius: 14px;
    height: 268px;
    object-fit: cover;
    margin-bottom: 14px;
  }
  .catalogCarInfo {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .catalogCarModel {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primery-color-black);
    &.blueText {
      color: var(--primery-color-blue);
    }
  }
  .catalogCarPrice {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primery-color-black);
  }
  .catalogCarDesc {
    display: block;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
  }
  .catalogCarBtn {
    border-radius: 12px;
    padding: 12px 0px;
    width: 274px;
    height: 44px;
    background-color: var(--primery-color-blue);
    color: var(--primery-color-white);
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    transition: all 0.35s;
  }
  .catalogCarBtn:hover {
    background-color: var(--secondary-color-blue);
  }
  .catalogFavoriteBtn {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
  }
  .catalogFavoriteIcon {
    stroke: var(--primery-color-white);
    fill: transparent;
    transition: stroke 0.35s, fill 0.35s;
    &.active {
      stroke: var(--primery-color-blue);
      fill: var(--primery-color-blue);
    }
  }
  .catalogFavoriteIcon:hover {
    stroke: var(--primery-color-blue);
  }
`;
