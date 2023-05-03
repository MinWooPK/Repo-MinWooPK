import { useState } from "react";
import {
  Button,
  ButtonContact,
  ButtonSection,
  ContactDetail,
  ContactTitle,
  DescriptionContainer,
  Form,
  FormContent,
  Input,
  InputContainer,
  InputFirstSection,
  InputOtherSection,
  InputText,
  Message,
} from "./style";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const response = await fetch("https://formspree.io/f/mlekzevp", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSending(false);
    if (response.ok) {
      setIsSent(true);
      setError("");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    } else {
      setIsSent(false);
      setError(
        "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde."
      );
    }
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const input = e.target;
    input.classList[input.value ? "add" : "remove"]("has-value");
    console.log("hello");
  };

  return (
    <FormContent>
      <DescriptionContainer>
        <ContactTitle>CONTACT ME </ContactTitle>
        <ContactDetail>
          Estoy interesado en trabajar para empresas, especialmente aquellas con
          proyectos ambiciosos o a largo plazo. Si tiuviere alguna solicitud o
          pregunta, no dudes en contactarme utilizando el formulario que aparece
          a continuación.
        </ContactDetail>
      </DescriptionContainer>
      <Form onSubmit={handleSubmit}>
        <InputFirstSection>
          <InputContainer>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onFocus={handleInputChange}
              onBlur={handleInputChange}
            />
            <label htmlFor="name">Nombre y Apellidos</label>
          </InputContainer>
          <InputContainer>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onBlur={handleInputChange}
            />
            <label htmlFor="email">Email</label>
          </InputContainer>
        </InputFirstSection>
        <InputOtherSection>
          <InputContainer>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              onBlur={handleInputChange}
            />
            <label htmlFor="name">Asunto</label>
          </InputContainer>
        </InputOtherSection>
        <InputOtherSection>
          <InputContainer>
            <InputText
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              onBlur={handleInputChange}
            />
            <label htmlFor="message">Mensaje</label>
          </InputContainer>
        </InputOtherSection>
        <ButtonSection>
          <ButtonContact type="submit">
            {isSending ? "Enviando..." : "Enviar"}
          </ButtonContact>
        </ButtonSection>
      </Form>

      {error && <Message>{error}</Message>}
      {showMessage && (
        <Message success>El mensaje fue enviado correctamente.</Message>
      )}
    </FormContent>
  );
};

export { ContactForm };
