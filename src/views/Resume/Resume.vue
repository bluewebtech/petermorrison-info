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
      title: 'Resume',
    };
  },
})

export default class Resume extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'Resume';
}
</script>

<template>
  <BaseLayout>
    <template slot="content">
      <div class="columns">
        <div class="column">
          <p>Typically I try to keep my resume up to date as much as possible. The best place to take a look would be through my <a href="https://www.linkedin.com/in/peter-morrison-a3083414/" target="_blank">LinkedIn</a> profile. There you can poke around at my experience and whatever certifications or trainings I might be doing or have complete.</p>
          <p>I do the <a href="https://github.com/bluewebtech" target="_blank">GitHub</a> thing as well and will go through times when I just have to get an idea out of my head. Even if it never gets finished. I really only use GitHub for personol brain dump type projects. You know. For fun!</p>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <p class="is-size-4">Courses</p>
          <p
            class="is-size-6"
            v-for="({title, url}, key) in $store.state.courses.items"
            :key="key"
          >
            <a
              :href="url"
              target="_blank"
            >
              <span v-text="title"/>
            </a>
          </p>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
