export default function LoadingJobDetail() {
  return (
    <>
      {/* Header Skeleton */}
      <header className="page-header">
        <div className="container">
          <div className="header-layout">
            <div className="header-logo-container skeleton" style={{ width: '100px', height: '100px', borderRadius: '16px', flexShrink: 0 }} />
            <div className="header-content" style={{ flex: 1 }}>
              <div className="skeleton skeleton-text" style={{ width: '60%', height: '36px', marginBottom: '8px' }} />
              <div className="skeleton skeleton-text" style={{ width: '40%', height: '24px', marginBottom: '24px' }} />
              
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} className="skeleton skeleton-text" style={{ width: '120px', height: '20px', margin: 0 }} />
                ))}
              </div>
            </div>
            <div className="header-action">
              <div className="skeleton" style={{ width: '140px', height: '48px', borderRadius: '100px' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <div className="page-content">
        <div className="container">
          <div className="layout-grid">
            {/* Left Column */}
            <div className="main-column">
              {[1, 2, 3].map(card => (
                <div key={card} className="card-base" style={{ marginBottom: '24px', padding: '32px' }}>
                  <div className="skeleton skeleton-text" style={{ width: '40%', height: '28px', marginBottom: '24px' }} />
                  {[1, 2, 3, 4, 5].map(line => (
                    <div key={line} className="skeleton skeleton-text" style={{ width: line === 5 ? '60%' : '100%', height: '16px', marginBottom: '12px' }} />
                  ))}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="sidebar-column">
              {/* Sticky Apply Box Skeleton */}
              <div className="card-base" style={{ padding: '32px' }}>
                <div className="skeleton" style={{ width: '100%', height: '48px', borderRadius: '100px', marginBottom: '24px' }} />
                <div className="skeleton skeleton-text" style={{ width: '50%', height: '14px', margin: '0 auto' }} />
                <hr className="divider" style={{ margin: '24px 0' }} />
                {[1, 2].map(line => (
                  <div key={line} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div className="skeleton skeleton-text" style={{ width: '30%', height: '16px', margin: 0 }} />
                    <div className="skeleton skeleton-text" style={{ width: '40%', height: '16px', margin: 0 }} />
                  </div>
                ))}
              </div>

              {/* Related Jobs Skeleton */}
              <div className="card-base" style={{ marginTop: '24px', padding: '32px' }}>
                <div className="skeleton skeleton-text" style={{ width: '60%', height: '20px', marginBottom: '24px' }} />
                {[1, 2].map(job => (
                  <div key={job} style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
                    <div className="skeleton skeleton-circle" style={{ width: '40px', height: '40px', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div className="skeleton skeleton-text" style={{ width: '80%', height: '16px' }} />
                      <div className="skeleton skeleton-text" style={{ width: '50%', height: '14px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
