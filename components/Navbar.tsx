'use client';

import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  InputBase,
  alpha,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Kategori', href: '/kategori' },
  { label: 'Tentang', href: '/tentang' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/cari?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'inherit',
                mr: 4,
              }}
            >
              <Image
                src="/logo-nyarikerja.png"
                alt="NyariKerja"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>

            {/* Desktop Nav Links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        color: 'text.primary',
                        backgroundColor: (t) => alpha(t.palette.primary.main, 0.08),
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flex: 1 }} />

            {/* Desktop Search */}
            {!isMobile && !searchOpen && (
              <IconButton
                onClick={() => setSearchOpen(true)}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'text.primary',
                    backgroundColor: (t) => alpha(t.palette.primary.main, 0.08),
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            )}

            {!isMobile && searchOpen && (
              <Box
                component="form"
                onSubmit={handleSearch}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  px: 2,
                  py: 0.5,
                  minWidth: 280,
                }}
              >
                <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
                <InputBase
                  autoFocus
                  placeholder="Cari lowongan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    flex: 1,
                    color: 'text.primary',
                    fontSize: '0.875rem',
                    '& ::placeholder': { color: 'text.secondary', opacity: 1 },
                  }}
                />
                <IconButton size="small" onClick={() => setSearchOpen(false)}>
                  <CloseIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>
            )}

            {/* Mobile Search & Menu */}
            {isMobile && (
              <>
                <IconButton
                  onClick={() => setSearchOpen(!searchOpen)}
                  sx={{ color: 'text.secondary', mr: 0.5 }}
                >
                  <SearchIcon />
                </IconButton>
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Toolbar>

          {/* Mobile Search Bar */}
          {isMobile && searchOpen && (
            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                pb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  px: 2,
                  py: 0.75,
                }}
              >
                <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
                <InputBase
                  autoFocus
                  placeholder="Cari lowongan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    flex: 1,
                    color: 'text.primary',
                    fontSize: '0.875rem',
                  }}
                />
              </Box>
            </Box>
          )}
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 280 } } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Menu
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                sx={{ py: 1.5, px: 3 }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{ primary: { sx: { fontWeight: 500 } } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
