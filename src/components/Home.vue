<template>
  <el-container class="container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside class="aside">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <router-view :key="$route.path" />
      </el-main>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>

</style>