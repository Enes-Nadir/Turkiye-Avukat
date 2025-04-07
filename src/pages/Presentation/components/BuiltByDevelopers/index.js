// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Image import
import bgImage from "assets/images/Banner2.jpg"; // check if this exists

function BuiltByDevelopers() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <MKTypography variant="h6" color="white" mb={1}>
          🚀 Avrupa’da Hukuki Destek
        </MKTypography>
        <MKTypography variant="h3" fontWeight="bold" color="white" mb={2}>
          Profesyonel Hukuki Danışmanlık
        </MKTypography>
        <MKTypography variant="body1" color="white" sx={{ opacity: 0.9 }}>
          Avrupa&apos;nın birçok ülkesinde Türk vatandaşlarına özel hukuki destek sağlıyoruz.
        </MKTypography>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
