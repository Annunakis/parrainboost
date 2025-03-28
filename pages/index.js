export default function Home() {
  return (
    <div style={{
      padding: '60px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f0f0f5',
      minHeight: '100vh',
    }}>
      <h1 style={{ color: '#333', fontSize: '36px' }}>
        Bienvenue sur <span style={{ color: '#0070f3' }}>ParrainBoost 🚀</span>
      </h1>
      <p style={{ fontSize: '18px' }}>Gagnez des points en partageant vos bons plans !</p>
      <div style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>
        <a href="/signup" style={{ color: '#0070f3', textDecoration: 'underline' }}>Créer un compte</a>
        <a href="/login" style={{ color: '#0070f3', textDecoration: 'underline' }}>Se connecter</a>
        <a href="/fiches" style={{ color: '#0070f3', textDecoration: 'underline' }}>Explorer les fiches</a>
      </div>
    </div>
  );
}
