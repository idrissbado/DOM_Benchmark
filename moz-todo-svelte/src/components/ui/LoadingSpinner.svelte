<script>
  export let message = 'Loading...';
</script>

<div class="spinner-container">
  <div class="spinner"></div>
  {#if message}
    <p class="spinner-message">{message}</p>
  {/if}
</div>

<style>
  .spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: var(--color-primary);
    animation: spin 1s ease-in-out infinite;
  }

  .spinner-message {
    color: #6c757d;
    font-size: 0.875rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>