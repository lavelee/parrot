<template>
<logInDim></logInDim>


</template>

<script>
import logInDim from './components/app_partial/login-dim.vue'
import logIn from './components/app_partial/login.vue'
import contentsDetail from './components/app_partial/contents_detail/contents_detail.vue'

export default {
  name: 'layout'
  components: {
    logInDim, logIn, contentsDetail
  }
}
</script>

<style lang='sass'>

</style>
