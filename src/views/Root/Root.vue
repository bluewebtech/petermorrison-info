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
          <h2>I’m Peter.</h2>
        </div>
        <div class="column has-text-centered">
          <img width="400" height="400" src="/images/profile.jpg">
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style scoped>
h1 {
  font-size: 96px;
}

h2 {
  font-size: 48px;
}

h1, h2 {
  margin: 0;
  padding: 0;
  font-weight: 200;
}
</style>