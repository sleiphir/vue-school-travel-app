<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <div>
    <TheNavigation />
    
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
