import { defineStore } from 'pinia';
import { ref } from 'vue';

export type User = {
  name: string;
  age: number;
  toUserString: () => string; // If you comment this line and uncomment line 12 it works
};

export const useStore = defineStore('store', () => {
  const user = ref<User>({ name: 'Steve', age: 20, toUserString: () => '' });
  // const user = ref<User>({ name: 'Steve', age: 20 }); // this works

  return {
    user,
  };
});
