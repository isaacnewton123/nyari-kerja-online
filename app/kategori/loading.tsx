export default function LoadingKategori() {
  return (
    <div style={{ padding: '64px 0', minHeight: '60vh' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <div className="skeleton skeleton-text" style={{ width: '30%', height: '40px', marginBottom: '12px', borderRadius: '6px' }} />
          <div className="skeleton skeleton-text" style={{ width: '40%', height: '24px', borderRadius: '4px' }} />
        </div>

        <div className="grid grid-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="card-base skeleton"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 24px',
                height: '84px'
              }}
            >
              <div style={{ flex: 1 }}>
                <div className="skeleton skeleton-text" style={{ width: '70%', height: '20px', marginBottom: '8px', backgroundColor: 'rgba(0,0,0,0.05)' }} />
                <div className="skeleton skeleton-text" style={{ width: '40%', height: '14px', backgroundColor: 'rgba(0,0,0,0.05)' }} />
              </div>
              <div className="skeleton" style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.05)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
