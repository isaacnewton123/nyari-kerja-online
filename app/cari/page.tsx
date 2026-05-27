import { Container, Typography, Box, Grid } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOffOutlined";
import JobCard from "@/components/JobCard";
import SearchInput from "@/app/cari/SearchInput";
import { searchPosts } from "@/lib/data";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;
  const results = query ? await searchPosts(query) : [];

  return (
    <Box sx={{ py: 6, minHeight: "60vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mb: 1, textAlign: "center" }}
        >
          Cari Lowongan
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4, textAlign: "center" }}
        >
          Temukan lowongan yang sesuai dengan kata kunci pencarian
        </Typography>

        {/* Search Input (Client Component) */}
        <SearchInput initialQuery={query || ""} />

        {/* Results */}
        {query && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {results.length > 0
                ? `Ditemukan ${results.length} hasil untuk "${query}"`
                : `Tidak ada hasil untuk "${query}"`}
            </Typography>
          </Box>
        )}

        {results.length > 0 ? (
          <Grid container spacing={3}>
            {results.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post._id}>
                <JobCard post={post} />
              </Grid>
            ))}
          </Grid>
        ) : query ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <SearchOffIcon
              sx={{ fontSize: 48, color: "text.disabled", mb: 2 }}
            />
            <Typography variant="h6" sx={{ mb: 1, color: "text.secondary" }}>
              Lowongan tidak ditemukan
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Coba gunakan kata kunci yang berbeda
            </Typography>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
