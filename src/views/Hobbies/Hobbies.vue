<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})

export default class Hobbies extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Hobbies';
}
</script>

<template>
  <BaseLayout/>
</template>
