import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('@/views/TodosView.vue')
  },
  {
    path: '/todos/:id',
    name: 'TodoDetail',
    component: () => import('@/views/TodoDetailView.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guards for performance monitoring
router.beforeEach((to, from, next) => {
  console.time(`Navigation to ${to.name}`);
  next();
});

router.afterEach((to) => {
  console.timeEnd(`Navigation to ${to.name}`);
});

export default router;