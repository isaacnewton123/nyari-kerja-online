'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChartLine, faBuilding, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

interface HeroSectionProps {
  stats: {
    posts: number;
    companies: number;
    categories: number;
  };
}

export default function HeroSection({ stats }: HeroSectionProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/cari?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const statsDisplay = [
    { icon: faChartLine, value: `${stats.posts}+`, label: 'Lowongan Aktif' },
    { icon: faBuilding, value: `${stats.companies}+`, label: 'Perusahaan' },
    { icon: faLayerGroup, value: `${stats.categories}`, label: 'Kategori' },
  ];

  return (
    <header className="hero-band">
      {/* Decorative dots — Notion-style atmospheric decoration */}
      <div className="hero-dot" style={{ top: '15%', left: '10%', width: 20, height: 20, backgroundColor: 'var(--brand-pink)' }} />
      <div className="hero-dot" style={{ top: '30%', right: '15%', width: 16, height: 16, backgroundColor: 'var(--brand-yellow)' }} />
      <div className="hero-dot" style={{ bottom: '35%', left: '25%', width: 28, height: 28, borderRadius: 'var(--rounded-sm)', backgroundColor: 'var(--tint-mint)', opacity: 0.5, transform: 'rotate(15deg)' }} />
      <div className="hero-dot" style={{ top: '50%', right: '8%', width: 12, height: 12, backgroundColor: 'var(--brand-purple)' }} />
      <div className="hero-dot" style={{ top: '20%', right: '30%', width: 10, height: 10, backgroundColor: 'var(--brand-teal)', opacity: 0.6 }} />
      <div className="hero-dot" style={{ bottom: '20%', right: '20%', width: 14, height: 14, backgroundColor: 'var(--brand-orange)', opacity: 0.5 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
        <h1 className="hero-display" style={{ color: 'var(--on-dark)', marginBottom: '24px' }}>
          Temukan pekerjaan<br />yang tepat untukmu.
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--on-dark-muted)',
          fontWeight: 400,
          maxWidth: '640px',
          margin: '0 auto 40px',
          lineHeight: 1.5,
        }}>
          Platform pencarian kerja terpercaya untuk profesional modern.
          Jelajahi ribuan peluang karir terbaru dari perusahaan idamanmu.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hero-search" style={{ marginBottom: '48px' }}>
          <div className="hero-search-input-wrap">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="hero-search-icon" />
            <input
              type="text"
              placeholder="Posisi, keahlian, atau perusahaan..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="hero-search-input"
            />
          </div>
          <button type="submit" className="btn btn-primary hero-search-btn">
            Cari Lowongan
          </button>
        </form>

        {/* Stats */}
        <div className="stat-row">
          {statsDisplay.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                <FontAwesomeIcon icon={stat.icon} style={{ width: 18, height: 18, color: 'var(--on-dark-muted)' }} />
                <span className="stat-value">{stat.value}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
