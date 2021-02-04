<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';
require('particles.js');

/**
 * Config
 */
import config from '@/config/particlesjs';

@Options({})

export default class Particles extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Particles';

  /**
   * The mounted lifecycle method.
   *
   * @return {Void}
   */
  mounted(): void {
    const windowObject = (window as any);
    windowObject.pJSDom = [];
    windowObject.particlesJS('particles', config);
  }
}
</script>

<template>
  <div
    class="particles"
    id="particles"
  />
</template>
