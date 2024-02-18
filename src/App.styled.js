import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 0px 100px 100px 100px;
  .header {
    padding: 50px 0px;
  }
  .nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .headerLink {
    border-radius: 12px;
    padding: 12px 30px;
    background-color: var(--primery-color-blue);
    color: var(--primery-color-white);
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    transition: all 0.35s;
    &:hover {
      background-color: var(--secondary-color-blue);
    }
    &.active {
      background-color: var(--secondary-color-blue);
    }
  }
`;
