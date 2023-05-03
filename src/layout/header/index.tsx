import { Link, useLocation } from "react-router-dom";
import { HomeIcon, HomeIconInactive } from "../../assets/icons/HomeIcon";
import { HamburgerContainer, HamburgerSpan, HeaderSection } from "./style";
import { UserIcon, UserIconInactive } from "../../assets/icons/User";
import { SkillIcon, SkillIconInactive } from "../../assets/icons/MessageCode";
import { MyWorksIcon, MyWorksIconInactive } from "../../assets/icons/eye";
import {
  ContactIcon,
  ContactIconInactive,
} from "../../assets/icons/ContactIcon";
import { useEffect, useState } from "react";
import { HeaderIcon } from "./componentes/HeaderIcons";
import {
  BurgerDetail,
  CloseBurger,
  ModalBurger,
} from "../../componentes/modal/styles";
import IconX from "../../assets/icons/IconX";

interface Icon {
  text: string;
  icon: any;
  link: string;
  inactiveIcon?: any;
  showInactiveIcon?: boolean;
}

const icons: Icon[] = [
  {
    text: "Inicio",
    icon: <UserIcon />,
    inactiveIcon: <UserIconInactive />,
    link: "/",
  },
  {
    text: "About",
    icon: <HomeIcon />,
    inactiveIcon: <HomeIconInactive />,
    link: "/about",
  },
  {
    text: "My Works",
    icon: <MyWorksIcon />,
    inactiveIcon: <MyWorksIconInactive />,
    link: "/my-work",
  },
  {
    text: "Skill",
    icon: <SkillIcon />,
    inactiveIcon: <SkillIconInactive />,
    link: "/skill",
  },
  {
    text: "Contact",
    icon: <ContactIcon />,
    inactiveIcon: <ContactIconInactive />,
    link: "/contact",
  },
];
const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setShowModal(false);
    }, 800);
  };
  useEffect(() => {
    const path = location.pathname;
    const index = icons.findIndex((icon) => icon.link === path);
    setActiveIndex(index);
  }, [location]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderSection>
      {isMobile ? (
        <HamburgerContainer onClick={handleClick}>
          <HamburgerSpan />
          <HamburgerSpan />
          <HamburgerSpan />
        </HamburgerContainer>
      ) : (
        icons.map((icon, index) => (
          <Link key={index} to={icon.link}>
            <HeaderIcon
              key={index}
              text={icon.text}
              activeIcon={activeIndex === index ? icon.icon : icon.inactiveIcon}
              onClick={() => setActiveIndex(index)}
              isActive={activeIndex === index}
            />
          </Link>
        ))
      )}
      {showModal && (
        <ModalBurger showModal={showModal} isAnimating={isAnimating}>
          <CloseBurger onClick={handleCloseModal}>
            <IconX />
          </CloseBurger>
          <BurgerDetail>
            {icons.map((icon, index) => (
              <Link key={index} to={icon.link}>
                <HeaderIcon
                  key={index}
                  text={icon.text}
                  activeIcon={
                    activeIndex === index ? icon.icon : icon.inactiveIcon
                  }
                  onClick={() => setActiveIndex(index)}
                  isActive={activeIndex === index}
                />
              </Link>
            ))}
          </BurgerDetail>
        </ModalBurger>
      )}
    </HeaderSection>
  );
};

export { Header };
