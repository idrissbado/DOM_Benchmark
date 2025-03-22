<script>
  import { Link } from "svelte-routing";
</script>

<div class="not-found-container">
  <div class="not-found-content">
    <h1 class="not-found-title">404</h1>
    <h2 class="not-found-subtitle">Page Not Found</h2>
    <p class="not-found-message">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <Link to="/" class="btn-primary">Go Home</Link>
  </div>
</div>

<style>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 2rem;
  }

  .not-found-content {
    text-align: center;
    max-width: 500px;
    padding: 3rem 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .not-found-title {
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  .not-found-subtitle {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .not-found-message {
    color: #6c757d;
    margin-bottom: 2rem;
  }
</style>
