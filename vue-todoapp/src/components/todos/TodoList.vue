<template>
  <div class="todo-list-container">
    <h2 class="list-title">Tasks ({{ todos.length }})</h2>
    
    <TransitionGroup name="list" tag="ul" class="todo-list">
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        class="todo-item"
        :class="{
          'todo-low': todo.priority === 'low',
          'todo-medium': todo.priority === 'medium',
          'todo-high': todo.priority === 'high',
          'todo-completed': todo.completed
        }"
      >
        <TodoListItem 
          :todo="todo" 
          @update="updateTodo"
          @remove="removeTodo"
        />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['todo-updated', 'todo-removed']);

// Methods
const updateTodo = (updatedTodo) => {
  emit('todo-updated', updatedTodo);
};

const removeTodo = (id) => {
  emit('todo-removed', id);
};

onMounted(() => {
  console.log('TodoList component mounted, todos:', props.todos);
});
</script>

<style scoped>
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

/* List transitions */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>