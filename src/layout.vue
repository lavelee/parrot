<template>
<!-- <div class="wrapper menu-active"> -->
<div v-on:scroll="scrollFunction(el_scroll_window,el_wrapper)" class="scroll-window">
<div class="wrapper">
<h1 class="readable-hidden">Parrot</h1>

  <!-- 로그인 팝업창 부분 -->
  <!-- <div class="login-dim"> -->
  <div class="login-dim hidden">
  <section class="login">
    <h1 class="readable-hidden">로그인</h1>
    <form class="login_input" action="">
      <label for="login_id" class="readable-hidden">아이디</label>
      <input type="text" id="login_id" required name="login_id" placeholder="your id">
      <label for="login_pass" class="readable-hidden">비밀번호</label>
      <input type="password" id="login_pass" required placeholder="password" name="login_pass">
      <div class="login_action">
        <input type="submit" value="로그인">
        <a href="">회원가입</a>
      </div>
    </form>
    <div class="login-other">
      <a href="">비밀번호찾기</a>
      <a href="" class="login-close-button"><img src="" alt="닫기버튼"></a>
    </div>
  </section>
  </div>

<!-- 메뉴 부분 -->
<header class="parrot-header">
  <div class="top-header">
  <a href="#/"><h1>Parrot</h1></a>
    <a href="#/join">&nbsp;join</a>
    <a href="#/write">&nbsp;write</a>
    <a v-on:click.prevent="toggleClass('.login-dim','hidden')" href="#">&nbsp;login</a>
  <a href="#" class="login-icon" title="로그인"><i class="fa fa-sign-in" aria-hidden="true"></i></a>
  <a href="#" class="write-icon" title="글쓰기"><i class="fa fa-pencil" aria-hidden="true"></i></a>
  <button class="open-menu-icon" title="메뉴" v-on:click="toggleClass('.wrapper','menu-active')" ><i class="fa fa-bars" aria-hidden="true"></i></button>
</div>
  <nav class="app-menu"><img src="/" alt="">
    <ul class="menu-list hidden">메뉴
      <li><a href="./join.html" class="loggedin-hidden">회원가입</a></li>
      <li><h2 class="readable-hidden">접속자정보</h2></li>
      <li><img src="/" alt="아바타" class= "login-hidden">사용자 이미지</li>
      <li><p class= "login-hidden">id e-mail</p></li>
      <li><a href="" class= "login-hidden">사용자 정보 수정</a></li>
      <li class= "login-hidden">로그아웃</li>
      <li><a>내가쓴글</a></li>
      <li><a>좋아요누른글</a></li>
      <li><a>가까운글</a></li>
    </ul>
  <form action="serch">
    <img src="/" alt="searchicon">
    <input type="search">
    <button type="button" name="button">search</button>
  </form>
  </nav>
</header>

<!-- 메인 컨텐츠 부분 -->
<keep-alive>
<router-view></router-view>
</keep-alive>
<!-- <div class="main-contents">
  <contents></contents>
  <join></join>
  <write></write>
</div> -->

</div>
</div>
</template>

<style lang='scss'>
  @import './styles/reset.scss';
  @import './assets/font-awesome/scss/font-awesome.scss';
</style>

<style lang='sass'>
  @import './styles/modules.sass'
  @import './styles/layout.sass'
</style>

<script>
// console.log("show this in vue script:",this)
import rbl from './components/jsmodules.js' // 글로벌 유틸모듈 로드
var can_retrive = true

// export to html
export default {
  name: 'layout',

  components: {
    // contents, join, write
  },

  data: function(){
    return {
      scroll_position: 0.0,
      el_scroll_window: "",
      el_wrapper: "",
      scroll_now: 0,
      scroll_end: 0,
    }
  },

  mounted: function(){

    //매번 엘리먼트를 찾아오지 않기위해 mounted에 분리해둔 엘리먼트 찾기
    console.log("mounted! finding element..")
    this.el_scroll_window = document.querySelector(".scroll-window")
    this.el_wrapper = document.querySelector(".wrapper")
  },

  methods:{
    toggleClass(selector, classname){
      rbl.toggleClass(selector,classname)},

    closeMenu(selector,classname){
      var _element = document.querySelector(selector)
      // menu will only be closed when it's opened.
      var left=window.Number.parseFloat(window.getComputedStyle(_element).left)
      console.log(left)
      if(left>30){rbl.delClass(selector,classname)}},

    scrollFunction(el_scroll_window,el_wrapper){
      //최대 스크롤은 전체길이에서 화면세로뷰만큼 뺀 값이다.
      var scroll_end = parseInt(window.getComputedStyle(el_wrapper).height) -window.innerHeight
      var scroll_present_pos = parseInt(el_scroll_window.scrollTop)
      var scroll_left = scroll_end - scroll_present_pos
      var scroll_left_threshold = 100
      console.log("wrapper max scroll = ", scroll_end)
      console.log("present scroll position = ",scroll_present_pos)
      console.log("scroll_left = ",scroll_left)
      window.eventbus.$emit('scroll')

      if(scroll_left < scroll_left_threshold && can_retrive){
        can_retrive = false
        console.log("retrive more data")
      }

    }
  }

}


</script>
