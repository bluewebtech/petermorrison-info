<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Fibers extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Fibers';
}
</script>

<template>
  <div class="fibers">
    <div class="fiber_4"/>
    <div class="fiber_3"/>
    <div class="fiber_2"/>
    <div class="fiber_1"/>
    <div class="fiber_6"/>
    <div class="fiber_5"/>
  </div>
</template>

<style lang="scss" scoped>
.fiber_1 {
  animation: wind 5.5s infinite;
}

.fiber_2 {
  animation: wind 6s infinite;
}

.fiber_3 {
  animation: wind 5s infinite;
}

.fiber_4 {
  animation: wind 6.5s infinite;
}

.fiber_5 {
  animation: wind 8s infinite;
}

.fiber_6 {
  animation: wind 9s infinite;
}

@keyframes wind {
  30% {
    transform: rotate(5deg);
    transform-origin: bottom;
  }
  30% {
    transform: rotate(10deg);
    transform-origin: bottom;
  }
  50% {
    transform: rotate(-15deg);
    transform-origin: bottom;
  }
}

.fibers {
  position: fixed;
  bottom: -50px;
  right: 200px;
  width: 600px;
  height: 90%;
  z-index: -1;

  .fiber_1 {
    position: absolute;
    bottom: 0;
    right: 100px;
    width: 100%;
    height: 100%;
    background: url('/fibers/fiber_01.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    stroke: black;
    stroke-width: 5px;
  }

  .fiber_2 {
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 100%;
    height: 80%;
    background: url('/fibers/fiber_02.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .fiber_3 {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 100%;
    height: 60%;
    background: url('/fibers/fiber_03.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .fiber_4 {
    position: absolute;
    bottom: 0;
    left: -170px;
    width: 100%;
    height: 70%;
    background: url('/fibers/fiber_04.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .fiber_5 {
    position: absolute;
    bottom: 0;
    left: -35px;
    width: 100%;
    height: 35%;
    background: url('/fibers/fiber_05.svg');
    background-repeat: no-repeat;
    background-size: 40% 100%;
  }

  .fiber_6 {
    position: absolute;
    bottom: -30px;
    left: 100px;
    width: 100%;
    height: 60%;
    background: url('/fibers/fiber_06.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  @media only screen and (max-width: 1280px) {
    right: 120px;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
}
</style>
