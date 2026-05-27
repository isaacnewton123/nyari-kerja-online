'use client';

import * as React from 'react';
import { Box, Typography, InputBase, Button, Container, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import CategoryIconMui from '@mui/icons-material/Category';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface HeroSectionProps {
  stats: {
    posts: number;
    companies: number;
    categories: number;
  };
}

export default function HeroSection({ stats }: HeroSectionProps) {
  const [query, setQuery] = React.useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/cari?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const statsDisplay = [
    { icon: <TrendingUpIcon sx={{ fontSize: 20 }} />, value: `${stats.posts}+`, label: 'Lowongan Aktif' },
    { icon: <BusinessIcon sx={{ fontSize: 20 }} />, value: `${stats.companies}+`, label: 'Perusahaan' },
    { icon: <CategoryIconMui sx={{ fontSize: 20 }} />, value: `${stats.categories}`, label: 'Kategori' },
  ];

  const popularSearches = ['Operator Produksi', 'Crew Outlet', 'Kasir', 'Teknisi'];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Image 
            src="/logo-nyarikerja.png" 
            alt="NyariKerja Logo" 
            width={72} 
            height={72} 
            priority
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
          }}
        >
          Temukan Karir Impianmu
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 5,
            color: 'text.secondary',
            maxWidth: 480,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Jelajahi ribuan lowongan kerja dari perusahaan-perusahaan terbaik di Indonesia.
          Satu langkah lebih dekat menuju kesuksesanmu.
        </Typography>

        {/* Search Bar */}
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: 560,
            mx: 'auto',
            mb: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 0.5,
            transition: 'border-color 0.2s ease',
            '&:focus-within': {
              borderColor: 'primary.main',
            },
          }}
        >
          <SearchIcon sx={{ ml: 1.5, color: 'text.secondary' }} />
          <InputBase
            placeholder="Cari posisi, perusahaan, atau lokasi..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              flex: 1,
              px: 1.5,
              py: 0.75,
              color: 'text.primary',
              fontSize: '0.9375rem',
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: 1.5,
              px: 3,
              py: 1,
            }}
          >
            Cari
          </Button>
        </Box>

        {/* Popular searches */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 5 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mr: 0.5, lineHeight: '32px' }}>
            Populer:
          </Typography>
          {popularSearches.map((s) => (
            <Chip
              key={s}
              label={s}
              variant="outlined"
              size="small"
              clickable
              onClick={() => router.push(`/cari?q=${encodeURIComponent(s)}`)}
              sx={{
                borderColor: 'divider',
                color: 'text.secondary',
                '&:hover': {
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              }}
            />
          ))}
        </Box>

        {/* Stats */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 4, md: 6 },
            flexWrap: 'wrap',
          }}
        >
          {statsDisplay.map((stat) => (
            <Box key={stat.label} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 0.75,
                  mb: 0.5,
                }}
              >
                <Box sx={{ color: 'text.secondary', display: 'flex' }}>{stat.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {stat.value}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
