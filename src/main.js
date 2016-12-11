import Vue from 'vue' // 뷰 코어
import Axios from 'axios' //AJAX 통신모듈
import VueRouter from 'vue-router' //라우팅모듈
import layout from './layout.vue' //메인 페이지 프레임
//로드 확인
console.log("Vue :",Vue)
console.log("Axios :",Axios)
console.log("VueRouter :",VueRouter)
console.log("layout :",layout)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<layout/>',
  components: { layout }
})
