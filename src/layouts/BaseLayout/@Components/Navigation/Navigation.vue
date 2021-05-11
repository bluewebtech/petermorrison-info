<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

/**
 * Components
 */
import Avatar from '../Avatar';

@Options({
  components: {
    Avatar,
  },
})

export default class Navigation extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Navigation';

  /**
   * Get all available routes other than Home.
   *
   * @return {String[]}
   */
  get routes(): string[] {
    return (this.$router as any)
      .options.routes
      .filter(route => route.name !== 'Home')
    ;
  }

  /**
   * Get the route styles and add the is-active class
   * if the route is indeed the current.
   *
   * @param {String} route
   * @return {String}
   */
  styles(route: string): string {
    return (`navbar-item ${this.$route.name === route ? 'is-active' : ''}`);
  }
}
</script>

<template>
  <div class="hero-head">
    <nav class="navbar">
      <div class="navbar-brand">
        <Avatar/>
      </div>

      <div class="navbar-menu is-capitalized">
        <div class="navbar-start">
          <RouterLink
            v-for="({ path, name }, key) in routes"
            :key="key"
            :class="styles(name)"
            v-text="name"
            :to="path"
          />
        </div>

        <!--
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="theme white"/>
          </div>
          <div class="navbar-item">
            <div class="theme blue"/>
          </div>
          <div class="navbar-item">
            <div class="theme black"/>
          </div>
        </div>
        -->
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/config/mixins/_all';

.hero-head {
  .navbar {
    .navbar-menu {
      margin-left: 10px !important;
      justify-content: left;

      .navbar-start {
        .navbar-item {
          margin-top: 10px;
        }

        a {
          color: #6D6D6D;
          font-size: 12px;
          font-weight: 600 !important;
          text-transform: uppercase;
          @include color-transition;

          &:hover {
            background: none;
            color: #000000;
          }

          &.is-active {
            background: none;
            color: #3090C7;
          }
        }
      }

      .navbar-end {
        margin-right: 20px;

        .navbar-item {
          padding: 0 15px 0 0;

          .theme {
            height: 15px;
            width: 15px;
            cursor: pointer;
            border-radius: 50%;

            &.white {
              background: #ffffff;
              border: 1px solid #6D6D6D;
            }

            &.blue {
              background: #3090C7;
              border: 1px solid #3090C7;
            }

            &.black {
              background: #000000;
              border: 1px solid #000000;
            }
          }
        }
      }
    }
  }
}
</style>
