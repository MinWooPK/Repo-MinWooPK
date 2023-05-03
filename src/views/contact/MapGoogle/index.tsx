import { ContainerMap, IframeMap, ImgVision } from "./style";
import Vision from "../../../assets/img/Vision.png";

export const MapGoogle = () => {
  return (
    <ContainerMap>
      <IframeMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2150769207637!2d-3.7035593999999996!3d40.426236200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228626ff91813%3A0xee2b775fc2bf3c6d!2sC.%20de%20la%20Palma%2C%2027%2C%2028004%20Madrid!5e0!3m2!1sen!2ses!4v1682857801333!5m2!1sen!2ses"
        width="100%"
        height="100%"
      />
      <ImgVision src={Vision} alt="Map" />
    </ContainerMap>
  );
};
