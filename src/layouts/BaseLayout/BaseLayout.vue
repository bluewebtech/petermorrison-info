<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

/**
 * Components
 */
import Navigation from './@Components/Navigation';
import Particles from './@Components/Particles';

@Options({
  components: {
    Navigation,
    Particles,
  },
})

export default class BaseLayout extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'BaseLayout';
}
</script>

<template>
  <Particles/>
  <section class="hero is-fullheight is-unselectable">
    <Navigation/>
    <div class="hero-body">
      <div class="container">
        <slot name="content"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.particles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}

.hero {
  background: none;

  .hero-body {
    .container {
      margin: -100px 200px 0 200px;
    }
  }
}
</style>
