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

  /**
   * Get all of the available social items currently within state.
   *
   * @var {String[]}
   */
  get social(): string[] {
    return this.$store.state.social.items;
  }
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="columns">
        <div class="column">
          <p>Hi. I’m Peter.</p>
          <p>A Software Engineer residing right at the bottom of Southern New Jersey in a small beach town neighboring <a href="https://www.capemay.com/" target="_blank">Cape May</a>. No, I don’t surf, but really do enjoy going on family bike rides along side the ocean and beach. I also love tacos.</p>
          <p>Some of the many hobbies I have are, Playing guitar, writing fun code, photography, playing VR and currently learning how to develop games in 2D, 3D VR. Also toying around doing some Roblox development because Lua is awesome. So yea, you can say that I am currently geeking out on game development.</p>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-centered">
          <a
            v-for="({icon, tooltip, url}, key) in social"
            :href="url"
            :title="tooltip"
            target="_blank"
            :key="key"
          >
            <span :class="`has-text-white ${icon} fa-2x has-margin-right-30`"/>
          </a>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
