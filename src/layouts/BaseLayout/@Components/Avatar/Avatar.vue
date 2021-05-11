<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({})

export default class Avatar extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Avatar';

  /**
   * The current rotation.
   *
   * @return {Number}
   */
  private rotate = 0;

  /**
   * The created lifecycle method.
   *
   * @return {Void}
   */
  created(): void {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  /**
   * The destroyed lifecycle method.
   *
   * @return {Void}
   */
  destroyed(): void {
    window.removeEventListener('mousemove', this.onMouseMove, true);
  }

  /**
   * Get the transform style of the follower.
   *
   * @return {String}
   */
  get transform(): string {
    return (`transform: rotate(${this.rotate}deg);`);
  }

  /**
   * Handle the events based on a mouse movement.
   *
   * @param {Object} event
   * @return {Void}
   */
  onMouseMove(event: any): void {
    const element = document.getElementById('follower');
    const centerX = (element.offsetLeft) + (element.offsetWidth / 2);
    const centerY = (element.offsetTop) + (element.offsetHeight / 2);
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const radians = Math.atan2(mouseX - centerX, mouseY - centerY);
    this.rotate = (radians * (180 / Math.PI) * -1) + 90;
  }
}
</script>

<template>
  <RouterLink
    to="/"
    class="navbar-item"
  >
    <div class="logo">
      <div class="avatar"/>
      <div
        class="follower"
        id="follower"
        :style="transform"
      >
        <div class="circle"/>
        <div class="triangle"/>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.navbar-item {
  .logo {
    cursor: pointer;

    .avatar {
      position: absolute;
      top: 20px;
      left: 24px;
      background: url('/profile.jpg');
      background-size: cover;
      height: 66px;
      width: 66px;
      border-radius: 50%;
      transform: rotate(0);
    }

    .follower {
      position: relative;
      top: 5px;
      left: 5px;
      margin: 0;
      padding: 0;
      height: 80px;
      width: 80px;
      border-radius: 50%;

      .circle {
        margin: 0;
        padding: 0;
        height: 80px;
        width: 80px;
        border: 3px solid #3090C7;
        border-radius: 50%;
      }

      .triangle {
        margin-top: -50px;
        margin-left: 78px;
        height: 0;
        width: 0;
        border-top: 8px solid transparent;
        border-left: 12px solid #3090C7;
        border-bottom: 8px solid transparent;
      }
    }
  }
}
</style>