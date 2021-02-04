<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({})
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
      <div class="columns">
        <div class="column">
          <h1>Hello,</h1>
          <h2>I’m Pete,</h2>
          <h3>Software Engineer</h3>
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
    }

    h2 {
      padding-left: 5px;
      height: 60px;
      color: #3090C7;
      font-size: 48px;
      font-weight: 600;
    }

    h3 {
      padding: 5px 10px;
      height: 40px;
      color: #000000;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
</style>
