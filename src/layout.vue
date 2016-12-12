<template>
<div class="wrapper">

  <!-- 로그인 팝업창 부분 -->
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
<header>
  <h1><a href="/index.html">Parrot</a></h1>
  <h2 class="loggedin-hidden"><img src="/" alt="로그인아이콘">로그인</h2>
  <h2 class="login-hidden"><img src="/" alt="글쓰기아이콘">글쓰기</h2>
  <h2>매뉴</h2>
  <nav class="menu-icon"><img src="/" alt="">
    <ul class="menu-list hidden">매뉴
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
<div class="main-contents">
  <contents></contents>
  <join></join>
  <write></write>
</div>

</div>
</template>

<style lang='scss'>
  @import './styles/reset.scss';
  @import './assets/font-awesome/scss/font-awesome.scss';
</style>

<style lang='sass'>
  @import './styles/modules.sass'
  @import './layout.sass'
</style>

<script>
// console.log("show this in vue script:",this)
// vue component import
import contents from './components/contents.vue'
import join from './components/join.vue'
import write from './components/write.vue'

// export to html
export default {
  name: 'layout',
  components: {
    contents, join, write
  }
}


</script>
