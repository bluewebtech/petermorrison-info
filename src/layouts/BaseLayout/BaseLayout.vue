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
   * Get all available routes.
   *
   * @return {String[]}
   */
  get routes(): string[] {
    return (this.$router as any).options.routes;
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
  <section class="hero">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <span
              class="navbar-burger burger"
              data-target="navbarMenuHeroB"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu is-capitalized">
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
