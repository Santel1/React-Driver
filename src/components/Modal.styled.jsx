import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    border-radius: 24px;
    max-width: 541px;
    padding: 40px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #666;
  }

  .close:hover {
    color: #000;
  }

  .modalCarImg {
    border-radius: 14px;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
    object-fit: cover;
  }
  .modalCarName {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    color: var(--primery-color-black);
    margin-bottom: 8px;
    &.color {
      color: var(--primery-color-blue);
    }
  }
  .modalCarText {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 14px;
  }
  .modalCarDescription {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: var(--primery-color-black);
  }
  .modalCarSubtitle {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    color: var(--primery-color-black);
    margin-bottom: 8px;
  }
  .carModalList {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .carModalItem {
    border-radius: 35px;
    padding: 7px 14px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--secondary-color-black);
    background: #f9f9f9;
  }
  .wrapperSection {
    margin-bottom: 24px;
    width: 461px;
  }
  .difColor {
    color: var(--primery-color-blue);
  }
  .closeButton {
    position: absolute;
    background-color: transparent;
    top: 16px;
    right: 16px;
  }
  .closeImg {
    stroke: var(--primery-color-black);
    transition: all 0.3s;
    &:hover {
      stroke: var(--primery-color-blue);
    }
  }
  .modalBtnRent {
    border-radius: 12px;
    padding: 12px 50px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: var(--primery-color-white);
    background: var(--primery-color-blue);
    transition: all 0.3s;
    &:hover {
      background: var(--secondary-color-blue);
    }
  }
`;
