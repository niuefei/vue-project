<template>
  <div class="container">
    {{ activeDeviceCode }}
  </div>
</template>

<script setup>
import { mainStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { activeDeviceCode } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.container {
  padding-top: 15px;
}
</style>