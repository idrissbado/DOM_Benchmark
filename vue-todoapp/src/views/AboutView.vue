<template>
    <div class="about-container">
      <h1 class="page-title">About This Project</h1>
      
      <div class="about-content">
        <section class="about-section">
          <h2 class="section-title">Vue Todo App</h2>
          <p>
            This Todo application demonstrates efficient DOM operations using Vue.js. It showcases how Vue's reactive system
            can be leveraged to create performant web applications that update the DOM efficiently.
          </p>
        </section>
        
        <section class="about-section">
          <h2 class="section-title">DOM Operations</h2>
          <p>
            Vue.js provides an efficient way to manipulate the DOM through its reactive system. When data changes, Vue
            intelligently determines the minimal DOM updates needed, rather than re-rendering the entire page.
          </p>
          <p>
            This application demonstrates several key Vue features for efficient DOM manipulation:
          </p>
          <ul class="feature-list">
            <li>
              <strong>Reactive Data:</strong> Using Vue's reactivity system to track changes and update only what's necessary
            </li>
            <li>
              <strong>List Rendering:</strong> Implementing proper list rendering with <code>v-for</code> and <code>:key</code> for optimal performance
            </li>
            <li>
              <strong>Transitions:</strong> Using <code>TransitionGroup</code> for smooth animations when adding/removing tasks
            </li>
            <li>
              <strong>Performance Metrics:</strong> Tracking and displaying metrics for initial render and updates
            </li>
          </ul>
        </section>
        
        <section class="about-section">
          <h2 class="section-title">Performance Considerations</h2>
          <p>
            This application includes several optimizations to ensure efficient DOM operations:
          </p>
          <ul class="feature-list">
            <li>Proper key management in list rendering to help Vue track node identity</li>
            <li>Computed properties for filtering to avoid unnecessary re-renders</li>
            <li>Efficient state management with Vuex</li>
            <li>Lazy loading of components with Vue Router</li>
            <li>Performance metrics tracking to identify bottlenecks</li>
          </ul>
        </section>
        
        <section class="about-section">
          <h2 class="section-title">Technologies Used</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <h3>Vue.js 3</h3>
              <p>Frontend framework with Composition API</p>
            </div>
            <div class="tech-item">
              <h3>Vuex 4</h3>
              <p>State management</p>
            </div>
            <div class="tech-item">
              <h3>Vue Router 4</h3>
              <p>Client-side routing</p>
            </div>
            <div class="tech-item">
              <h3>Vite</h3>
              <p>Build tool and development server</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional logic needed for this component
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: var(--color-primary);
    text-align: center;
  }
  
  .about-content {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  
  .about-section {
    margin-bottom: 2rem;
  }
  
  .about-section:last-child {
    margin-bottom: 0;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  
  .about-section p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  .feature-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .feature-list li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
  
  code {
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.9em;
  }
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .tech-item {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.375rem;
    border-left: 3px solid var(--color-primary);
  }
  
  .tech-item h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-primary);
  }
  
  .tech-item p {
    font-size: 0.9rem;
    color: #6c757d;
    margin-bottom: 0;
  }
  </style>