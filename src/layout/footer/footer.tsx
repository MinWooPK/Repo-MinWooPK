import { Github } from "../../assets/icons/Github";
import { GithubHover } from "../../assets/icons/GithubHover";
import { Instagram } from "../../assets/icons/Instagram";
import { InstagramHover } from "../../assets/icons/InstagramHover";
import { Linkedin } from "../../assets/icons/Linkedin";
import { LinkedinHover } from "../../assets/icons/LinkedinHover";

import FooterImg from "../componentes/FooterImg";
import { FooterSection } from "./styles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterImg
        url="https://github.com/MinWooPK?tab=repositories"
        imagenSrc={<Github />}
        hoverSrc={<GithubHover />}
      />
      <FooterImg
        url="https://www.instagram.com/minwoopk/"
        imagenSrc={<Instagram />}
        hoverSrc={<InstagramHover />}
      />
      <FooterImg
        url="https://www.linkedin.com/in/min-woo-park-kim-786b42201/"
        imagenSrc={<Linkedin />}
        hoverSrc={<LinkedinHover />}
      />
    </FooterSection>
  );
};

export { Footer };
