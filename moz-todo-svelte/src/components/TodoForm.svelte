<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let taskName = "";
  let priority = "medium";

  function submitForm() {
    if (!taskName.trim()) return;

    const newTodo = {
      name: taskName.trim(),
      priority,
      completed: false,
    };

    dispatch("todo-added", newTodo);

    // Reset form
    taskName = "";
    priority = "medium";
  }
</script>

<div class="todo-form-container">
  <h2 class="form-title">Add New Task</h2>

  <form on:submit|preventDefault={submitForm} class="todo-form">
    <div class="form-group">
      <label for="taskName">Task Name</label>
      <input
        type="text"
        id="taskName"
        bind:value={taskName}
        class="form-control"
        placeholder="What needs to be done?"
        required
      />
    </div>

    <div class="form-group">
      <label for="priority">Priority</label>
      <select id="priority" bind:value={priority} class="form-control">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <button type="submit" class="btn-primary" disabled={!taskName.trim()}>
      Add Task
    </button>
  </form>
</div>

<style>
  .todo-form-container {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .form-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  .todo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-weight: 500;
    font-size: 0.875rem;
  }

  .form-control {
    padding: 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    font-size: 1rem;
  }

  .btn-primary {
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
  }

  .btn-primary:hover {
    background-color: var(--color-primary-dark);
  }

  .btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
</style>
