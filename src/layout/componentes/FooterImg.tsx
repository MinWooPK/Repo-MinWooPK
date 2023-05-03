import React from "react";
import { Icon, IconsFooter } from "./style";

interface FooterImgProps {
  url: string;
  imagenSrc: any;
  hoverSrc: any;
}

function FooterImg(props: FooterImgProps) {
  const [hovering, setHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <IconsFooter
      href={props.url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
    >
      <Icon>{!hovering ? props.imagenSrc : props.hoverSrc}</Icon>
    </IconsFooter>
  );
}

export default FooterImg;
