import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";
import brandImage from "assets/images/TürkiyeAvukat.png"; // Import the image

function DefaultFooter() {
  const brand = {
    name: "Türkiye Avukat",
    route: "/",
    image: brandImage, // Correct image path
  };

  const socials = [
    {
      icon: <i className="fab fa-facebook" />,
      link: "https://www.facebook.com", // Your social media links
    },
    {
      icon: <i className="fab fa-twitter" />,
      link: "https://www.twitter.com",
    },
    // Add more social icons and links here if needed
  ];

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#f5f5f5", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ ml: "auto", mb: 3, alignContent: "center", alignItems: "center" }}
          >
            <Box style={{ alignContent: "center", alignItems: "center" }}>
              <Link to={brand.route}>
                <Box component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
              </Link>
              <Typography variant="h6">{brand.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <Typography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Avukat Hukuk Bürosu
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                <strong>Avukat Hukuk Bürosu</strong>, müvekkillerine kaliteli ve güvenilir hukuki
                danışmanlık hizmeti sunan, deneyimli bir ekibe sahip bir hukuk bürosudur.
                Avrupa&apos;da Türk vatandaşlarına yönelik hukuki destek sağlamak amacıyla faaliyet
                göstermektedir.
              </p>
            </Typography>
          </Grid>

          <Grid item xs={12} md={3} sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              İletişim
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                <Link
                  to="https://wa.me/905305709440"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <strong>WhatsApp</strong>
                </Link>
                : (+90) 530 570 94 40
              </p>
              <p>
                <a
                  href="mailto:avukat@hukukofisi.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <strong>E-posta</strong>
                </a>
                : avukat@hukukofisi.com
              </p>
            </Typography>
          </Grid>
        </Grid>
        <MKTypography
          variant="caption"
          color="text.secondary"
          textAlign="center"
          mt={6}
          display="block"
        >
          Tüm hakları saklıdır. © {new Date().getFullYear()} Avukat Hukuk Bürosu.{" "}
          <Link to="/Gizlilik-Politikası" style={{ color: "inherit", textDecoration: "underline" }}>
            Gizlilik Politikası
          </Link>
        </MKTypography>
      </Container>
    </Box>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.shape({
    brand: PropTypes.shape({
      route: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DefaultFooter;
