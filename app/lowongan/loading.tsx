export default function LoadingLowongan() {
  return (
    <div style={{ padding: '48px 0', minHeight: '60vh' }}>
      <div className="container">
        <div className="skeleton skeleton-text" style={{ width: '40%', height: '48px', margin: '0 auto 8px', borderRadius: '8px' }} />
        <div className="skeleton skeleton-text" style={{ width: '50%', height: '24px', margin: '0 auto 48px', borderRadius: '4px' }} />

        <div className="grid grid-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton card-base" style={{ height: '240px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}
