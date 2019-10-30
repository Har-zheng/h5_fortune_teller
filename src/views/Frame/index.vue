<template>
  <div class="app">
    <div ios-scroll class="app--content">
      <base-router-transition>
        <router-view />
      </base-router-transition>
    </div>
    <div class="bar">
      <TabBar></TabBar>
    </div>
  </div>
</template>
<script>
import TabBar from './compnents/TabBars'
import BaseRouterTransition from '../../components/BaseRouterTransition'
export default {
  components: {
    TabBar,
    BaseRouterTransition
  }
}
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'PingFangSC-Regular', 'PingFangSC';
}
.app--content {
  flex: 1;
  overflow: scroll;
  z-index: 1;
}
.bar {
  z-index: 2;
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  height: 0;
}
</style>