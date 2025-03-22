<script>
  import { createEventDispatcher } from "svelte";

  export let activeFilter = "all";

  const dispatch = createEventDispatcher();

  const filters = [
    { label: "All", value: "all" },
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  function setFilter(filter) {
    dispatch("filter-changed", filter);
  }
</script>

<div class="filters-container">
  <div class="filters-title">Filter by Priority:</div>
  <div class="filters-buttons">
    {#each filters as filter}
      <button
        on:click={() => setFilter(filter.value)}
        class="filter-btn"
        class:active={activeFilter === filter.value}
      >
        {filter.label}
      </button>
    {/each}
  </div>
</div>

<style>
  .filters-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .filters-title {
    font-weight: 500;
    white-space: nowrap;
  }

  .filters-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.375rem 0.75rem;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background-color: transparent;
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .filter-btn:hover {
    background-color: #f8f9fa;
  }

  .filter-btn.active {
    background-color: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
  }

  @media (max-width: 640px) {
    .filters-container {
      flex-direction: column;
      align-items: flex-start;
    }

    .filters-buttons {
      width: 100%;
    }
  }
</style>
