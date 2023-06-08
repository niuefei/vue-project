<template>
  <div class="container1">
    <sub-list class="sub-list"/>
    <device-data class="device" />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.container1 {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  .sub-list {
    width: 250px;
  }
  .device {
    width: calc(100% - 300px);
  }
}
</style>