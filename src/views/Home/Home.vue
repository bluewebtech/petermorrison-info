<script lang="ts">
/**
 * Modules
 */
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Home extends Vue {
  /**
   * The component name.
   *
   * @var {String}
   */
  public name = 'Home';
}
</script>

<template>
  <BaseLayout>
    <template v-slot:content>
      <div class="fibers">
        <div class="polygon_5"/>
        <div class="polygon_4"/>
        <div class="polygon_3"/>
        <div class="polygon_2"/>
        <div class="polygon_7"/>
        <div class="polygon_6"/>
      </div>

      <div class="columns">
        <div class="column">
          <h1>Hello,</h1>
          <h2>I’m Pete,</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<style lang="scss" scoped>
.columns {
  .column {
    h1 {
      height: 120px;
      color: #6D6D6D;
      font-size: 96px;
      font-weight: 600;
    }

    h2 {
      padding-left: 5px;
      height: 60px;
      color: #3090C7;
      font-size: 48px;
      font-weight: 600;
    }

    h3 {
      padding: 5px 10px;
      height: 40px;
      color: #000000;
      font-size: 24px;
      font-weight: 600;
    }
  }
}

.polygon_2 {
  animation: wind 5.5s infinite;
}

.polygon_3 {
  animation: wind 6s infinite;
}

.polygon_4 {
  animation: wind 5s infinite;
}

.polygon_5 {
  animation: wind 6.5s infinite;
}

.polygon_6 {
  animation: wind 8s infinite;
}

.polygon_7 {
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

  .polygon_2 {
    position: absolute;
    bottom: 0;
    right: 100px;
    width: 100%;
    height: 100%;
    background: url('/polygon_2.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .polygon_3 {
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 100%;
    height: 80%;
    background: url('/polygon_3.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .polygon_4 {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 100%;
    height: 60%;
    background: url('/polygon_4.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .polygon_5 {
    position: absolute;
    bottom: 0;
    left: -170px;
    width: 100%;
    height: 70%;
    background: url('/polygon_5.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .polygon_6 {
    position: absolute;
    bottom: 0;
    left: -35px;
    width: 100%;
    height: 35%;
    background: url('/polygon_6.svg');
    background-repeat: no-repeat;
    background-size: 40% 100%;
  }

  .polygon_7 {
    position: absolute;
    bottom: -30px;
    left: 100px;
    width: 100%;
    height: 60%;
    background: url('/polygon_7.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
