<template>
  <!-- router-view:展示路由对应的组件内容 -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/* flex布局类名 */
body,html{
  padding: 0;
  margin: 0;
}
/* 均匀分布在左右侧 */
.flex-float{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 中心线对齐（左右挨着对齐） */
.flex{
  display: flex;
  align-items: center;
}
.page_content{
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 20px;
  background: #fff;
  margin-top: 30px;
}
</style>
