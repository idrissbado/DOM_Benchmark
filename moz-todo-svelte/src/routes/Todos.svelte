<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { todoStore } from '../stores/todoStore';
  import TodoForm from '../components/todos/TodoForm.svelte';
  import TodoList from '../components/todos/TodoList.svelte';
  import TodoFilters from '../components/todos/TodoFilters.svelte';
  import LoadingSpinner from '../components/ui/LoadingSpinner.svelte';
  
  let activeFilter = 'all';
  let showMetrics = false;
  
  // Performance metrics
  let metrics = {
    initialRenderTime: 0,
    lastUpdateTime: 0
  };
  
  // Reactive declarations for filtered todos
  $: filteredTodos = activeFilter === 'all' 
    ? $todoStore.todos 
    : $todoStore.todos.filter(todo => todo.priority === activeFilter);
  
  $: loading = $todoStore.loading;
  $: error = $todoStore.error;
  
  function setFilter(event) {
    activeFilter = event.detail;
  }
  
  function onTodoAdded(event) {
    const startTime = performance.now();
    todoStore.addTodo(event.detail);
    metrics.lastUpdateTime = performance.now() - startTime;
  }
  
  function onTodoUpdated(event) {
    const startTime = performance.now();
    todoStore.updateTodo(event.detail);
    metrics.lastUpdateTime = performance.now() - startTime;
  }
  
  function onTodoRemoved(event) {
    const startTime = performance.now();
    todoStore.removeTodo(event.detail);
    metrics.lastUpdateTime = performance.now() - startTime;
  }
  
  onMount(() => {
    console.time('TodosView Mounted');
    const startTime = performance.now();
    
    todoStore.fetchTodos();
    
    metrics.initialRenderTime = performance.now() - startTime;
    console.timeEnd('TodosView Mounted');
    console.log('Todos component mounted');
  });
</script>

<div class="todos-container">
  <h1 class="page-title">Todo List</h1>
  
  <div class="performance-metrics" transition:fade="{{ duration: 200 }}" class:hidden={!showMetrics}>
    <h3>Performance Metrics</h3>
    <p>Initial render time: {metrics.initialRenderTime.toFixed(2)}ms</p>
    <p>Last update time: {metrics.lastUpdateTime.toFixed(2)}ms</p>
    <button on:click={() => showMetrics = false} class="btn-secondary">Hide Metrics</button>
  </div>
  
  {#if !showMetrics}
    <button on:click={() => showMetrics = true} class="btn-secondary">Show Metrics</button>
  {/if}
  
  <div class="todos-layout">
    <!-- Todo Form -->
    <TodoForm on:todo-added={onTodoAdded} />
    
    <!-- Filters -->
    <TodoFilters {activeFilter} on:filter-changed={setFilter} />
    
    <!-- Loading state -->
    {#if loading}
      <div class="loading-container">
        <LoadingSpinner />
      </div>
    <!-- Error state -->
    {:else if error}
      <div class="error-message">
        {error}
        <button on:click={() => todoStore.fetchTodos()} class="btn-secondary">Retry</button>
      </div>
    <!-- Empty state -->
    {:else if filteredTodos.length === 0}
      <div class="empty-state" in:fade>
        <p>No tasks found. Add a new task to get started!</p>
      </div>
    <!-- Todo List -->
    {:else}
      <TodoList 
        todos={filteredTodos} 
        on:todo-updated={onTodoUpdated}
        on:todo-removed={onTodoRemoved}
      />
    {/if}
  </div>
</div>

<style>
  .todos-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: var(--color-primary);
    text-align: center;
  }

  .todos-layout {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .performance-metrics {
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .hidden {
    display: none;
  }

  .loading-container {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  .error-message {
    background-color: #f8d7da;
    color: #721c24;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .empty-state {
    text-align: center;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    color: #6c757d;
  }
</style>