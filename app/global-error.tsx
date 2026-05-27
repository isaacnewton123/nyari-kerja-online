"use client";

import { useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Fatal Error Caught by Global Error Boundary:", error);
  }, [error]);

  return (
    <html lang="id">
      <body>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#0A0E1A",
            color: "#F1F5F9",
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            textAlign: "center",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h1" sx={{ fontSize: "5rem", mb: 2 }}>
              ⚠️
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#F1F5F9", mb: 2 }}>
              Kesalahan Sistem Kritis
            </Typography>
            <Typography variant="body1" sx={{ color: "#94A3B8", mb: 4 }}>
              Kami memohon maaf, aplikasi mengalami kegagalan sistem secara menyeluruh. Silakan muat ulang halaman.
            </Typography>
            <Button
              onClick={() => reset()}
              variant="contained"
              size="large"
              startIcon={<RefreshIcon />}
              sx={{
                bgcolor: "#6C63FF",
                color: "#FFFFFF",
                "&:hover": {
                  bgcolor: "#4A42D4",
                },
                borderRadius: 2,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Muat Ulang Seluruh Halaman
            </Button>
          </Container>
        </Box>
      </body>
    </html>
  );
}
