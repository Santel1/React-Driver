import { HomePageStyle } from "./HomePage.styled";
import car from "../images/homepageimg.png";

const HomePage = () => {
  return (
    <HomePageStyle>
      <div className="wrap">
        <p className="textHomePage">Welcome to rent car service</p>
        <img className="homepageimg" src={car} alt="car" />
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
