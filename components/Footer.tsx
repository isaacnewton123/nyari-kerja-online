'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: 6,
        pb: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid size={{ xs: 12, md: 5 }}>
              <Image
                src="/logo-nyarikerja.png"
                alt="NyariKerja"
                width={100}
                height={34}
                style={{ objectFit: 'contain' }}
              />
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, maxWidth: 320 }}>
              Platform pencarian lowongan kerja terpercaya di Indonesia. Temukan karir
              impianmu dari perusahaan-perusahaan terbaik.
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}
            >
              Menu
            </Typography>
            {[
              { label: 'Beranda', href: '/' },
              { label: 'Kategori', href: '/kategori' },
              { label: 'Tentang', href: '/tentang' },
            ].map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                variant="body2"
                sx={{
                  display: 'block',
                  mb: 1,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}
            >
              Kontak
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <EmailOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                info@nyarikerja.online
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <LanguageIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                nyarikerja.online
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Jakarta, Indonesia
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} NyariKerja. Hak cipta dilindungi.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            Dibuat dengan <FavoriteIcon sx={{ fontSize: 14, color: 'error.main' }} /> di Indonesia
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
