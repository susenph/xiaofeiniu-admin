<template>
  <div class="main">
    <el-container>
      <!-- 左侧的菜单栏 -->
      <el-aside width="200px">
        <el-menu>
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">全局设置</span>
          </el-menu-item>
          
          <el-menu-item index="3">
            <i class="el-icon-message"></i>
            <span slot="title">菜品类别</span>
          </el-menu-item>
          
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title"></span>
          </el-menu-item>

          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">全局设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部的信息栏 -->
        <el-header>顶部</el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    //create/mount/update/destroy
    beforeCreate() {
      //组件创建之前先要检查是否已经等了为管理员
      if(!this.$store.state.adminName){
        this.$router.push('/login'); //未登录则跳转
      }
    }
  }
</script>

<style lang="scss">
  
</style>
