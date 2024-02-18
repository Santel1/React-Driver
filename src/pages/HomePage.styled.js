import styled from "styled-components";

export const HomePageStyle = styled.div`
  display: flex;
  justify-content: center;

  .wrap {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primery-color-blue);
    border-radius: 30px;
  }
  .textHomePage {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 25px;
    line-height: 150%;
    color: var(--primery-color-black);
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 15px;
  }
  .homepageimg {
    width: 800px;
  }
`;
