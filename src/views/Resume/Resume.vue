<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})

export default class Resume extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Resume';
}
</script>

<template>
  <BaseLayout/>
</template>
