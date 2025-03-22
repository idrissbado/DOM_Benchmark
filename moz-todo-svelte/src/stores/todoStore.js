import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

// Create a writable store with initial state
const createTodoStore = () => {
  const initialState = {
    todos: [],
    loading: false,
    error: null
  };
  
  const { subscribe, set, update } = writable(initialState);
  
  return {
    subscribe,
    
    fetchTodos: () => {
      update(state => ({ ...state, loading: true }));
      console.log('Fetching todos...');
      
      // Simulate API call
      setTimeout(() => {
        try {
          // Get from localStorage or use default data
          const savedTodos = localStorage.getItem('todos');
          const todos = savedTodos 
            ? JSON.parse(savedTodos) 
            : [
                { id: uuidv4(), name: 'Learn Svelte', priority: 'high', completed: false },
                { id: uuidv4(), name: 'Build a to-do app', priority: 'medium', completed: false },
                { id: uuidv4(), name: 'Take a break', priority: 'low', completed: false }
              ];
              
          update(state => ({ ...state, todos, loading: false, error: null }));
          console.log('Todos fetched successfully:', todos);
        } catch (error) {
          update(state => ({ ...state, loading: false, error: 'Failed to fetch todos' }));
          console.error('Error fetching todos:', error);
        }
      }, 300);
    },
    
    addTodo: (todo) => {
      const startTime = performance.now();
      console.log('Adding todo:', todo);
      
      // Add ID if not provided
      const newTodo = { 
        ...todo, 
        id: todo.id || uuidv4(),
        completed: todo.completed || false
      };
      
      update(state => {
        const updatedTodos = [...state.todos, newTodo];
        
        // Save to localStorage
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        
        return { ...state, todos: updatedTodos };
      });
      
      const endTime = performance.now();
      console.log(`Todo added in ${(endTime - startTime).toFixed(2)}ms`);
    },
    
    updateTodo: (updatedTodo) => {
      const startTime = performance.now();
      
      update(state => {
        const updatedTodos = state.todos.map(todo => 
          todo.id === updatedTodo.id ? updatedTodo : todo
        );
        
        // Save to localStorage
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        
        return { ...state, todos: updatedTodos };
      });
      
      const endTime = performance.now();
      console.log(`Todo updated in ${(endTime - startTime).toFixed(2)}ms`);
    },
    
    removeTodo: (id) => {
      const startTime = performance.now();
      
      update(state => {
        const updatedTodos = state.todos.filter(todo => todo.id !== id);
        
        // Save to localStorage
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        
        return { ...state, todos: updatedTodos };
      });
      
      const endTime = performance.now();
      console.log(`Todo removed in ${(endTime - startTime).toFixed(2)}ms`);
    }
  };
};

export const todoStore = createTodoStore();