// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Information() {
  return (
    <Box component="section" py={6} my={6}>
      <Container>
        <Typography variant="h4" align="center" fontWeight="bold" color="text.primary" gutterBottom>
          ⚖️ Verilen Hizmetler
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={2}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center" mb={2}>
              <Typography color="primary" fontSize="2rem">
                🏠
              </Typography>
            </Box>
            <Typography align="center">Tapu Taşınmaz İşlemleri</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                ⚖️
              </Typography>
            </Box>
            <Typography align="center">Ceza Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                🏢
              </Typography>
            </Box>
            <Typography align="center">Şirketler Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                🏙️
              </Typography>
            </Box>
            <Typography align="center">Kentsel Dönüşüm Hukuku</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box textAlign="center" mb={2}>
              <Typography color="primary" fontSize="2rem">
                ⚖️
              </Typography>
            </Box>
            <Typography align="center">Miras Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                🚩
              </Typography>
            </Box>
            <Typography align="center">Vatandaşlık Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                🛒
              </Typography>
            </Box>
            <Typography align="center">Ticaret Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                💲
              </Typography>
            </Box>
            <Typography align="center">Tazminat Davaları</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box textAlign="center" mb={2}>
              <Typography color="primary" fontSize="2rem">
                💙
              </Typography>
            </Box>
            <Typography align="center">Aile Boşanma Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                🏛️
              </Typography>
            </Box>
            <Typography align="center">Vergi Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                🧑‍🤝‍🧑
              </Typography>
            </Box>
            <Typography align="center">İnşaat Hukuku</Typography>
            <Box textAlign="center" mt={2}>
              <Typography color="primary" fontSize="2rem">
                📄
              </Typography>
            </Box>
            <Typography align="center">Alacak Tahsilatı ve İcra İşlemleri</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;
