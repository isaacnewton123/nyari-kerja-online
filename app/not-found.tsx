import Link from "next/link";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan | NyariKerja.online",
  description: "Maaf, halaman atau lowongan yang Anda cari tidak dapat ditemukan atau telah dihapus.",
};

export default function NotFound() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              p: 3,
              borderRadius: "50%",
              bgcolor: "primary.50",
              color: "primary.main",
              mb: 3,
            }}
          >
            <SearchOffIcon sx={{ fontSize: 64 }} />
          </Box>
          
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "3rem", md: "4rem" },
              background: "linear-gradient(45deg, #2563EB, #7C3AED)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            404
          </Typography>
          
          <Typography variant="h5" sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
            Oops! Halaman Tidak Ditemukan
          </Typography>
          
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Maaf, halaman atau lowongan pekerjaan yang Anda cari mungkin telah dihapus, kedaluwarsa, atau URL yang Anda masukkan salah.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ArrowBackIcon />}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.39)",
                  width: "100%",
                }}
              >
                Kembali ke Beranda
              </Button>
            </Link>
            
            <Link href="/lowongan" passHref style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WorkOutlinedIcon />}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  width: "100%",
                }}
              >
                Lihat Lowongan
              </Button>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
