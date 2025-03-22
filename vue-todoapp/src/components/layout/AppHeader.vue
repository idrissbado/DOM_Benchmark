<template>
    <header class="app-header">
      <div class="header-container">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <span class="logo-text">Vue Todo</span>
          </router-link>
        </div>
        
        <nav class="main-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/todos" class="nav-link">Todos</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  // No additional logic needed for this component
  </script>
  
  <style scoped>
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
  
  .logo-link {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.5rem;
  }
  
  .main-nav {
    display: flex;
    gap: 1.5rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .nav-link:hover {
    color: var(--color-primary);
  }
  
  .router-link-active {
    color: var(--color-primary);
    font-weight: 600;
  }
  
  @media (max-width: 640px) {
    .header-container {
      flex-direction: column;
      gap: 1rem;
    }
  }
  </style>