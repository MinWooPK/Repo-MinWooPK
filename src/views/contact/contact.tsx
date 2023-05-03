import { MapGoogle } from "./MapGoogle";
import { ContactForm } from "./contact-form";
import { ContactContainer } from "./styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm />
      <MapGoogle />
    </ContactContainer>
  );
};

export { Contact };
