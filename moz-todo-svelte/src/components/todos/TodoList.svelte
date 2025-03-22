<script>
  import { onMount, createEventDispatcher, tick } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import TodoListItem from './TodoListItem.svelte';

  export let todos = [];
  
  const dispatch = createEventDispatcher();

  function updateTodo(event) {
    dispatch('todo-updated', event.detail);
  }

  function removeTodo(event) {
    dispatch('todo-removed', event.detail);
  }

  onMount(() => {
    console.log('TodoList component mounted, todos:', todos);
  });
</script>

<div class="todo-list-container">
  <h2 class="list-title">Tasks ({todos.length})</h2>
  
  {#if todos.length === 0}
    <div class="empty-list" in:fade>
      No tasks yet. Add a task to get started!
    </div>
  {:else}
    <ul class="todo-list">
      {#each todos as todo (todo.id)}
        <li 
          animate:flip={{ duration: 300 }}
          in:slide={{ duration: 300 }}
          out:slide={{ duration: 300 }}
          class="todo-item"
          class:todo-low={todo.priority === 'low'}
          class:todo-medium={todo.priority === 'medium'}
          class:todo-high={todo.priority === 'high'}
          class:todo-completed={todo.completed}
        >
          <TodoListItem 
            {todo} 
            on:update={updateTodo}
            on:remove={removeTodo}
          />
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .todo-list-container {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .list-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  .empty-list {
    text-align: center;
    padding: 2rem;
    color: #6c757d;
    background-color: #f8f9fa;
    border-radius: 0.375rem;
  }

  .todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .todo-item {
    border-radius: 0.375rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .todo-low {
    border-left: 4px solid #28a745;
    background-color: rgba(40, 167, 69, 0.05);
  }

  .todo-medium {
    border-left: 4px solid #ffc107;
    background-color: rgba(255, 193, 7, 0.05);
  }

  .todo-high {
    border-left: 4px solid #dc3545;
    background-color: rgba(220, 53, 69, 0.05);
  }

  .todo-completed {
    opacity: 0.7;
    background-color: #f8f9fa;
  }
</style>