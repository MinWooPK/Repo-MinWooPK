import { useState } from "react";
import { IconContainer } from "./styles";
import { IconText } from "./styles";

interface HeaderIconProps {
  text: string;
  activeIcon: any;
  onClick: () => void;
  isActive: boolean;
}

export const HeaderIcon = (props: HeaderIconProps) => {
  const { text, activeIcon, onClick } = props;
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    onClick();
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <IconContainer
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover ? <IconText>{text}</IconText> : activeIcon}
    </IconContainer>
  );
};
