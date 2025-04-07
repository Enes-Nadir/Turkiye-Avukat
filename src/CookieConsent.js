import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // To link to the Privacy Policy page

function CookieConsent() {
  const [isAccepted, setIsAccepted] = useState(false);

  // Check if the user has already accepted cookies
  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (accepted) {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
  };

  return !isAccepted ? (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "grey",
        color: "black",
        padding: "1rem",
        textAlign: "center",
        zIndex: 9999,
      }}
    >
      <Typography variant="body2" color="white" backgroundColor="white">
        Web sitemizi deneyimlemek için çerezleri kullanıyoruz. Bu siteyi kullanmaya devam ederek{" "}
        <Link to="/Gizlilik-Politikası" style={{ color: "white", textDecoration: "underline" }}>
          Gizlilik Politikamıza
        </Link>{" "}
        onay verdiğinizi kabul ediyorsunuz.
      </Typography>
      <Button
        onClick={handleAccept}
        variant="contained"
        sx={{
          backgroundColor: "#1B56FD", // WhatsApp-like color
          color: "white", // White text for visibility
          marginTop: "0.5rem",
          "&:hover": { backgroundColor: "blue" },
        }}
      >
        Çerezleri Kabul Et
      </Button>
    </Box>
  ) : null;
}

export default CookieConsent;
