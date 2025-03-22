<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

// Performance monitoring
let startTime;

onMounted(() => {
  startTime = performance.now();
  console.log(`App component mounted at: ${new Date().toISOString()}`);
  
  window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`Total page load time: ${loadTime.toFixed(2)}ms`);
  });
});

onUnmounted(() => {
  console.log(`App component unmounted at: ${new Date().toISOString()}`);
});
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>