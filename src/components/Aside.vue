<template>
  <el-menu style="height: 100%"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router>
            <el-submenu index="/">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>设置</span>
                </template>
                    <el-menu-item index="/index">首页</el-menu-item>
                    <el-menu-item index="/test">test</el-menu-item>
            </el-submenu>
            <el-submenu index="/ts">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>设置</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/ts/tt">test2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
</template>

<script>
export default {
name: "Aside"
}
</script>

<style scoped>

</style>