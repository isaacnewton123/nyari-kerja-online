'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Kategori', href: '/kategori' },
  { label: 'Tentang', href: '/tentang' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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
      <nav className="nav-top">
        <div className="container nav-inner">
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              src="/logo-nyarikerja.png"
              alt="NyariKerja"
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links" style={{ marginLeft: '24px' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          {/* Desktop Search */}
          <div className="nav-links">
            {!searchOpen ? (
              <button
                className="btn-icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Buka pencarian"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: 16, height: 16 }} />
              </button>
            ) : (
              <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid var(--hairline)',
                  borderRadius: 'var(--rounded-md)',
                  padding: '6px 12px',
                  minWidth: '280px',
                  background: 'var(--surface)',
                }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: 14, height: 14, color: 'var(--steel)', marginRight: '8px' }} />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Cari lowongan..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      color: 'var(--ink)',
                      fontSize: '14px',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="btn-icon"
                    style={{ width: 28, height: 28 }}
                    aria-label="Tutup pencarian"
                  >
                    <FontAwesomeIcon icon={faXmark} style={{ width: 14, height: 14 }} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Mobile Buttons */}
          <div style={{ display: 'flex', gap: '4px' }} className="lg:hidden">
            <button
              className="btn-icon"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={searchOpen ? "Tutup pencarian" : "Pencarian"}
            >
              <FontAwesomeIcon icon={searchOpen ? faXmark : faMagnifyingGlass} style={{ width: searchOpen ? 20 : 18, height: searchOpen ? 20 : 18 }} />
            </button>
            <button
              className="btn-icon"
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu"
            >
              <FontAwesomeIcon icon={faBars} style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden" style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--hairline)',
            padding: '12px 16px',
            zIndex: 99,
          }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '8px', maxWidth: '100%', margin: '0 auto' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                border: '1px solid var(--hairline)',
                borderRadius: 'var(--rounded-md)',
                padding: '8px 12px',
                background: 'var(--surface)',
              }}>
                <input
                  autoFocus
                  type="text"
                  placeholder="Cari lowongan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    color: 'var(--ink)',
                    fontSize: '14px',
                  }}
                />
              </div>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--ink)' }}>
              Menu
            </span>
            <button
              className="btn-icon"
              onClick={() => setMobileOpen(false)}
              aria-label="Tutup menu"
            >
              <FontAwesomeIcon icon={faXmark} style={{ width: 20, height: 20 }} />
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-drawer-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
