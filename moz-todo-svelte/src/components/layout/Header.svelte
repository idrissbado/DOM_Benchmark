<script>
  import { Link } from "svelte-routing";
</script>

<header class="app-header">
  <div class="header-container">
    <div class="logo">
      <Link to="/">
        <span class="logo-text">Svelte Todo</span>
      </Link>
    </div>

    <nav class="main-nav">
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
</header>

<style>
  .app-header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo-text {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.5rem;
  }

  .main-nav {
    display: flex;
    gap: 1.5rem;
  }

  .main-nav :global(a) {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }

  .main-nav :global(a:hover) {
    color: var(--color-primary);
  }

  @media (max-width: 640px) {
    .header-container {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
