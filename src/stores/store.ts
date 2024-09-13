import { defineStore } from 'pinia';
import { ref } from 'vue';

export type User = {
  name: string;
  age: number;
  // toUserString: () => string;
};

export const useStore = defineStore('store', () => {
  // const user = ref<User>({ name: 'Steve', age: 20, toUserString: () => '' });
  const user = ref<User>({ name: 'Steve', age: 20 });

  return {
    user,
  };
});
