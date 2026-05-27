"use client";

import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Paper,
  Breadcrumbs,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  alpha,
  Alert,
  AlertTitle,
} from "@mui/material";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShareIcon from "@mui/icons-material/Share";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import JsonLd from "@/components/JsonLd";
import { formatDate, getTimeAgo } from "@/lib/utils";
import { JobPost, Section } from "@/lib/types";

interface JobDetailContentProps {
  post: JobPost;
  relatedPosts: JobPost[];
  recommendedPosts: JobPost[];
  slug: string;
}

function SectionBlock({ section }: { section: Section }) {
  if (!section || (!section.header && section.paragraphs.length === 0))
    return null;
  return (
    <Box sx={{ mb: 3 }}>
      {section.header && (
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
          {section.header}
        </Typography>
      )}
      {section.paragraphs.map((p, i) => (
        <Typography
          key={i}
          variant="body1"
          sx={{ mb: 1.5, color: "text.secondary", lineHeight: 1.8 }}
        >
          {p}
        </Typography>
      ))}
    </Box>
  );
}

export default function JobDetailContent({
  post,
  relatedPosts,
  recommendedPosts,
  slug,
}: JobDetailContentProps) {
  const mainPosition = post.jobs[0]?.position || "Posisi Tersedia";
  const categorySlug = post.category
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: mainPosition,
    description:
      post.seo?.meta_description || post.section_1?.paragraphs?.[0] || "",
    datePosted: post.created_at,
    hiringOrganization: {
      "@type": "Organization",
      name: post.company,
      sameAs: post.apply_links.find((l) => l.url.startsWith("http"))?.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: post.location.split(",")[0]?.trim(),
        addressRegion: post.location.split(",")[1]?.trim(),
        addressCountry: "ID",
      },
    },
    employmentType: "FULL_TIME",
    image: post.image_url || undefined,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <>
      <JsonLd data={jobPostingJsonLd} />

      {/* Header Section */}
      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon sx={{ fontSize: 16 }} />}
            sx={{ mb: 3 }}
          >
            <Typography
              component={Link}
              href="/"
              variant="body2"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              Beranda
            </Typography>
            <Typography
              component={Link}
              href={`/kategori/${categorySlug}`}
              variant="body2"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {post.category}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {mainPosition}
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid size={{ xs: 12, md: 8 }}>
              {/* Title Card with Image */}
              <Paper
                sx={{
                  mb: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                {post.image_url && (
                  <Box
                    sx={{ position: "relative", width: "100%", height: 220 }}
                  >
                    <Image
                      src={post.image_url}
                      alt={post.company}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </Box>
                )}
                <Box sx={{ p: 4 }}>
                  <Box
                    sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                  >
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        backgroundColor: alpha("#6C63FF", 0.08),
                        color: "primary.main",
                        fontWeight: 600,
                      }}
                    />
                    {post.job_type && (
                      <Chip
                        label={post.job_type}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: alpha("#FFFFFF", 0.12),
                          color: "text.secondary",
                        }}
                      />
                    )}
                  </Box>

                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                    {mainPosition}
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 2 }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                    >
                      <BusinessOutlinedIcon
                        sx={{ fontSize: 18, color: "text.secondary" }}
                      />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {post.company}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{ fontSize: 18, color: "text.secondary" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {post.location}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                    >
                      <CalendarTodayOutlinedIcon
                        sx={{ fontSize: 18, color: "text.secondary" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {formatDate(post.created_at)} (
                        {getTimeAgo(post.created_at)})
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              {/* Section 1 & 2 (Before salary table) */}
              <Paper
                sx={{
                  p: 4,
                  mb: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <SectionBlock section={post.section_1} />
                <SectionBlock section={post.section_2} />
              </Paper>

              {/* Salary Table */}
              {post.salaries && post.salaries.length > 0 && (
                <Paper
                  sx={{
                    p: 4,
                    mb: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Estimasi Gaji
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{ fontWeight: 700, color: "text.primary" }}
                          >
                            Posisi
                          </TableCell>
                          <TableCell
                            sx={{ fontWeight: 700, color: "text.primary" }}
                          >
                            Gaji
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {post.salaries.map((s, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ color: "text.secondary" }}>
                              {s.position}
                            </TableCell>
                            <TableCell
                              sx={{ color: "success.main", fontWeight: 600 }}
                            >
                              {s.salary}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              )}

              {/* Section 3 & 4 (After salary, before positions) */}
              <Paper
                sx={{
                  p: 4,
                  mb: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <SectionBlock section={post.section_3} />
                <SectionBlock section={post.section_4} />
              </Paper>

              {/* Requirements */}
              {post.jobs.map((job, jobIdx) => (
                <Paper
                  key={jobIdx}
                  sx={{
                    p: 4,
                    mb: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Persyaratan — {job.position}
                  </Typography>
                  <List disablePadding>
                    {job.requirements.map((req, reqIdx) => (
                      <ListItem key={reqIdx} sx={{ px: 0, py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon
                            sx={{ fontSize: 20, color: "success.main" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={req}
                          slotProps={{
                            primary: {
                              variant: "body1",
                              sx: { color: "text.secondary" },
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              ))}

              {/* Section 5 (Closing / CTA) */}
              {post.section_5 && post.section_5.paragraphs.length > 0 && (
                <Paper
                  sx={{
                    p: 4,
                    mb: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <SectionBlock section={post.section_5} />
                </Paper>
              )}

              {/* Apply Buttons */}
              <Paper
                sx={{
                  p: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Alert severity="warning" sx={{ mb: 4, borderRadius: 2 }}>
                  <AlertTitle sx={{ fontWeight: 700 }}>Hati-Hati Penipuan!</AlertTitle>
                  NyariKerja.online atau perusahaan manapun <strong>tidak pernah memungut biaya apapun</strong> (seperti biaya tiket, pelatihan, atau admin) dalam proses rekrutmen. Laporkan lowongan ini jika meminta imbalan uang.
                </Alert>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Cara Melamar
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  Pilih metode lamaran yang tersedia di bawah ini
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {post.apply_links.map((link, idx) => {
                    let buttonText = link.method || "Apply";

                    // Bersihkan nama PT yang ada setelah tanda "|"
                    if (buttonText.includes("|")) {
                      buttonText = buttonText.split("|")[0].trim();
                    }

                    // Gunakan teks pintar HANYA jika teks asli adalah "apply" atau kosong
                    if (
                      buttonText.toLowerCase() === "apply" ||
                      buttonText === ""
                    ) {
                      if (link.url.startsWith("mailto:"))
                        buttonText = "Lamar via Email";
                      else if (
                        link.url.includes("wa.me") ||
                        link.url.includes("whatsapp.com")
                      )
                        buttonText = "Lamar via WhatsApp";
                      else if (
                        link.url.includes("forms.gle") ||
                        link.url.includes("docs.google.com/forms")
                      )
                        buttonText = "Isi Form Pendaftaran";
                      else buttonText = "Lamar Sekarang";
                    }

                    return (
                      <Button
                        key={idx}
                        variant={idx === 0 ? "contained" : "outlined"}
                        fullWidth
                        href={link.url}
                        target={
                          link.url.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        startIcon={
                          link.url.startsWith("mailto") ? (
                            <EmailIcon />
                          ) : (
                            <SendIcon />
                          )
                        }
                        endIcon={
                          link.url.startsWith("http") ? (
                            <OpenInNewIcon sx={{ fontSize: 16 }} />
                          ) : null
                        }
                        sx={{
                          borderRadius: 2,
                          py: 1,
                          px: 3,
                        }}
                      >
                        {buttonText}
                      </Button>
                    );
                  })}
                </Box>
              </Paper>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              {/* Share */}
              <Paper
                sx={{
                  p: 3,
                  mb: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Bagikan Lowongan
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<ShareIcon />}
                    href={`https://wa.me/?text=${encodeURIComponent(`Lowongan ${mainPosition} di ${post.company} — https://nyarikerja.online/lowongan/${slug}`)}`}
                    target="_blank"
                    sx={{
                      borderRadius: 2,
                      borderColor: alpha("#FFFFFF", 0.12),
                      color: "text.secondary",
                    }}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<ShareIcon />}
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Lowongan ${mainPosition} di ${post.company}`)}&url=${encodeURIComponent(`https://nyarikerja.online/lowongan/${slug}`)}`}
                    target="_blank"
                    sx={{
                      borderRadius: 2,
                      borderColor: alpha("#FFFFFF", 0.12),
                      color: "text.secondary",
                    }}
                  >
                    Twitter
                  </Button>
                </Box>
              </Paper>

              {/* Company Info */}
              <Paper
                sx={{
                  p: 3,
                  mb: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Tentang Perusahaan
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      Nama Perusahaan
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {post.company}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      Lokasi
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {post.location}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      Kategori
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {post.category}
                    </Typography>
                  </Box>
                  {post.education && (
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                    >
                      <SchoolOutlinedIcon
                        sx={{ fontSize: 16, color: "text.secondary" }}
                      />
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          Pendidikan
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {post.education}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  {post.job_type && (
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
                    >
                      <WorkOutlineIcon
                        sx={{ fontSize: 16, color: "text.secondary" }}
                      />
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary" }}
                        >
                          Tipe Pekerjaan
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {post.job_type}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Paper>

              {/* SEO Tags */}
              {post.seo?.tags && post.seo.tags.length > 0 && (
                <Paper
                  sx={{
                    p: 3,
                    mb: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Tags
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {post.seo.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        variant="outlined"
                        component={Link}
                        href={`/cari?q=${encodeURIComponent(tag)}`}
                        clickable
                        sx={{
                          borderColor: alpha("#FFFFFF", 0.1),
                          color: "text.secondary",
                          "&:hover": {
                            borderColor: "primary.main",
                            color: "primary.main",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              )}

              {/* Related Jobs */}
              {relatedPosts.length > 0 && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Lowongan Serupa
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {relatedPosts.map((rp) => (
                      <JobCard key={rp._id} post={rp} />
                    ))}
                  </Box>
                </Box>
              )}

              {/* Recommended Jobs */}
              {recommendedPosts.length > 0 && (
                <Box sx={{ mt: 5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Rekomendasi Lowongan
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {recommendedPosts.map((rp) => (
                      <JobCard key={rp._id} post={rp} />
                    ))}
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
