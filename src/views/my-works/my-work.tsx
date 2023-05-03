import { Card } from "./componentes/card";
import {
  ArrowButton,
  Ball,
  Blink,
  ButtonContainer,
  ContentContainer,
  Eye,
  HeaderContainer,
  Shut,
  TitleWork,
  WorksContainer,
} from "./styles";
import ETpay from "../../assets/img/ETpay.png";
import SnapShot from "../../assets/img/SnapShot.png";
import Pokemon from "../../assets/img/Pokemon.png";
import ToDo from "../../assets/img/ToDo.png";
import Calculadora from "../../assets/img/Calculadora.png";
import Movie from "../../assets/img/Movie.png";
import PassWord from "../../assets/img/PassWord.png";
import { useEffect, useState } from "react";

const worksData = [
  {
    title: "ETPAY",
    info: "En este proyecto, se hizo la sección de Tarifa y Planes, y la implementación de los cambios , según la región del cliente y de su tarifa actual, así como las nuevas secciones de la personalización a nivel de usuario.",
    href: "https://www.etpayment.com/",
    img: ETpay,
  },
  {
    title: "SNAP SHOT",
    info: "Buscador de imagenes que llama a una API de imágenes en la que el usuario ingresa una palabra clave o término de busqueda en el sitio web, la Api devuelve una lista de imágenes que conciden con los criterios de búsqueda. ",
    href: "https://snap-shot-minwoopk.netlify.app/",
    img: SnapShot,
  },
  {
    title: "TODO-LIST",
    info: "Herramienta de organización personal de tareas, en la que se puede añadir tareas o eliminarlas, mediante la creación o eliminación de estas, a partir de las diferentes funcionalidades que las contiene el sitio web.",
    href: "https://todolist-minwoopk.netlify.app/",
    img: ToDo,
  },
  {
    title: "MOVIE-API",
    info: "Sitio web de buscador de películas mediante una llamada a la API, que nos da una breve descripción de la pelicula y su puntuación por parte de los diferentes usuarios.",
    href: "https://movie-api-minwoo.netlify.app/",
    img: Movie,
  },
  {
    title: "POKEMON-API",
    info: "Generador de Pokemons, en la que nos indica las caracteristicas  físicas y los Stats de los difrentes Pokmenos, a partir del llamamiento a la API.",
    href: "https://pokemon-app-minwoopk.netlify.app",
    img: Pokemon,
  },

  {
    title: "PASSWORD-GENERATOR",
    info: "Herramienta que produce codigos aleatorios, en la que se se le puede meter diferntes requisitos tanto como el de la longitud de la contraseña, la inclusión de numeros, símbolos, y de letras en mayúsculas o minúsculsas.",
    href: "https://password-generator-minwoopk.netlify.app",
    img: PassWord,
  },

  {
    title: "CALCULADORA",
    info: "Tool que emula una calculadora, en la que se puede sumar, restar, dividir o multiplicar.",
    href: "https://calculadora-minwoopk.netlify.app",
    img: Calculadora,
  },
];

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - itemsPerPage);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + itemsPerPage);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1080) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1600) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WorksContainer>
      <HeaderContainer>
        <TitleWork>My Works</TitleWork>
        <Eye>
          <Shut>
            <Blink />
          </Shut>
          <Ball />
        </Eye>
      </HeaderContainer>
      <ButtonContainer>
        <ArrowButton disabled={currentIndex === 0} onClick={handlePrevClick}>
          {"<"}
        </ArrowButton>
        <ContentContainer>
          {worksData
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((work, index) => (
              <Card
                key={index}
                Title={work.title}
                Info={work.info}
                Href={work.href}
                Img={work.img}
              />
            ))}
        </ContentContainer>

        <ArrowButton
          disabled={currentIndex + itemsPerPage >= worksData.length}
          onClick={handleNextClick}
        >
          {">"}
        </ArrowButton>
      </ButtonContainer>
    </WorksContainer>
  );
};
export { MyWork };
