<template>
  <div class="todos-container">
    <h1 class="page-title">Todo List</h1>
    
    <div class="performance-metrics" v-if="showMetrics">
      <h3>Performance Metrics</h3>
      <p>Initial render time: {{ metrics.initialRenderTime.toFixed(2) }}ms</p>
      <p>Last update time: {{ metrics.lastUpdateTime.toFixed(2) }}ms</p>
      <button @click="showMetrics = false" class="btn-secondary">Hide Metrics</button>
    </div>
    <button v-else @click="showMetrics = true" class="btn-secondary">Show Metrics</button>
    
    <div class="todos-layout">
      <!-- Todo Form -->
      <TodoForm @todo-added="onTodoAdded" />
      
      <!-- Filters -->
      <TodoFilters 
        :activeFilter="activeFilter" 
        @filter-changed="setFilter" 
      />
      
      <!-- Loading state -->
      <div v-if="loading" class="loading-container">
        <LoadingSpinner />
      </div>
      
      <!-- Error state -->
      <div v-else-if="error" class="error-message">
        {{ error }}
        <button @click="fetchTodos" class="btn-secondary">Retry</button>
      </div>
      
      <!-- Empty state -->
      <div v-else-if="filteredTodos.length === 0" class="empty-state">
        <p>No tasks found. Add a new task to get started!</p>
      </div>
      
      <!-- Todo List -->
      <TodoList 
        v-else
        :todos="filteredTodos" 
        @todo-updated="onTodoUpdated"
        @todo-removed="onTodoRemoved"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive, nextTick } from 'vue';
import { useStore } from 'vuex';
import TodoForm from '@/components/todos/TodoForm.vue';
import TodoList from '@/components/todos/TodoList.vue';
import TodoFilters from '@/components/todos/TodoFilters.vue';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';

const store = useStore();
const activeFilter = ref('all');
const showMetrics = ref(false);

// Performance metrics
const metrics = reactive({
  initialRenderTime: 0,
  lastUpdateTime: 0
});

// Computed properties
const todos = computed(() => store.getters.allTodos);
const loading = computed(() => store.state.loading);
const error = computed(() => store.state.error);

const filteredTodos = computed(() => {
  if (activeFilter.value === 'all') {
    return todos.value;
  } else {
    return store.getters.todosByPriority(activeFilter.value);
  }
});

// Methods
const fetchTodos = async () => {
  const startTime = performance.now();
  await store.dispatch('fetchTodos');
  metrics.initialRenderTime = performance.now() - startTime;
};

const setFilter = (filter) => {
  activeFilter.value = filter;
};

const onTodoAdded = (todo) => {
  const startTime = performance.now();
  store.dispatch('addTodo', todo);
  metrics.lastUpdateTime = performance.now() - startTime;
};

const onTodoUpdated = (todo) => {
  const startTime = performance.now();
  store.dispatch('updateTodo', todo);
  metrics.lastUpdateTime = performance.now() - startTime;
};

const onTodoRemoved = (id) => {
  const startTime = performance.now();
  store.dispatch('removeTodo', id);
  metrics.lastUpdateTime = performance.now() - startTime;
};

// Lifecycle hooks
onMounted(() => {
  console.time('TodosView Mounted');
  fetchTodos();
  console.timeEnd('TodosView Mounted');
  
  // Log to confirm component is mounted
  console.log('TodosView component mounted');
});
</script>

<style scoped>
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