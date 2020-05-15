<script lang="ts">
/**
 * Modules
 */
import { Component, Vue } from 'vue-property-decorator';

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
            width="400"
            height="400"
            src="/images/profile.jpg"
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