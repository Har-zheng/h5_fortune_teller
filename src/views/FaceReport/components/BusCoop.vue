<template>
  <BaseRouterTransition>
    <div class="home"></div>
  </BaseRouterTransition>
</template>
<script>
import BaseRouterTransition from '../../../components/BaseRouterTransition'
import { Dialog } from 'vant';
import { mapState } from 'vuex'

export default {
  components: {
    BaseRouterTransition
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: url("../../../assets/images02/v2/hezuo.jpg") no-repeat;
  background-size: 100%;
  height: 100%;
  overflow: hidden;
  width: 100%;
  color: #fff;
  background-color: #fff;
}
</style>