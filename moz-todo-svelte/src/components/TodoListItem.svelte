<script>
  import { createEventDispatcher } from "svelte";

  export let todo;

  const dispatch = createEventDispatcher();

  let isEditing = false;
  let editedName = "";
  let editedPriority = "";

  function startEditing() {
    editedName = todo.name;
    editedPriority = todo.priority;
    isEditing = true;
  }

  function saveEdit() {
    if (!editedName.trim()) return;

    const updatedTodo = {
      ...todo,
      name: editedName.trim(),
      priority: editedPriority,
    };

    dispatch("update", updatedTodo);
    isEditing = false;
  }

  function cancelEdit() {
    isEditing = false;
  }

  function toggleComplete() {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };

    dispatch("update", updatedTodo);
  }

  function removeTodo() {
    dispatch("remove", todo.id);
  }
</script>

<div class="todo-list-item" data-priority={todo.priority}>
  <!-- View Mode -->
  {#if !isEditing}
    <div class="todo-view-mode">
      <div class="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          on:change={toggleComplete}
          class="todo-checkbox"
        />
        <span class="todo-text" class:completed={todo.completed}>
          {todo.name}
        </span>
        <span class="todo-priority">
          {todo.priority}
        </span>
      </div>

      <div class="todo-actions">
        <button on:click={startEditing} class="btn-edit">Edit</button>
        <button on:click={removeTodo} class="btn-delete">Delete</button>
      </div>
    </div>
    <!-- Edit Mode -->
  {:else}
    <div class="todo-edit-mode">
      <div class="edit-form">
        <input type="text" bind:value={editedName} class="edit-input" />
        <select bind:value={editedPriority} class="edit-select">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div class="edit-actions">
        <button on:click={saveEdit} class="btn-save">Save</button>
        <button on:click={cancelEdit} class="btn-cancel">Cancel</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .todo-list-item {
    padding: 1rem;
  }

  .todo-view-mode,
  .todo-edit-mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .todo-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }

  .todo-checkbox {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }

  .todo-text {
    font-size: 1rem;
    word-break: break-word;
  }

  .todo-text.completed {
    text-decoration: line-through;
    color: #6c757d;
  }

  .todo-priority {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-weight: 500;
  }

  .todo-actions,
  .edit-actions {
    display: flex;
    gap: 0.5rem;
  }

  button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    cursor: pointer;
    border: none;
    color: white;
  }

  .btn-edit {
    background-color: #007bff;
  }

  .btn-delete {
    background-color: #dc3545;
  }

  .btn-save {
    background-color: #28a745;
  }

  .btn-cancel {
    background-color: #6c757d;
  }

  .edit-form {
    display: flex;
    gap: 0.5rem;
    flex: 1;
  }

  .edit-input,
  .edit-select {
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  .edit-input {
    flex: 1;
  }

  @media (max-width: 640px) {
    .todo-view-mode,
    .todo-edit-mode {
      flex-direction: column;
      align-items: flex-start;
    }

    .todo-actions,
    .edit-actions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 0.5rem;
    }
  }
</style>
