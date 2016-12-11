<template>
<div class="wrapper">


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

  <!-- 로그인 팝업창 부분 -->
  <div class="login-dim">
  <section class="login">
    <h1 class="readable-hidden">로그인</h1>
    <form class="login" action="">
      <label for="login_id" class="readable-hidden">아이디</label>
      <input type="text" id="login_id">
      <label for="login_pass" class="readable-hidden">비밀번호</label>
      <input type="text" id="login_pass">
      <button>로그인</button>
      <a href="">회원가입</a>
    </form>
    <a href="">비밀번호찾기</a>
    <a href=""><img src="" alt="닫기버튼"></a>
  </section>
  </div>

</header>
<contents></contents>
<join></join>
<write></write>

</div>
</template>

<style lang='sass'>

</style>

<script>
import contents from './components/contents.vue'
import join from './components/join.vue'
import write from './components/write.vue'

export default {
  name: 'layout',
  components: {
    contents, join, write
  }
}
</script>
