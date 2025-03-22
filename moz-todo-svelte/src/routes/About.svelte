<script>
  import { Link } from "svelte-routing";
</script>

<div class="about-container">
  <h1 class="page-title">About This Project</h1>

  <div class="about-content">
    <section class="about-section">
      <h2 class="section-title">Svelte Todo App</h2>
      <p>
        This Todo application demonstrates efficient DOM operations using
        Svelte. It showcases how Svelte's compile-time approach can be leveraged
        to create performant web applications that update the DOM efficiently.
      </p>
    </section>

    <section class="about-section">
      <h2 class="section-title">DOM Operations</h2>
      <p>
        Svelte provides an efficient way to manipulate the DOM through its
        compile-time reactivity. Unlike other frameworks that use a virtual DOM,
        Svelte compiles your components into highly efficient JavaScript that
        surgically updates the DOM when your state changes.
      </p>
      <p>
        This application demonstrates several key Svelte features for efficient
        DOM manipulation:
      </p>
      <ul class="feature-list">
        <li>
          <strong>Compile-time Reactivity:</strong> Svelte analyzes your code at
          build time to create minimal, efficient updates
        </li>
        <li>
          <strong>No Virtual DOM Overhead:</strong> Direct DOM manipulation without
          the overhead of diffing algorithms
        </li>
        <li>
          <strong>Transitions and Animations:</strong> Built-in transition and animation
          directives for smooth UI changes
        </li>
        <li>
          <strong>Performance Metrics:</strong> Tracking and displaying metrics for
          initial render and updates
        </li>
      </ul>
    </section>

    <section class="about-section">
      <h2 class="section-title">Performance Considerations</h2>
      <p>
        This application includes several optimizations to ensure efficient DOM
        operations:
      </p>
      <ul class="feature-list">
        <li>
          Reactive declarations for derived state to avoid unnecessary
          calculations
        </li>
        <li>Efficient list rendering with keyed each blocks</li>
        <li>Transitions and animations for smooth user experience</li>
        <li>Svelte stores for state management</li>
        <li>Performance metrics tracking to identify bottlenecks</li>
      </ul>
    </section>

    <section class="about-section">
      <h2 class="section-title">Technologies Used</h2>
      <div class="tech-grid">
        <div class="tech-item">
          <h3>Svelte</h3>
          <p>Compile-time framework</p>
        </div>
        <div class="tech-item">
          <h3>Svelte Store</h3>
          <p>State management</p>
        </div>
        <div class="tech-item">
          <h3>Svelte Routing</h3>
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

<style>
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
