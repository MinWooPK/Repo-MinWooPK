import HomeProgrammingIcon from "../../assets/img/Home-programming.png";
import HomeHiIcons from "../../assets/icons/Hand.png";

import {
  ButtonContact,
  Container,
  DesciptionDetail,
  DescriptionH1,
  DescriptionH2,
  HomeHandIcon,
  HomeImge,
  HomeImgeContainer,
} from "./style";
const Home = () => {
  return (
    <Container>
      <DesciptionDetail>
        <DescriptionH1>
          Hi, <HomeHandIcon src={HomeHiIcons} alt="Hello!" />
          <br />I am Min Woo <br /> Web developer
        </DescriptionH1>
        <DescriptionH2> Front-End Jr. Developr</DescriptionH2>
        <ButtonContact href="/contact">CONTACT</ButtonContact>
      </DesciptionDetail>
      <HomeImgeContainer>
        <HomeImge src={HomeProgrammingIcon} alt="HomeIcon" />
      </HomeImgeContainer>
    </Container>
  );
};

export { Home };
