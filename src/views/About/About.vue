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
            v-for="({icon, url}, key) in $store.state.social.items"
            :href="url"
            target="_blank"
            :key="key"
          >
            <span :class="`has-text-white fab ${icon} fa-2x has-margin-right-30`"/>
          </a>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
