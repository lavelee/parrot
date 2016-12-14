<template>
<div class="content-wrapper">
  <!-- 본문 카드타일 래퍼 -->
  <main>
  <ul class="card-frame">
    <!-- v-for 로 여러개 생성할 부분 -->
    <li class="card-single"><a href="">
      <img src="http://placehold.it/728x490" alt="background"/>ㄹ</a>
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content">ssdfsdfsdf</p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </li>
    <!-- <li class="card-single"><a href="">
      <img src="http://placehold.it/300x590" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/680x420" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/420x680" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/1024x763" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/728x190" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/300x590" alt="background">
      <p class="card-hashtags hidden"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content hidden"></p>
      <p class="card-date hidden">2016-12-12</p>
      <p class="card-distance hidden">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies hidden">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/680x420" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/420x680" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li>
    <li class="card-single"><a href="">
      <img src="http://placehold.it/1024x763" alt="background">
      <p class="card-hashtags"><span class="hashtag-single">333</span><span class="hashtag-single">444</span></p>
      <p class="card-short-content"></p>
      <p class="card-date">2016-12-12</p>
      <p class="card-distance">12km</p>
      <p class="card-stars">5</p>
      <p class="card-replies">11</p>
      </a></li> -->
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
  @import '../styles/contents.sass'
</style>
