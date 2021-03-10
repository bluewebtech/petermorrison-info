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
  <section class="hero is-unselectable">
    <Navigation/>
    <div class="hero-body">
      <div class="container">
        <slot name="content"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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
    animation: fadeInAnimation ease 1s;

    .container {
      padding: 20px 50px;

      .columns {
        margin: 0;

        .column {
          h2 {
            padding-left: 6px;
            height: 60px;
            color: #0a72af;
            font-size: 48px;
            font-weight: bolder;
            -webkit-text-stroke: 1px #ffffff;
          }

          p {
            padding: 20px 10px;
            font-size: 24px;
            line-height: 40px;
          }
        }
      }
    }
  }
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media only screen and (max-width: 1024px) {
  .hero {
    .hero-body {
      .container {
        margin: -100px auto 0 auto;
      }
    }
  }
}
</style>
