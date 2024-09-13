import { createTestingPinia } from '@pinia/testing';
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import { type StoreState } from 'pinia';
import { useStore } from '@/stores/store';

export type HooksConfig = {
  store?: StoreState<ReturnType<typeof useStore>>;
};

beforeMount<HooksConfig>(async ({ app, hooksConfig }) => {

  const pinia = createTestingPinia({
    initialState: {
      store: hooksConfig?.store,
    },
    stubActions: false,
    createSpy(args) {
      return () => args;
    },
  });
  app.use(pinia);
});