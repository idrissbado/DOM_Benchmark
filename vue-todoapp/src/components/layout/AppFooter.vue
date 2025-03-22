<template>
    <footer class="app-footer">
      <div class="footer-container">
        <p class="copyright">© {{ currentYear }} Vue Todo App</p>
        <p class="performance-info">
          Optimized for DOM performance
        </p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const currentYear = computed(() => new Date().getFullYear());
  </script>
  
  <style scoped>
  .app-footer {
    background-color: #f8f9fa;
    border-top: 1px solid #dee2e6;
    padding: 1.5rem 0;
    margin-top: 2rem;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .copyright, .performance-info {
    color: #6c757d;
    font-size: 0.875rem;
  }
  
  @media (max-width: 640px) {
    .footer-container {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
  </style>