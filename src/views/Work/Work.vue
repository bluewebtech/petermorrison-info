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
      title: 'Work',
    };
  },
})

export default class Work extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'Work';
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="columns">
        <div class="column">
          <p>I’ve been working within the tech industry for over 15 years as both a computer and network technician but my experience is primarily with web development and software engineering. Within the past 6 years I have gained great experience working as a remote software engineer with a home office that is set up for comfort and productivity.</p>
          <p>Also a pretty chill person that enjoys and prefers working with great, honest people.</p>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
