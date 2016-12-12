import Vue from 'vue' // 뷰 코어
import Axios from 'axios' //AJAX 통신모듈
import VueRouter from 'vue-router' //라우팅모듈
import layout from './layout.vue' //메인 페이지 프레임
import rbl from './components/jsmodules.js' // 글로벌 유틸모듈 로드
window.rbl=rbl // 디버그용
//로드 확인
console.log("Vue :",Vue)
console.log("Axios :",Axios)
console.log("VueRouter :",VueRouter)
console.log("layout :",layout)
console.log("rbl.toggle : ",rbl.toggleClass)
// console.log("what is this? ",this)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<layout/>',
  components: { layout }
})
