import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";

function PrivacyPolicy() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Button
        variant="outlined"
        onClick={goHome}
        sx={{
          marginBottom: "1rem",
          color: "#333", // Dark text color for visibility
          borderColor: "#333", // Border color for contrast
          "&:hover": {
            borderColor: "blue",
            backgroundColor: "blue",
            color: "white",
          },
        }}
      >
        Anasayfaya Dön
      </Button>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Gizlilik Politikası
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Avukat Hukuk Bürosu</strong> olarak, kullanıcılarımızın gizliliğine büyük önem
        veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde kişisel bilgilerinizin
        nasıl toplandığı, kullanıldığı, saklandığı ve paylaşıldığı hakkında bilgi verir.
      </Typography>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          1. Toplanan Bilgiler
        </Typography>
        <Typography variant="body1" paragraph>
          Web sitemizi ziyaret ettiğinizde, aşağıdaki bilgileri toplayabiliriz:
          <ul>
            <li>Kişisel Bilgiler: Adınız, soyadınız, e-posta adresiniz, telefon numaranız gibi.</li>
            <li>
              Tarayıcı Bilgileri: IP adresiniz, tarayıcı türünüz, kullandığınız cihazın türü gibi.
            </li>
            <li>
              Çerezler: Web sitemizde gezinmenizi analiz etmek ve size daha iyi hizmet vermek için
              çerezler kullanıyoruz.
            </li>
          </ul>
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          2. Bilgilerin Kullanımı
        </Typography>
        <Typography variant="body1" paragraph>
          Toplanan bilgileri aşağıdaki amaçlarla kullanabiliriz:
          <ul>
            <li>İletişim: Sizinle iletişime geçmek ve size destek sağlamak.</li>
            <li>İyileştirme: Web sitemizi kullanıcı deneyiminize göre iyileştirmek.</li>
            <li>
              Pazarlama: Size özel teklifler ve duyurular göndermek (yalnızca izin verdiğinizde).
            </li>
          </ul>
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          3. Çerezler (Cookies)
        </Typography>
        <Typography variant="body1" paragraph>
          Çerezler, web sitemizin kullanıcı deneyimini iyileştirmek amacıyla kullanılan küçük veri
          dosyalarıdır. Çerezler hakkında daha fazla bilgi edinmek ve nasıl yönetileceği hakkında
          bilgi almak için lütfen Çerez Politikası sayfamızı inceleyin.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          4. Bilgilerin Paylaşılması
        </Typography>
        <Typography variant="body1" paragraph>
          Kişisel bilgilerinizi üçüncü şahıslarla paylaşmayız, ancak yasal gereklilikler
          doğrultusunda, yetkili mercilere bilgi sağlamak zorunda kalabiliriz.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          5. Veri Güvenliği
        </Typography>
        <Typography variant="body1" paragraph>
          Kişisel bilgilerinizi korumak için gerekli güvenlik önlemlerini almaktayız. Ancak,
          internet üzerinden yapılan veri iletimlerinin tamamen güvenli olduğunu garanti edemeyiz.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          6. Veri Saklama
        </Typography>
        <Typography variant="body1" paragraph>
          Kişisel bilgilerinizi yalnızca yasal gereklilikler ve iş ihtiyaçlarımız doğrultusunda
          saklarız. Verilerinizi, amacına uygun şekilde kullanabileceğimiz sürece saklarız.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          7. Haklarınız
        </Typography>
        <Typography variant="body1" paragraph>
          Kişisel bilgilerinizi erişme, düzeltme, silme ve verilerinizi taşınabilir formatta alma
          hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6" fontWeight="bold" paragraph>
          8. Gizlilik Politikası Değişiklikleri
        </Typography>
        <Typography variant="body1" paragraph>
          Bu Gizlilik Politikası zaman zaman güncellenebilir. Herhangi bir değişiklik olması
          durumunda, güncel politika web sitemizde yayımlanacaktır.
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary">
          İletişim: <br />
          E-posta: danismanlik.turkiyeavukat@gmail.com
          <br />
          Telefon: (+90) 530 570 94 40
        </Typography>
      </Box>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </Container>
  );
}

export default PrivacyPolicy;
