import { Container, Typography, Box, Paper, Breadcrumbs, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const metadata = {
  title: "Syarat & Ketentuan - NyariKerja.online",
  description: "Syarat dan Ketentuan Layanan NyariKerja.online",
};

export default function SyaratKetentuanPage() {
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
            Syarat & Ketentuan
          </Typography>
        </Breadcrumbs>

        <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800, mb: 4 }}>
            Syarat & Ketentuan Layanan
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Syarat dan ketentuan ini mengatur penggunaan website <strong>NyariKerja.online</strong>. Dengan mengakses dan menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui semua persyaratan di bawah ini.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            1. Sifat Layanan (Disclaimer)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>NyariKerja.online</strong> adalah sebuah platform agregator lowongan pekerjaan (Job Portal). Kami menyajikan informasi lowongan yang dikumpulkan dari berbagai sumber publik di internet. Kami <strong>bukan</strong> agen penyalur tenaga kerja (Outsourcing) dan kami tidak terafiliasi dengan perusahaan yang memposting lowongan kerja tersebut, kecuali dinyatakan lain.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            2. Peringatan Penipuan Rekrutmen
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Kami <strong>SANGAT MELARANG</strong> dan tidak pernah meminta imbalan finansial dalam bentuk apapun kepada pencari kerja. Perlu diketahui bahwa proses rekrutmen yang sah dan resmi <strong>TIDAK PERNAH memungut biaya apapun</strong> (termasuk biaya pendaftaran, biaya seragam, tiket travel, dsb). Jika Anda mendapati informasi lowongan di situs kami yang terindikasi penipuan, mohon kebijaksanaan Anda untuk mengabaikannya.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Segala kerugian materi maupun non-materi yang timbul akibat transaksi di luar wewenang platform kami sepenuhnya adalah tanggung jawab pengguna.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            3. Verifikasi Data
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Meski kami berupaya menyaring informasi lowongan yang ditayangkan, pengguna tetap diwajibkan melakukan <strong>pemeriksaan ulang (cross-check)</strong> terkait keabsahan dan keaslian informasi rekrutmen dari perusahaan yang dilamar.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            4. Tautan ke Pihak Ketiga
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Website kami mungkin memuat tautan yang mengarahkan Anda ke situs pihak ketiga (misalnya formulir lamaran perusahaan). NyariKerja.online tidak bertanggung jawab atas isi konten, kebijakan privasi, maupun keamanan dari website pihak ketiga tersebut.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            5. Perubahan Syarat & Ketentuan
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Syarat dan ketentuan ini dapat diubah atau diperbarui kapan saja tanpa pemberitahuan sebelumnya. Pengguna diharapkan memeriksa halaman ini secara berkala.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
