<script lang="ts">
/**
 * Modules
 */
import { Component, Vue } from 'vue-property-decorator';
const randomColor = require('randomcolor');

@Component
export default class ProfileImage extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  name = 'ProfileImage';

  /**
   * All possible border styles.
   *
   * @var {String[]}
   */
  borderStyles = [
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ];

  /**
   * The interval for the image styles.
   *
   * @var {Int}
   */
  interval: any = null;

  /**
   * The interval milliseconds timer.
   *
   * @var {Int}
   */
  milliseconds = 200;

  /**
   * When triggered randomly change the image border size, style and color.
   *
   * @return {Void}
   */
  onEnterImage(): void {
    this.interval = setInterval(() => {
      const color = this.randomBorderColor();
      const size = this.randomBorderSize();
      const style = this.randomBorderStyle();
      const border = (`${size} ${style} ${color}`);
      (this.$refs.picture as any).style.border = border;
    }, this.milliseconds);
  }

  /**
   * When triggered revert the border back to the original state
   * and clear the interval.
   *
   * @return {Void}
   */
  onLeaveImage(): void {
    this.setDefaultBorder();
    clearInterval(this.interval);
  }

  /**
   * Get a random border color.
   *
   * @return {String}
   */
  randomBorderColor(): string {
    return randomColor();
  }

  /**
   * Get a random border size.
   *
   * @return {String}
   */
  randomBorderSize(): string {
    const size = (Math.floor(Math.random() * 150) + 1).toString();
    return (`${size}px`);
  }

  /**
   * Get a random border style.
   *
   * @return {String}
   */
  randomBorderStyle(): string {
    const borders = this.borderStyles;
    const total = borders.length;

    return borders[Math.floor(Math.random() * total)];
  }

  /**
   * Set the default border settings.
   *
   * @return {Void}
   */
  setDefaultBorder(): void {
    (this.$refs.picture as any).style.border = '5px solid #ffffff';
  }
}
</script>

<template>
  <img
    class="has-cursor-pointer animated pulse"
    width="400"
    height="400"
    src="/images/profile.jpg"
    ref="picture"
    @mouseenter="onEnterImage"
    @mouseleave="onLeaveImage"
  />
</template>

<style lang="scss">
img {
  padding: 5px;
  border: 5px solid #ffffff;
  @include border-transition;

  &:hover {
    border: 5px solid #75bbeb;
  }
}
</style>
