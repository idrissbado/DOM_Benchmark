import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    todos: [],
    loading: false,
    error: null
  },
  
  getters: {
    allTodos: (state) => state.todos,
    
    todoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    },
    
    todosByPriority: (state) => (priority) => {
      return state.todos.filter(todo => todo.priority === priority);
    },
    
    todosCount: (state) => state.todos.length
  },
  
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    
    UPDATE_TODO(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
    
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    
    SET_LOADING(state, status) {
      state.loading = status;
    },
    
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  
  actions: {
    fetchTodos({ commit }) {
      commit('SET_LOADING', true);
      console.log('Fetching todos...');
      
      // Simulate API call
      setTimeout(() => {
        try {
          // Get from localStorage or use default data
          const savedTodos = localStorage.getItem('todos');
          const todos = savedTodos 
            ? JSON.parse(savedTodos) 
            : [
                { id: uuidv4(), name: 'Learn Vue.js', priority: 'high', completed: false },
                { id: uuidv4(), name: 'Build a to-do app', priority: 'medium', completed: false },
                { id: uuidv4(), name: 'Take a break', priority: 'low', completed: false }
              ];
              
          commit('SET_TODOS', todos);
          commit('SET_ERROR', null);
          console.log('Todos fetched successfully:', todos);
        } catch (error) {
          commit('SET_ERROR', 'Failed to fetch todos');
          console.error('Error fetching todos:', error);
        } finally {
          commit('SET_LOADING', false);
        }
      }, 300);
    },
    
    addTodo({ commit, state }, todo) {
      const startTime = performance.now();
      console.log('Adding todo:', todo);
      
      // Add ID if not provided
      const newTodo = { 
        ...todo, 
        id: todo.id || uuidv4(),
        completed: todo.completed || false
      };
      
      commit('ADD_TODO', newTodo);
      
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
      
      const endTime = performance.now();
      console.log(`Todo added in ${(endTime - startTime).toFixed(2)}ms`);
      
      return newTodo;
    },
    
    updateTodo({ commit, state }, todo) {
      const startTime = performance.now();
      
      commit('UPDATE_TODO', todo);
      
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
      
      const endTime = performance.now();
      console.log(`Todo updated in ${(endTime - startTime).toFixed(2)}ms`);
      
      return todo;
    },
    
    removeTodo({ commit, state }, id) {
      const startTime = performance.now();
      
      commit('REMOVE_TODO', id);
      
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
      
      const endTime = performance.now();
      console.log(`Todo removed in ${(endTime - startTime).toFixed(2)}ms`);
    }
  }
});