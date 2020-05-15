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
      title: 'About',
    };
  },
})

export default class About extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'About';
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="columns">
        <div class="column">
          <p>Hi. I’m Peter.</p>
          <p>A Software Engineer residing right at the bottom of Southern New Jersey in a small beach town neighboring <a href="https://www.capemay.com/" target="_blank">Cape May</a>. No, I don’t surf, but really do enjoy going on family bike rides along side the ocean and beach. I also love tacos.</p>
          <p>Some of the many hobbies I have are, Playing guitar, writing fun code, photography, playing VR and currently learning how to develop games in VR and Roblox.</p>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <a
            href="https://www.linkedin.com/in/peter-morrison-a3083414/"
            target="_blank"
          >
            <span class="has-text-white fab fa-linkedin fa-2x has-margin-right-30"/>
          </a>
          <a
            href="https://github.com/bluewebtech"
            target="_blank"
          >
            <span class="has-text-white fab fa-github fa-2x has-margin-right-30"/>
          </a>
          <a
            href="https://twitter.com/bluewebtech"
            target="_blank"
          >
            <span class="has-text-white fab fa-twitter fa-2x has-margin-right-30"/>
          </a>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
