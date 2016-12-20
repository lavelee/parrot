<template>
<div class="content-wrapper">
  <!-- 본문 카드타일 래퍼 -->
  <!-- <main v-on:scroll="scrollFunction"> -->
  <main>
  <ul class="card-frame">
    <!-- v-for 로 여러개 생성할 부분 -->
    <li v-for="contents in contents_list" class="card-single"><a href="">
      <img v-bind:src=contents.img_thumbnail alt="background">
      <div class="card-texts">
      <p class="card-hashtags">
        <span class="hashtag-single">333</span>
      </p>
      <p class="card-short-content">{{contents.content}}</p>
      <p class="card-date">{{contents.created_date.slice(0,16).replace("T"," ")}}</p>
      <p class="card-distance">{{contents.distance}}</p>
      <p class="card-stars">{{contents.like_users_counts}}</p>
      <p class="card-replies">{{contents.comments_counts}}</p>
    </div>
    </a></li>

  </ul>

<div class="page-splitter">
  <span>10</span>
</div>

<!-- <ul class="card-frame">
<li class="card-single"><a href="">
  <img src="http://placehold.it/728x490" alt="background">
  <div class="card-texts">
  <p class="card-hashtags">
    <span class="hashtag-single">333</span>
  </p>
  <p class="card-short-content">1-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p class="card-date">2016-12-12</p>
  <p class="card-distance">12km</p>
  <p class="card-stars">5</p>
  <p class="card-replies">11</p>
</div>
</a></li>
</ul>
<div class="page-splitter">
<span>10</span>
</div> -->






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

import parrot from '../config.js'
export default {
  name: 'Contents',
  data: function(){
    return {
      contents_list: [],
      next_postpage_link: "",
      api_post: ""
    }
  },
  components: { },
  methods: {
    addPostData(address,initial=false){
      // console.log("this: ",this)
      // console.log(this.api_post)
      this.axios.get(this.api_post).then((response) => {
        // console.log(response)
        console.log("api responded")
        this.next_postpage_link = response.data.next
        this.contents_list = this.contents_list.concat(response.data.results)
        console.log("parent can_retrive before responding",this.$parent.can_retrive)
        if(!initial){
          this.$parent.can_retrive=true
          console.log("parent can_retrive modification",this.$parent.can_retrive)
        }
      })
    }
  },
  created: function(){
    var self = this
    this.api_post = parrot.server_dir+'/post/'
    this.addPostData(this.api_post,true)
    window.eventbus.$on('scroll',function(){
      // console.log("this:",this)
      self.addPostData(this.next_postpage_link)
    })
  }
}





</script>



<style lang='sass'>
  @import '../styles/contents.sass'
</style>
