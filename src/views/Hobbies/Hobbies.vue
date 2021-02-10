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
  <BaseLayout>
    <template v-slot:content>
      <div class="columns">
        <div class="column">
          <h2><span class="has-text-black">F</span>un</h2>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="scss" scoped>
.columns {
  .column {
    h2 {
      padding-left: 6px;
      height: 60px;
      color: #0a72af;
      font-size: 48px;
      font-weight: bolder;
      -webkit-text-stroke: 1px #ffffff;
    }
  }
}
</style>
