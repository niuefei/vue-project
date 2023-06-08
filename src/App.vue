<template>
  <div class="container">
    <Header-2 />
    <router-view class="view"></router-view>
    <Particles
      id="tsparticles"
      class="login-particles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    ></Particles>

    
  </div>
</template>

<script setup>
import {ref} from "vue"
import { options } from "./utils/bg";
import { loadFull } from "tsparticles";

const particlesInit = ref()
particlesInit.value = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = ref()
particlesLoaded.value = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<style scoped lang="scss">
</style>
