<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

/**
 * Components
 */
import Fibers from '@/components/Fibers';

@Options({
  components: {
    Fibers,
  },
})

export default class Home extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Home';
}
</script>

<template>
  <BaseLayout>
    <template v-slot:content>
      <Fibers/>
      <div class="columns">
        <div class="column">
          <h1>Hello,</h1>
          <h2>I’m Pete,</h2>
          <h3>Software Engineer.</h3>
          <div class="social">
            <a href="https://github.com/bluewebtech" target="_blank">
              <i class="fab fa-github fa-2x"/>
            </a>
            <a href="https://www.linkedin.com/in/peter-morrison-a3083414/" target="_blank">
              <i class="fab fa-linkedin-in fa-2x"/>
            </a>
            <a href="https://twitter.com/bluewebtech" target="_blank">
              <i class="fab fa-twitter fa-2x"/>
            </a>
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="scss" scoped>
.columns {
  .column {
    h1 {
      height: 120px;
      color: #6D6D6D;
      font-size: 96px;
      font-weight: 600;
      -webkit-text-stroke: 1px #ffffff;
    }

    h2 {
      padding-left: 6px;
      height: 60px;
      color: #0a72af;
      font-size: 48px;
      font-weight: bolder;
      -webkit-text-stroke: 1px #ffffff;
    }

    h3 {
      padding: 5px 10px;
      height: 40px;
      color: #000000;
      font-size: 24px;
      font-weight: bolder;
      -webkit-text-stroke: 1px #ffffff;
    }

    .social {
      .fab {
        padding: 10px 15px;
        color: #6D6D6D;
        cursor: pointer;
        -webkit-text-stroke: 1px #ffffff;
      }
    }
  }
}
</style>
