// ContactForm.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography, Button, TextField } from "@mui/material";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v3wkelf", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{ padding: "2rem", backgroundColor: "white" }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        İletişim Formu
      </Typography>
      <TextField
        label="Adınız ve Soyadınız"
        name="user_name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="E-posta"
        name="user_email"
        variant="outlined"
        fullWidth
        type="email"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Mesajınız"
        name="message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#25D366",
          "&:hover": {
            backgroundColor: "#1ebe5d",
          },
        }}
      >
        Gönder
      </Button>
    </Box>
  );
};
