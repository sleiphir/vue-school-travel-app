<template>
  <section class="destination" v-if="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data.json'

const route = useRoute()
const destination = ref(null)

const fetchDestination = async () => {
  destination.value = data.destinations.find(destination => destination.slug === route.params.slug);
}

onMounted(fetchDestination)

watch(() => route.params, fetchDestination)
</script>