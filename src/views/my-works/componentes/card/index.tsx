import { useState } from "react";
import {
  CardsContainer,
  Details,
  FooterCard,
  ImgContainer,
  ImgWork,
  SubTitleCard,
  TitleCard,
} from "./style";
import { Modal } from "../../../../componentes/modal";

interface CardProps {
  Title: string;
  Info: string;
  Href: string;
  Img: any;
}

const Card = ({ Title, Info, Href, Img }: CardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardsContainer onClick={handleClick}>
        <ImgContainer>
          <ImgWork src={Img} />
          <Details>Details</Details>
        </ImgContainer>

        <FooterCard>
          <TitleCard>{Title}</TitleCard>
          <SubTitleCard>Front-End</SubTitleCard>
        </FooterCard>
      </CardsContainer>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          Title={Title}
          Info={Info}
          Href={Href}
          Img={Img}
        />
      )}
    </>
  );
};

export { Card };
