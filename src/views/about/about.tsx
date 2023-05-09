import {
  BoxDetail,
  BoxTitleGamma,
  BoxTitleUsal,
  Button,
  Container,
  ContainerStudy,
  ContentBoxDetail,
  DesciptionDetail,
  ImgDetail,
  ImgSection,
  IntroductionDetail,
  IntroductionDetailP,
  IntroductionImg,
  IntroductionSection,
  LeftBox,
  Navigation,
  RightBox,
  SubtituleSection,
  TitleSection,
} from "./styles";
import MinWoo from "../../assets/img/MinWooPK.png";
import image1 from "../../assets/img/cafe.png";
import image2 from "../../assets/img/Friend.png";
import image3 from "../../assets/img/MinWooPaleontologia.png";
import image4 from "../../assets/img/Study2.png";
import Usal from "../../assets/img/Salamanca.jpg";
import Gamma from "../../assets/img/Gamma.png";

import { ButtonContact } from "../home/style";
import { useEffect, useRef, useState } from "react";
import React from "react";

const CV =
  "https://drive.google.com/file/d/1lMhIVI1fEHbNstulgDmX9qG3fjBrVBi8/view?usp=share_link";

const images = [MinWoo, image1, image2, image3, image4];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLeftBoxVisible, setIsLeftBoxVisible] = useState(false);
  const [isRightBoxVisible, setIsRightBoxVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollUpThreshold = 100;

      if (top < windowHeight * 0.5 && top + height > windowHeight * 0.33) {
        setIsLeftBoxVisible(true);
      } else {
        setIsLeftBoxVisible(false);
      }

      if (top < windowHeight * 0.67) {
        setIsRightBoxVisible(true);
      } else {
        setIsRightBoxVisible(false);
      }

      if (
        currentScrollY < prevScrollY &&
        prevScrollY - currentScrollY > scrollUpThreshold
      ) {
        setIsLeftBoxVisible(false);
        setIsRightBoxVisible(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const handleNavigationClick = (index: number) => {
    setCurrentImage(index);
  };
  return (
    <Container>
      <DesciptionDetail>
        <TitleSection>ABOUT ME</TitleSection>
        <SubtituleSection> My Introduction</SubtituleSection>
      </DesciptionDetail>
      <IntroductionSection>
        <ImgSection>
          <IntroductionImg src={images[currentImage]} />
          <Navigation>
            {images.map((_, index) => (
              <Button
                key={index}
                active={currentImage === index}
                onClick={() => handleNavigationClick(index)}
              />
            ))}
          </Navigation>
        </ImgSection>
        <IntroductionDetail>
          <IntroductionDetailP>
            Como desarrollador Front-End Junior, mi pasión es crear interfaces
            de usuario que combinen atractivo visual y funcionalidad.
          </IntroductionDetailP>
          <IntroductionDetailP>
            Me apasiona la resolución de problemas y siempre busco maneras
            innovadoras de hacerlo.
          </IntroductionDetailP>
          <IntroductionDetailP>
            Soy una persona curiosa, y disfruto trabajar en equipo y aprender de
            otros desarrolladores más experimentados.
          </IntroductionDetailP>
          <ButtonContact href={CV} target="_blank">
            Downdload CV
          </ButtonContact>
        </IntroductionDetail>
      </IntroductionSection>
      <DesciptionDetail ref={containerRef}>
        <SubtituleSection> Studies</SubtituleSection>
        <ContainerStudy>
          <LeftBox isVisible={isLeftBoxVisible}>
            <BoxTitleUsal>Universidad de Salamanca</BoxTitleUsal>
            <SubtituleSection>Grado en Biología</SubtituleSection>
            <ContentBoxDetail>
              <BoxDetail>
                Estudio centrado en los seres vivos y su funcionamiento , así
                como en la comprensión de los procesos biológicos a nivel
                molecular, celular, organismal y ecosistémico.
                <br />
                Ademas de habilidades prácticas en laboratorios y técnicas de
                investigación, como la recopilació y análisis de datos, la
                manipulación de muestras biológicas y el uso de equipo
                cientifico avanzado.
              </BoxDetail>
              <ImgDetail src={Usal} />
            </ContentBoxDetail>
          </LeftBox>
          <RightBox isVisible={isRightBoxVisible}>
            <BoxTitleGamma>GammaTech</BoxTitleGamma>
            <SubtituleSection>Desarrollo Web Front-End</SubtituleSection>
            <ContentBoxDetail>
              <BoxDetail>
                Enseñanza focalizada en aprender habilidades y conocimientos
                especificos para el desarrollo de interfaces de usauraio.
                <br />
                Aprendemos a trabajar en equipo para resolver problemas y
                mejorar la eficiencia, y aprendemos a colaborar con otros
                desarrolladores.
                <br />Y sobre todo habilidades de investigación, como la
                recopilación y análisis de datos, la comprensión de las
                necesidades del usuario.
              </BoxDetail>
              <ImgDetail src={Gamma} />
            </ContentBoxDetail>
          </RightBox>
        </ContainerStudy>
      </DesciptionDetail>
    </Container>
  );
};

export { About };
