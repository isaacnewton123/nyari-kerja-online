import { Container, Typography, Box, Paper, Breadcrumbs, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const metadata = {
  title: "Kebijakan Privasi - NyariKerja.online",
  description: "Kebijakan Privasi dan Pengumpulan Data di NyariKerja.online",
};

export default function KebijakanPrivasiPage() {
  return (
    <Box sx={{ py: 6, bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 4 }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 500 }}>
            Kebijakan Privasi
          </Typography>
        </Breadcrumbs>

        <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800, mb: 4 }}>
            Kebijakan Privasi
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Selamat datang di <strong>NyariKerja.online</strong>. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang mungkin Anda berikan saat menggunakan layanan kami.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            1. Pengumpulan Informasi
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Kami <strong>tidak meminta atau menyimpan data pribadi sensitif</strong> seperti KTP, nomor rekening, atau dokumen rahasia lainnya di server kami. Sistem kami bertindak sebagai perantara yang menyediakan informasi (Job Aggregator). Segala bentuk pendaftaran atau pengiriman lamaran (CV) dilakukan secara langsung di platform pihak ketiga atau ke email resmi perusahaan perekrut yang tertera pada lowongan.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            2. Keamanan Data
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Kami selalu berupaya menyediakan lingkungan yang aman bagi pengguna. Namun, perlu diingat bahwa kami tidak memiliki kendali atas kebijakan privasi dari website pihak ketiga atau platform perusahaan perekrut. Pastikan Anda berhati-hati saat mengirimkan dokumen pribadi melalui internet.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            3. Analitik dan Cookies
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Kami mungkin menggunakan teknologi pelacakan anonim (seperti Google Analytics) untuk memahami statistik lalu lintas website agar kami dapat memberikan pengalaman yang lebih baik. Data yang direkam bersifat agregat dan tidak mengidentifikasi Anda secara pribadi.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            4. Perubahan Kebijakan
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Kebijakan privasi ini dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya, sesuai dengan perkembangan layanan kami. Dengan tetap mengakses website kami, Anda menyetujui versi terbaru dari kebijakan privasi ini.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
