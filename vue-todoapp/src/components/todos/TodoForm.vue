<template>
    <div class="todo-form-container">
      <h2 class="form-title">Add New Task</h2>
      
      <form @submit.prevent="submitForm" class="todo-form">
        <div class="form-group">
          <label for="taskName">Task Name</label>
          <input 
            type="text" 
            id="taskName" 
            v-model="taskName" 
            class="form-control"
            placeholder="What needs to be done?"
            required
            ref="taskNameInput"
          />
        </div>
        
        <div class="form-group">
          <label for="priority">Priority</label>
          <select 
            id="priority" 
            v-model="priority" 
            class="form-control"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          class="btn-primary"
          :disabled="!taskName.trim()"
        >
          Add Task
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const emit = defineEmits(['todo-added']);
  
  // Form state
  const taskName = ref('');
  const priority = ref('medium');
  const taskNameInput = ref(null);
  
  // Methods
  const submitForm = () => {
    if (!taskName.value.trim()) return;
    
    const newTodo = {
      name: taskName.value.trim(),
      priority: priority.value,
      completed: false
    };
    
    emit('todo-added', newTodo);
    
    // Reset form
    taskName.value = '';
    priority.value = 'medium';
    
    // Focus back on input
    taskNameInput.value.focus();
    
    // Log to confirm form submission
    console.log('Todo form submitted:', newTodo);
  };
  
  // Lifecycle hooks
  onMounted(() => {
    // Focus on input when component mounts
    taskNameInput.value.focus();
    console.log('TodoForm component mounted');
  });
  </script>
  
  <style scoped>
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
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .form-control:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(var(--color-primary-rgb), 0.25);
  }
  
  .btn-primary {
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
  }
  
  .btn-primary:hover {
    background-color: var(--color-primary-dark);
  }
  
  .btn-primary:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  </style>