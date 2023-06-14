<template>
  <div class="container">
    <panel>
    <!-- <device-data-1/> -->
    <device-data-2 />
    </Panel>
  </div>
</template>

<script setup>
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const {  } = storeToRefs(store)

</script>

<style lang="scss" scoped>
.container {
  padding-top: 15px;
}
</style>