<script lang="ts">
/**
 * Modules
 */
import { Component, Vue } from 'vue-property-decorator';
const randomColor = require('randomcolor');

@Component({
  /**
   * The page meta.
   *
   * @var {Object}
   */
  metaInfo() {
    return {
      title: 'Root',
    };
  },
})

export default class Root extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'Root';

  interval: any = null;

  /**
   * When triggered randomly change the image border color.
   *
   * @return {Void}
   */
  enterImage(): void {
    this.interval = setInterval(() => {
      const color = randomColor();
      const random = Math.floor(Math.random() * 100) + 1;
      (this.$refs.picture as any).style.border = `${random}px solid ${color}`;
    }, 200);
  }

  /**
   * When triggered revert the border back to the original state.
   *
   * @return {Void}
   */
  leaveImage(): void {
    (this.$refs.picture as any).style.border = '5px solid #ffffff';
    clearInterval(this.interval);
  }
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="columns">
        <div class="column has-text-centered-mobile">
          <h1>Hi.</h1>
          <h2 class="animated fadeIn delay-1s">I’m Peter.</h2>
          <h3 class="animated fadeIn delay-2s">Senior Software Engineer</h3>
        </div>
        <div class="column has-text-centered">
          <img
            class="has-cursor-pointer animated pulse"
            width="400"
            height="400"
            src="/images/profile.jpg"
            ref="picture"
            @mouseenter="enterImage"
            @mouseleave="leaveImage"
          >
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="scss">
h1 {
  margin-top: 40px !important;
  font-size: 96px;
}

h2 {
  margin-top: -30px !important;
  margin-left: 5px !important;
  font-size: 48px;
}

h3 {
  margin-left: 5px !important;
  font-size: 18px;
  font-style: italic;
}

h1, h2, h3 {
  margin: 0;
  padding: 0;
  font-weight: 200;
}

img {
  padding: 5px;
  border: 5px solid #ffffff;
  @include border-transition;

  &:hover {
    border: 5px solid #75bbeb;
  }
}
</style>