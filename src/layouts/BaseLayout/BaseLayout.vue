<script lang="ts">
/**
 * Modules
 */
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseLayout extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name  = 'BaseLayout';

  /**
   * The mobile menu display status.
   *
   * @var {Boolean}
   */
  show = false;

  /**
   * Get the mobile menu styles.
   *
   * @return {String}
   */
  get mobile(): string {
    const base = 'navbar-menu is-capitalized';
    return (this.show ? `${base} animated fadeIn is-active` : base);
  }

  /**
   * Get all available routes.
   *
   * @return {String[]}
   */
  get routes(): string[] {
    return (this.$router as any).options.routes;
  }

  /**
   * Trigger the mobile menu show/hide event.
   *
   * @return {Void}
   */
  onShow(): void {
    this.show = (!this.show);
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
  <section class="hero is-unselectable">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div
              class="navbar-burger burger"
              data-target="navbarMenuHeroB"
              @click="onShow"
            >
              <span/>
              <span/>
              <span/>
            </div>
          </div>
          <div :class="mobile">
            <RouterLink
              v-for="({ path, name }, key) in routes"
              :key="key"
              :class="styles(name)"
              v-text="name"
              :to="path"
            />
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container animated fadeIn">
        <slot name="content"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.navbar-burger.burger {
  span {
    color: $white;
  }
}

@media only screen and (max-width: 1024px) {
  .hero-body {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .navbar-burger {
    width: 100% !important;
  }

  .navbar-menu {
    &.is-active {
      margin: 0 !important;
      background: none;
    }
  }
}
</style>
