'use client';

import {
  Container,
  Typography,
  Box,
  Grid,
  Breadcrumbs,
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import JobCard from '@/components/JobCard';
import { JobPost, Category } from '@/lib/types';

interface CategoryDetailContentProps {
  cat: Category;
  posts: JobPost[];
}

export default function CategoryDetailContent({ cat, posts }: CategoryDetailContentProps) {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon sx={{ fontSize: 16 }} />}
          sx={{ mb: 4 }}
        >
          <Typography
            component={Link}
            href="/"
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Beranda
          </Typography>
          <Typography
            component={Link}
            href="/kategori"
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Kategori
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            {cat.name}
          </Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Lowongan {cat.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {posts.length} lowongan tersedia
          </Typography>
        </Box>

        {posts.length > 0 ? (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post._id}>
                <JobCard post={post} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ mb: 1, color: 'text.secondary' }}>
              Belum ada lowongan
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lowongan di kategori {cat.name} sedang belum tersedia. Cek kembali nanti!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
