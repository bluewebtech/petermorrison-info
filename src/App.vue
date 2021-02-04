<script lang="ts">
/**
 * Modules
 */
import { onMounted } from 'vue';
import { Vue, setup } from 'vue-class-component';

const stuff = () => {
  onMounted(() => {
    // console.log('stuff.onMounted');
  });

  return {};
}

export default class Counter extends Vue {
  stuff = setup(() => stuff());
}
</script>

<template>
  <RouterView/>
</template>
