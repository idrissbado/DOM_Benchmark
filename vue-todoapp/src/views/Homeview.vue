<template>
    <div class="home-container">
      <section class="hero-section">
        <h1 class="hero-title">Manage Your Tasks Efficiently</h1>
        <p class="hero-subtitle">A Vue.js application demonstrating efficient DOM operations</p>
        <div class="hero-actions">
          <router-link to="/todos" class="btn-primary">Get Started</router-link>
          <router-link to="/about" class="btn-secondary">Learn More</router-link>
        </div>
      </section>
      
      <section class="features-section">
        <h2 class="section-title">Key Features</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3 class="feature-title">Task Management</h3>
            <p class="feature-description">
              Add, edit, and remove tasks with ease. Organize your work efficiently.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3 class="feature-title">Efficient DOM Updates</h3>
            <p class="feature-description">
              Leverages Vue's reactive system for optimal performance.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">Priority Levels</h3>
            <p class="feature-description">
              Assign and filter tasks by priority to focus on what matters most.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Performance Metrics</h3>
            <p class="feature-description">
              Track render and update times to understand application performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // No additional logic needed for this component
  </script>
  
  <style scoped>
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .hero-section {
    text-align: center;
    padding: 3rem 1rem;
    margin-bottom: 3rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: #6c757d;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--color-primary);
  }
  
  .feature-description {
    color: #6c757d;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1rem;
    }
    
    .hero-actions {
      flex-direction: column;
      align-items: center;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      max-width: 300px;
    }
  }
  </style>