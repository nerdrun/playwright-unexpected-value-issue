import { createTestingPinia } from '@pinia/testing';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import type { RouteRecordRaw } from 'vue-router';
import { type StoreState } from 'pinia';
import { useStore } from '@/stores/store';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../src/views/HomeView.vue'

export type HooksConfig = {
  store?: StoreState<ReturnType<typeof useStore>>;
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
];

beforeMount<HooksConfig>(async ({ app, hooksConfig }) => {
  const router = createRouter({
    history: createWebHistory(''),
    routes,
  });

  const pinia = createTestingPinia({
    initialState: {
      store: hooksConfig?.store,
    },
    stubActions: false,
    createSpy(args) {
      return () => args;
    },
  });
  app.use(router).use(pinia);
});