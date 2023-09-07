<template>
  <div class="p-3">
    <div class="ml-60 max-w-screen-lg flex items-center justify-center">
      <RouterLink to="/" class="mx-2 btn">Home</RouterLink>
      <RouterLink to="/all" class="mx-2 btn">All Quotes</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
  store.commit("GetAllQuotes");
});
</script>
