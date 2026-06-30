import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 650px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 16px;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 14px 16px;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 14px 16px;
  resize: vertical;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  color: white;
  transition: 0.3s;
  background: linear-gradient(225deg, #7b2ff7 0%, #f107a3 100%);

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`;

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSnackbar({
      open: true,
      message: "Message sent successfully! 🚀",
      severity: "success",
    });

    form.current.reset();
    setLoading(false);
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Get In Touch</Title>

        <Desc>
          Have a project in mind, a freelance opportunity, or a full-time role?
          Feel free to send me a message. I'll get back to you as soon as
          possible.
        </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Send Me a Message ✉️</ContactTitle>

          <ContactInput
            type="email"
            name="from_email"
            placeholder="Enter your email"
            required
          />

          <ContactInput
            type="text"
            name="from_name"
            placeholder="Enter your name"
            minLength={3}
            required
          />

          <ContactInput
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <ContactInputMessage
            rows={5}
            name="message"
            placeholder="Write your message here..."
            minLength={10}
            required
          />

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </ContactButton>
        </ContactForm>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() =>
            setSnackbar((prev) => ({
              ...prev,
              open: false,
            }))
          }
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            severity={snackbar.severity}
            variant="filled"
            onClose={() =>
              setSnackbar((prev) => ({
                ...prev,
                open: false,
              }))
            }
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
