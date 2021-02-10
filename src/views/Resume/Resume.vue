<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})

export default class Resume extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Resume';
}
</script>

<template>
  <BaseLayout>
    <template v-slot:content>
      <div class="columns">
        <div class="column">
          <h2><span class="has-text-black">B</span>ackground</h2>
          <p>I’ve been working within the tech industry for over 15 years as both a computer and network technician but my experience is primarily with web development and software engineering. Within the past 6 years I have gained great experience working as a remote software engineer with a home office that is set up for comfort and productivity.</p>
          <p>Also a pretty chill person that enjoys and prefers working with great, honest people.</p>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="scss" scoped>
.columns {
  margin-top: 65px;

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
</style>
