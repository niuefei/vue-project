<template>
  <div class="container">
    <div class="title">雨水管道管理系统</div>
    <el-menu
      mode="horizontal"
      background-color="#e232e"
      class="header"
      router
      :default-active="page"
      @select="handleSelect"
    >
      <el-menu-item class="header-item" index="1">
        <img src="@/assets/icon/introduce.png" class="item-img" alt="" />
        项目介绍
      </el-menu-item>
      <el-menu-item class="header-item" index="2">
        <img src="@/assets/icon/data.png" class="item-img" alt="" />
        数据总览
      </el-menu-item>
      <el-menu-item class="header-item" index="3">
        <img src="@/assets/icon/device.png" class="item-img" alt="" />
        设备
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100px;
  background-image: url(../../assets/images/head_bg.png);
  background-size: 100% 100%;
  .title {
    position: absolute;
    left: 50%;
    top: 40px;
    color: white;
    font-size: 25px;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
.header {
  z-index: 2;
  font-family: alimama;
  padding-right: 20px;
  display: flex;
  justify-content: right;
  border: 0;
  border-radius: 10px;
  .header-item {
    margin-left: 10px;
    font-size: 16px;
    .item-img {
      width: 20px;
    }
  }
}
</style>