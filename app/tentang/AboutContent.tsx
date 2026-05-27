'use client';

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  alpha,
} from '@mui/material';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';

const features = [
  {
    icon: <WorkOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Lowongan Terkurasi',
    description:
      'Setiap lowongan yang kami tampilkan sudah diverifikasi untuk memastikan keaslian dan relevansi informasi.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 28 }} />,
    title: 'Akses Cepat',
    description:
      'Platform kami dirancang untuk memberikan pengalaman pencarian yang cepat dan efisien tanpa hambatan.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 28 }} />,
    title: 'Aman & Terpercaya',
    description:
      'Keamanan data pengguna adalah prioritas utama kami. Informasi pribadi Anda selalu terlindungi.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 28 }} />,
    title: 'Komunitas',
    description:
      'Bergabung dengan jutaan pencari kerja di Indonesia yang sudah menemukan karir impian mereka.',
  },
];

export default function AboutContent() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        {/* Hero */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Tentang NyariKerja
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500 }}
          >
            Membantu jutaan orang Indonesia menemukan karir yang tepat dan bermakna
          </Typography>
        </Box>

        {/* Mission */}
        <Paper
          sx={{
            p: 4,
            mb: 5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Misi Kami
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            NyariKerja hadir sebagai jembatan antara pencari kerja dan perusahaan-perusahaan
            terbaik di Indonesia. Kami percaya bahwa setiap orang berhak mendapatkan akses
            yang sama terhadap peluang karir yang berkualitas.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            Platform kami dirancang untuk menyederhanakan proses pencarian kerja, mulai dari
            menemukan lowongan yang sesuai hingga proses lamaran. Dengan teknologi modern dan
            pendekatan yang berpusat pada pengguna, kami berkomitmen untuk memberikan pengalaman
            terbaik dalam perjalanan karir Anda.
          </Typography>
        </Paper>

        {/* Features */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Mengapa NyariKerja?
        </Typography>
        <Grid container spacing={2.5} sx={{ mb: 5 }}>
          {features.map((feature) => (
            <Grid size={{ xs: 12, sm: 6 }} key={feature.title}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    backgroundColor: alpha('#6C63FF', 0.08),
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Paper
          sx={{
            p: 4,
            textAlign: 'center',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Siap Memulai Perjalanan Karirmu?
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}
          >
            Jelajahi ribuan lowongan dari perusahaan-perusahaan terbaik di Indonesia dan
            temukan posisi yang sesuai dengan impianmu.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
