import IconX from "../../assets/icons/IconX";
import {
  CloseModal,
  DetailModal,
  HrefModal,
  IconContainer,
  ImgContainer,
  ImgModal,
  InfoModal,
  ModalContainer,
  ModalWrap,
  TitleModal,
} from "./styles";

interface ModalProps {
  onClose: () => void;
  Title: string;
  Info: string;
  Href: string;
  Img: any;
}

const Modal = ({ onClose, Title, Info, Href, Img }: ModalProps) => {
  return (
    <ModalContainer>
      <CloseModal>
        <IconContainer onClick={onClose}>
          <IconX />
        </IconContainer>
      </CloseModal>
      <ModalWrap>
        <ImgContainer>
          <ImgModal src={Img} />
        </ImgContainer>

        <DetailModal>
          <TitleModal> {Title}</TitleModal>
          <InfoModal> {Info}</InfoModal>
          <HrefModal href={Href} target="_blank">
            OPEN
          </HrefModal>
        </DetailModal>
      </ModalWrap>
    </ModalContainer>
  );
};

export { Modal };
