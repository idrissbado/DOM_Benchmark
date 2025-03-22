# Vue Todo App

A feature-rich Todo application built with Vue.js that demonstrates efficient DOM operations and performance optimization.

## Features

- Add tasks with name and priority levels
- View all tasks with visual priority indicators
- Update tasks (edit name or priority)
- Remove tasks from the list
- Filter tasks by priority
- Performance metrics tracking
- Responsive design for all devices

## Project Structure

## DOM Operations

This project demonstrates efficient DOM operations using Vue's reactive system:

- Uses Vue's reactivity system to track changes and update only what's necessary
- Implements proper list rendering with `v-for` and `:key` for optimal performance
- Uses `TransitionGroup` for smooth animations when adding/removing tasks
- Tracks and displays performance metrics for initial render and updates

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   git clone [https://github.com/idriss/vue-todo-app.git](https://github.com/yourusername/vue-todo-app.git)
   cd vue-todo-app

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

npm run build

This will generate a production-ready build in the `dist` directory.

## Performance Considerations

The application includes performance metrics tracking to demonstrate the efficiency of Vue's DOM operations:

- Initial render time
- Update time for adding, editing, and removing tasks
- Optimized list rendering with proper key management
- Efficient state management with Vuex

## License

MIT
