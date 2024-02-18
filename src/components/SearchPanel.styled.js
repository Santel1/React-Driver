import styled from "styled-components";

export const SearchPanelStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  .searchPanelList {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 18px;
    margin-bottom: 50px;
  }

  .searchPanelLabel {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: var(--primery-color-gray);
    margin-bottom: 8px;
  }
  .searchPanelBtn {
    border-radius: 12px;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background: var(--primery-color-blue);
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: var(--primery-color-white);
    transition: all 0.35s;
  }
  .searchPanelBtn:hover {
    background-color: var(--secondary-color-blue);
  }
  .searchSelectInput {
    cursor: pointer;
    border-radius: 14px;
    padding: 14px 18px;
    width: 224px;
    height: 48px;
    border: none;
    background: var(--secondary-color-gray);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primery-color-gray);
    &::-webkit-scrollbar {
      width: 7px;
      background-color: var(--primery-color-white);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--primery-color-blue);
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background-color: var(--primery-color-white);
    }
  }
  .searchPanelInput {
    border: none;
    border-right: 1px solid rgba(1, 1, 1, 0.2);
    border-radius: 14px 0 0 14px;
    padding: 0px 24px;
    width: 160px;
    height: 48px;
    background: var(--secondary-color-gray);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    &.right {
      border: none;
      border-radius: 0 14px 14px 0;
    }
  }
  .rowInput {
    display: flex;
  }
  .searchOption {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primery-color-black);
  }
`;
