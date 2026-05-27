'use client';

import { Container, Typography, Grid, Box, Chip, alpha, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import JobCard from '@/components/JobCard';
import { JobPost, Category } from '@/lib/types';

interface HomeContentProps {
  allPosts: JobPost[];
  latestPosts: JobPost[];
  categories: Category[];
}

export default function HomeContent({ allPosts, latestPosts, categories }: HomeContentProps) {
  return (
    <>
      {/* Categories */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}
          >
            Jelajahi Kategori
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}
          >
            Temukan lowongan sesuai bidang keahlianmu
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            {categories.slice(0, 12).map((cat) => (
              <Chip
                key={cat.slug}
                component={Link}
                href={`/kategori/${cat.slug}`}
                label={`${cat.name} (${cat.count})`}
                clickable
                sx={{
                  py: 2.5,
                  px: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: alpha('#FFFFFF', 0.04),
                  border: '1px solid',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.main',
                  },
                }}
              />
            ))}
          </Box>
          {categories.length > 12 && (
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button
                component={Link}
                href="/kategori"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: 2 }}
              >
                Lihat Semua Kategori ({categories.length})
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* Lowongan Terbaru */}
      {latestPosts.length > 0 && (
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon sx={{ fontSize: 22, color: 'primary.main' }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Lowongan Terbaru
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {latestPosts.map((post) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post._id}>
                  <JobCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* All Jobs */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                Semua Lowongan
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {allPosts.length} lowongan tersedia saat ini
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/kategori"
              variant="outlined"
              size="small"
              endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 2 }}
            >
              Lihat Kategori
            </Button>
          </Box>
          <Grid container spacing={3}>
            {allPosts.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post._id}>
                <JobCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
