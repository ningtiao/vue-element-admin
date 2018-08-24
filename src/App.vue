<template>
  <transition name="rotate-fall">
    <div id="app">
      <router-view class="app-router-view"></router-view>
    </div>
  </transition>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'App'
}

</script>
<style>
  #app .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
</style>
