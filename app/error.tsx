"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import HomeIcon from "@mui/icons-material/Home";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if available
    console.error("Runtime Error Caught by Next.js Error Boundary:", error);
  }, [error]);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 107, 107, 0.3)",
            boxShadow: "0 10px 40px rgba(255, 107, 107, 0.15)",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              p: 3,
              borderRadius: "50%",
              bgcolor: "rgba(255, 107, 107, 0.15)",
              color: "error.main",
              mb: 3,
            }}
          >
            <ErrorOutlinedIcon sx={{ fontSize: 64 }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 800, color: "text.primary", mb: 2 }}>
            Sistem Mengalami Gangguan
          </Typography>
          
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Mohon maaf, terjadi kesalahan teknis saat memuat bagian ini. Tim kami telah diberitahu. Anda dapat mencoba memuat ulang, atau kembali ke halaman utama.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
            <Button
              onClick={() => reset()}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<RefreshIcon />}
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1.5,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.39)",
                width: "100%",
              }}
            >
              Coba Lagi
            </Button>
            
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                startIcon={<HomeIcon />}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  width: "100%",
                }}
              >
                Beranda
              </Button>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
