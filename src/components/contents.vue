<template>
<div class="">
  <!-- 본문 카드타일 래퍼 -->
  <main>
  <ul>
    <!-- v-for 로 여러개 생성할 부분 -->
    <li><a href="">
      <p class="card-date"></p>
      <p class="card-hashtag"></p>
      <p class="card-short-content"></p>
      <div><img src="" alt="card-location"><span>5km</span></div>
      <div><img src="" alt="card-ddabongs"><span>12</span></div>
      <div><img src="" alt="card-replies"><span>1</span></div>
      <!-- image는 a 의 background 로 넣음 -->
      </a></li>
  </ul>
  </main>

  <!-- 상세보기시 뜨는 창 구성 -->
  <section class="detail-view">
    <!-- 캐러셀 부분 -->
    <div class="carousel">

    </div>

  <!-- 댓글 섹션 -->
  <div class="comment-area">
    <!-- 댓글 리스트 부분. for로 처리 -->
    <ul class="comment-list">
      <li class="">
        <p>댓글을 불러옵니다</p>
        <span>날짜를 불러옵니다</span>
        <a href="">삭제</a>
        <a href=""><img src="" alt="">하트수</a>
      </li>
    </ul>
    <!-- 내가 댓글 쓰는 부분 -->
    <div class="write-comment-area">
      <form class="write-comment" action="index.html" method="post">
        <input type="text" name="" value="write a comment" autofocus="autofocus">
        <input type="submit" name="" value="save comment">
      </form>
    </div>
  </div>
  </section>
  </div>


</template>



<script>
export default {
  name: 'contents',
  components: { }
}
</script>



<style lang='sass'>

</style>
