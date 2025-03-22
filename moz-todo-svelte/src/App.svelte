<script>
  import Todos from "./components/Todos.svelte";
  import { onMount } from "svelte";

  let appTitle = "Svelte Todo App";

  onMount(() => {
    console.log("App mounted");
  });
</script>

<main>
  <h1>{appTitle}</h1>
  <Todos />
</main>

<style>
  :global(:root) {
    --color-primary: #4f46e5;
    --color-primary-dark: #4338ca;
    --color-secondary: #64748b;
    --color-secondary-dark: #475569;
    --color-success: #22c55e;
    --color-warning: #eab308;
    --color-danger: #ef4444;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f5f7fa;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 2rem;
  }
</style>
