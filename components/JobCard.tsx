'use client';

import { Card, CardContent, CardMedia, Typography, Box, Chip, alpha, CardActionArea } from '@mui/material';
import Link from 'next/link';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { JobPost } from '@/lib/types';
import { getTimeAgo } from '@/lib/utils';

interface JobCardProps {
  post: JobPost;
}

export default function JobCard({ post }: JobCardProps) {
  const mainPosition = post.jobs[0]?.position || 'Posisi Tersedia';
  const snippet = post.section_1?.paragraphs?.[0] || '';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/lowongan/${post.slug}`}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
      {/* Company Image */}
      {post.image_url && (
        <CardMedia
          component="img"
          height="160"
          image={post.image_url}
          alt={post.company}
          sx={{ objectFit: 'cover' }}
        />
      )}

      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header: Category */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{
              backgroundColor: alpha('#6C63FF', 0.08),
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          />
          {post.job_type && (
            <Chip
              label={post.job_type}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.7rem',
                borderColor: alpha('#FFFFFF', 0.12),
                color: 'text.secondary',
              }}
            />
          )}
        </Box>

        {/* Company */}
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontWeight: 500, mb: 0.5 }}
        >
          {post.company}
        </Typography>

        {/* Position */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: 'text.primary',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {mainPosition}
        </Typography>

        {/* Description snippet */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.6,
          }}
        >
          {snippet}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          {/* Meta */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {post.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarTodayOutlinedIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {getTimeAgo(post.created_at)}
              </Typography>
            </Box>
          </Box>

          {/* CTA */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              borderRadius: 2,
              py: 0.75,
              border: '1px solid',
              borderColor: 'primary.main',
              color: 'primary.main',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
          >
            Lihat Detail <ArrowForwardIcon fontSize="small" />
          </Box>
        </Box>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
