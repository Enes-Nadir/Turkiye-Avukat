import React from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material"; // Importing missing components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/ContactForm.jpg";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("service_v3wkelf", "template_xaplh7a", e.target, {
      publicKey: "1JD0M_--MlSS2Jryw",
    })
    .then(() => {
      alert("Mesajınız başarıyla gönderildi!");
      e.target.reset(); // Clear form
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    });
};

function Contact() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              {/* LEFT SIDE - Contact Info */}
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h4" color="white" mb={1}>
                      İletişim Bilgileri
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                      Formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçecektir.
                    </MKTypography>
                    <MKBox mb={1}>
                      <MKTypography variant="body2" color="white">
                        (+90) 530 570 94 40
                      </MKTypography>
                      <MKTypography variant="body2" color="white">
                        avukat@hukukofisi.com
                      </MKTypography>
                      <MKTypography variant="body2" color="white">
                        İstanbul, Türkiye
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>

              {/* RIGHT SIDE - Contact Form */}
              <Grid item xs={12} lg={7}>
                <MKBox
                  component="form"
                  p={2}
                  method="post"
                  onSubmit={sendEmail} // Add emailjs sendEmail handler
                >
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h3" mb={1}>
                      Bize Ulaşın
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Size nasıl yardımcı olabiliriz?
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          label="Adınız Soyadınız"
                          name="user_name"
                          variant="outlined"
                          fullWidth
                          required
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="E-posta veya Whatsapp numarası"
                          name="user_email"
                          variant="outlined"
                          fullWidth
                          required
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl variant="standard" fullWidth required>
                          <InputLabel id="service-label">Hizmet Seçin</InputLabel>
                          <Select labelId="service-label" name="service" defaultValue="">
                            <MenuItem value="Tapu Taşınmaz İşlemleri">
                              Tapu Taşınmaz İşlemleri
                            </MenuItem>
                            <MenuItem value="Ceza Hukuku">Ceza Hukuku</MenuItem>
                            <MenuItem value="Şirketler Hukuku">Şirketler Hukuku</MenuItem>
                            <MenuItem value="Kentsel Dönüşüm Hukuku">
                              Kentsel Dönüşüm Hukuku
                            </MenuItem>
                            <MenuItem value="Miras Hukuku">Miras Hukuku</MenuItem>
                            <MenuItem value="Vatandaşlık Hukuku">Vatandaşlık Hukuku</MenuItem>
                            <MenuItem value="Ticaret Hukuku">Ticaret Hukuku</MenuItem>
                            <MenuItem value="Tazminat Davaları">Tazminat Davaları</MenuItem>
                            <MenuItem value="Aile Boşanma Hukuku">Aile Boşanma Hukuku</MenuItem>
                            <MenuItem value="Vergi Hukuku">Vergi Hukuku</MenuItem>
                            <MenuItem value="İnşaat Hukuku">İnşaat Hukuku</MenuItem>
                            <MenuItem value="Çek Senet İcra">Çek Senet İcra</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Mesajınız"
                          name="message"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={4}
                          required
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} textAlign="right">
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
                          MESAJ GÖNDER
                        </Button>
                      </Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
