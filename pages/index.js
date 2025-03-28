export default function Home() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Bienvenue sur ParrainBoost 🚀</h1>
      <p>Connectez-vous pour commencer à partager vos bons plans.</p>
      <ul>
        <li><a href="/signup">Créer un compte</a></li>
        <li><a href="/login">Se connecter</a></li>
        <li><a href="/fiches">Explorer les fiches</a></li>
      </ul>
    </main>
  );
}
