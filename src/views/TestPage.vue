<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore();
</script>

<template>
  <div>
    <div data-testid="name">{{ store.user.name }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
