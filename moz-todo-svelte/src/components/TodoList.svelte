<script>
  import { createEventDispatcher } from "svelte";
  import TodoListItem from "./TodoListItem.svelte";

  export let todos = [];

  const dispatch = createEventDispatcher();

  function updateTodo(event) {
    dispatch("todo-updated", event.detail);
  }

  function removeTodo(event) {
    dispatch("todo-removed", event.detail);
  }
</script>

<div class="todo-list-container">
  <h2 class="list-title">Tasks ({todos.length})</h2>

  {#if todos.length === 0}
    <div class="empty-list">No tasks yet. Add a task to get started!</div>
  {:else}
    <ul class="todo-list">
      {#each todos as todo (todo.id)}
        <li class="todo-item">
          <TodoListItem {todo} on:update={updateTodo} on:remove={removeTodo} />
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
    border-left: 4px solid;
  }

  .todo-item:has(div[data-priority="low"]) {
    border-left-color: var(--color-success);
    background-color: rgba(34, 197, 94, 0.05);
  }

  .todo-item:has(div[data-priority="medium"]) {
    border-left-color: var(--color-warning);
    background-color: rgba(234, 179, 8, 0.05);
  }

  .todo-item:has(div[data-priority="high"]) {
    border-left-color: var(--color-danger);
    background-color: rgba(239, 68, 68, 0.05);
  }
</style>
