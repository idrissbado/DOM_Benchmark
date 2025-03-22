<script>
  import { onMount } from "svelte";
  import TodoForm from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";
  import TodoFilters from "./TodoFilters.svelte";

  let todos = [];
  let activeFilter = "all";

  // Load initial todos
  onMount(() => {
    // Get from localStorage or use default data
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      todos = JSON.parse(savedTodos);
    } else {
      todos = [
        { id: "1", name: "Learn Svelte", priority: "high", completed: false },
        {
          id: "2",
          name: "Build a to-do app",
          priority: "medium",
          completed: false,
        },
        { id: "3", name: "Take a break", priority: "low", completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });

  // Computed property for filtered todos
  $: filteredTodos =
    activeFilter === "all"
      ? todos
      : todos.filter((todo) => todo.priority === activeFilter);

  function addTodo(event) {
    const newTodo = event.detail;
    todos = [...todos, { ...newTodo, id: Date.now().toString() }];
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function updateTodo(event) {
    const updatedTodo = event.detail;
    todos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function removeTodo(event) {
    const id = event.detail;
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function setFilter(event) {
    activeFilter = event.detail;
  }
</script>

<div class="todos-container">
  <TodoForm on:todo-added={addTodo} />

  <TodoFilters {activeFilter} on:filter-changed={setFilter} />

  <TodoList
    todos={filteredTodos}
    on:todo-updated={updateTodo}
    on:todo-removed={removeTodo}
  />
</div>

<style>
  .todos-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
