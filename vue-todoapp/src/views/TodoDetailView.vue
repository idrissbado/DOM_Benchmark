<template>
    <div class="todo-detail-container">
      <div v-if="loading" class="loading-container">
        <LoadingSpinner message="Loading task details..." />
      </div>
      
      <div v-else-if="error" class="error-message">
        {{ error }}
        <router-link to="/todos" class="btn-secondary">Back to Tasks</router-link>
      </div>
      
      <div v-else-if="!todo" class="not-found">
        <h2>Task Not Found</h2>
        <p>The task you're looking for doesn't exist or has been deleted.</p>
        <router-link to="/todos" class="btn-primary">Back to Tasks</router-link>
      </div>
      
      <div v-else class="todo-detail">
        <div class="detail-header">
          <h1 class="detail-title">Task Details</h1>
          <router-link to="/todos" class="btn-secondary">Back to List</router-link>
        </div>
        
        <div class="detail-card">
          <div class="detail-status" :class="`priority-${todo.priority}`">
            {{ todo.priority }}
          </div>
          
          <div class="detail-content">
            <h2 class="task-name">{{ todo.name }}</h2>
            
            <div class="task-meta">
              <div class="meta-item">
                <span class="meta-label">Status:</span>
                <span class="meta-value">{{ todo.completed ? 'Completed' : 'Pending' }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">ID:</span>
                <span class="meta-value">{{ todo.id }}</span>
              </div>
            </div>
            
            <div class="task-actions">
              <button 
                @click="toggleComplete" 
                class="btn-action"
                :class="todo.completed ? 'btn-warning' : 'btn-success'"
              >
                {{ todo.completed ? 'Mark as Pending' : 'Mark as Completed' }}
              </button>
              
              <button @click="startEditing" v-if="!isEditing" class="btn-action btn-info">
                Edit Task
              </button>
              
              <button @click="deleteTodo" class="btn-action btn-danger">
                Delete Task
              </button>
            </div>
            
            <div v-if="isEditing" class="edit-form">
              <h3>Edit Task</h3>
              <div class="form-group">
                <label for="editName">Task Name</label>
                <input 
                  type="text" 
                  id="editName" 
                  v-model="editedName" 
                  class="form-control"
                />
              </div>
              
              <div class="form-group">
                <label for="editPriority">Priority</label>
                <select 
                  id="editPriority" 
                  v-model="editedPriority" 
                  class="form-control"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div class="form-actions">
                <button @click="saveEdit" class="btn-primary">Save Changes</button>
                <button @click="cancelEdit" class="btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router';
  import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
  
  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  
  // Props
  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  });
  
  // State
  const loading = ref(true);
  const error = ref(null);
  const isEditing = ref(false);
  const editedName = ref('');
  const editedPriority = ref('');
  
  // Computed
  const todo = computed(() => store.getters.todoById(props.id));
  
  // Methods
  const fetchTodo = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      // Ensure todos are loaded
      if (store.state.todos.length === 0) {
        await store.dispatch('fetchTodos');
      }
      
      // Check if todo exists
      if (!todo.value) {
        error.value = 'Task not found';
      }
    } catch (err) {
      error.value = 'Failed to load task details';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };
  
  const toggleComplete = () => {
    if (!todo.value) return;
    
    const updatedTodo = {
      ...todo.value,
      completed: !todo.value.completed
    };
    
    store.dispatch('updateTodo', updatedTodo);
  };
  
  const startEditing = () => {
    if (!todo.value) return;
    
    editedName.value = todo.value.name;
    editedPriority.value = todo.value.priority;
    isEditing.value = true;
  };
  
  const saveEdit = () => {
    if (!todo.value || !editedName.value.trim()) return;
    
    const updatedTodo = {
      ...todo.value,
      name: editedName.value.trim(),
      priority: editedPriority.value
    };
    
    store.dispatch('updateTodo', updatedTodo);
    isEditing.value = false;
  };
  
  const cancelEdit = () => {
    isEditing.value = false;
  };
  
  const deleteTodo = () => {
    if (!todo.value) return;
    
    if (confirm('Are you sure you want to delete this task?')) {
      store.dispatch('removeTodo', todo.value.id);
      router.push('/todos');
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    fetchTodo();
  });
  </script>
  
  <style scoped>
  .todo-detail-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .loading-container, .error-message, .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    text-align: center;
  }
  
  .error-message {
    background-color: #f8d7da;
    color: #721c24;
    border-radius: 0.5rem;
  }
  
  .not-found {
    background-color: #f8f9fa;
    border-radius: 0.5rem;
    padding: 3rem 1rem;
  }
  
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .detail-title {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--color-primary);
  }
  
  .detail-card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .detail-status {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }
  
  .priority-low {
    background-color: var(--color-success);
  }
  
  .priority-medium {
    background-color: var(--color-warning);
  }
  
  .priority-high {
    background-color: var(--color-danger);
  }
  
  .detail-content {
    padding: 1.5rem;
  }
  
  .task-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .task-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #dee2e6;
  }
  
  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .meta-label {
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .meta-value {
    font-weight: 500;
  }
  
  .task-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .btn-action {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    color: white;
  }
  
  .btn-success {
    background-color: var(--color-success);
  }
  
  .btn-warning {
    background-color: var(--color-warning);
  }
  
  .btn-info {
    background-color: var(--color-info);
  }
  
  .btn-danger {
    background-color: var(--color-danger);
  }
  
  .edit-form {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #dee2e6;
  }
  
  .edit-form h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .form-control {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    font-size: 1rem;
  }
  
  .form-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 640px) {
    .detail-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .task-actions {
      flex-direction: column;
    }
    
    .btn-action {
      width: 100%;
    }
    
    .form-actions {
      flex-direction: column;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
    }
  }
  </style>