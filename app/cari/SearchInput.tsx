'use client';

import * as React from 'react';
import { Box, InputBase, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
  initialQuery: string;
}

export default function SearchInput({ initialQuery }: SearchInputProps) {
  const [localQuery, setLocalQuery] = React.useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      router.push(`/cari?q=${encodeURIComponent(localQuery.trim())}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mb: 5,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha('#FFFFFF', 0.06),
        border: '1px solid',
        borderColor: alpha('#FFFFFF', 0.1),
        borderRadius: 4,
        px: 3,
        py: 1.5,
        transition: 'all 0.3s ease',
        '&:focus-within': {
          borderColor: alpha('#6C63FF', 0.5),
          boxShadow: `0 0 20px ${alpha('#6C63FF', 0.1)}`,
        },
      }}
    >
      <SearchIcon sx={{ color: 'text.secondary', mr: 2 }} />
      <InputBase
        fullWidth
        placeholder="Ketik posisi, perusahaan, atau lokasi..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        sx={{
          color: 'text.primary',
          fontSize: '1.05rem',
        }}
      />
    </Box>
  );
}
