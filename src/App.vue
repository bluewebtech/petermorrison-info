<script lang="ts">
/**
 * Modules
 */
import { defineComponent, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const name = 'App';
    const route = useRoute();

    watch(() => route.name, (name) => {
      (document as any).title = name;
    });

    return {};
  }
});
</script>

<template>
  <RouterView/>
</template>
