// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";
import Contact from "./sections/Contact";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import { Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/Banner.jpg";

function Presentation() {
  return (
    <>
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography
              variant="h2"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Türkiye Avukat
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              📍 Avrupa&apos;da Yaşayan Türkler İçin Hukuki Destek
            </MKTypography>

            {/* Phone Call CTA */}
            <Box mt={4}>
              <Typography variant="body1" fontWeight="bold" color="#FFFFFF" mb={1}>
                Bizi Arayın:
              </Typography>
              <Typography
                variant="h6"
                color="#FFFFFF"
                component="a"
                href="tel:+905305709440"
                sx={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                +90 530 570 94 40
              </Typography>
            </Box>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* Servislerimiz */}
        <Information />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Contact />
        <Box py={6} bgcolor="white">
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="bold" color="text.primary">
                WhatsApp ile İletişime Geçin!{" "}
                <WhatsAppIcon sx={{ color: "#25D366", verticalAlign: "middle" }} />
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Hızlı ve kolay bir şekilde WhatsApp üzerinden bize ulaşabilirsiniz.
              </Typography>
            </Box>

            <Button
              variant="contained"
              style={{ color: "white" }}
              sx={{
                backgroundColor: "#25D366",
                fontWeight: "bold",
                color: "white", // text color
                fontSize: "1rem", // increase text size
                padding: "10px 24px", // increase padding (makes it visually bigger)
                "&:hover": {
                  backgroundColor: "#1ebe5d",
                },
              }}
              href="https://wa.me/905305709440" // use the actual Turkish phone number
              target="_blank"
            >
              WHATSAPP İLE İLETİŞİM
            </Button>
          </Container>
        </Box>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
