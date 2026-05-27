'use client';

import { Container, Typography, Box, Grid, Paper, alpha } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Category } from '@/lib/types';

interface CategoriesContentProps {
  categories: Category[];
}

export default function CategoriesContent({ categories }: CategoriesContentProps) {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Kategori Lowongan
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Pilih kategori yang sesuai dengan minat dan keahlianmu
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {categories.map((cat) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cat.slug}>
              <Paper
                component={Link}
                href={`/kategori/${cat.slug}`}
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textDecoration: 'none',
                  backgroundColor: alpha('#FFFFFF', 0.03),
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: alpha('#6C63FF', 0.04),
                  },
                }}
              >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.3 }}
                  >
                    {cat.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {cat.count} lowongan
                  </Typography>
                </Box>
                <ArrowForwardIcon sx={{ fontSize: 18, color: 'text.disabled' }} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
