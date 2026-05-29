export default function Loading() {
  return (
    <>
      <header className="hero-band">
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 16px' }}>
          <div className="skeleton skeleton-text" style={{ width: '70%', height: '48px', margin: '0 auto 12px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="skeleton skeleton-text" style={{ width: '50%', height: '48px', margin: '0 auto 24px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          
          <div className="skeleton skeleton-text" style={{ width: '60%', height: '24px', margin: '0 auto 12px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <div className="skeleton skeleton-text" style={{ width: '40%', height: '24px', margin: '0 auto 40px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
          
          <div className="skeleton" style={{ width: '100%', maxWidth: '600px', height: '64px', margin: '0 auto 48px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '100px' }} />
          
          <div className="stat-row">
            {[1, 2, 3].map((i) => (
              <div key={i} className="stat-item skeleton" style={{ width: '100px', height: '60px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
        </div>
      </header>
      
      <div style={{ position: 'relative', zIndex: 20, marginTop: '-80px' }}>
        <div className="container" style={{ paddingBottom: '96px' }}>
          {/* Card Info */}
          <div className="card-base skeleton" style={{ maxWidth: '800px', height: '180px', margin: '0 auto 96px' }} />
          
          {/* Categories */}
          <div style={{ marginBottom: '96px' }}>
            <div className="skeleton skeleton-text" style={{ width: '30%', height: '32px', margin: '0 auto 16px' }} />
            <div className="skeleton skeleton-text" style={{ width: '50%', height: '24px', margin: '0 auto 40px' }} />
            <div className="grid grid-4" style={{ marginBottom: '32px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="skeleton category-card" style={{ height: '160px' }} />
              ))}
            </div>
            <div className="skeleton" style={{ width: '200px', height: '48px', margin: '32px auto 0', borderRadius: '100px' }} />
          </div>
          
          {/* Latest Posts */}
          <div style={{ marginBottom: '96px' }}>
            <div className="skeleton skeleton-text" style={{ width: '30%', height: '32px', marginBottom: '8px' }} />
            <div className="skeleton skeleton-text" style={{ width: '40%', height: '24px', marginBottom: '32px' }} />
            <div className="grid grid-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="skeleton card-base" style={{ height: '240px' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
