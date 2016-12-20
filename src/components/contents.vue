<template>
<div class="content-wrapper">
  <!-- 본문 카드타일 래퍼 -->
  <!-- <main v-on:scroll="scrollFunction"> -->
  <main>
    <div v-for="page,index in contents_list"class="page">
      <!-- v-for 로 여러개 생성할 부분 -->
    <ul class="card-frame">
      <li v-for="contents in page" class="card-single"><a href="">
        <img v-bind:src=contents.img_thumbnail alt="background">
        <div class="card-texts">
          <p class="card-hashtags">
            <span class="hashtag-single" v-for="hashtags in contents.hashtags">{{hashtags}}</span>
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
        <span>{{(index)*n_post_initial_page+page.length}}</span>
        <span v-if="last_post_notice&&(index===(contents_list.length-1))">end of post</span>
      </div>
    </div>
    <!-- </transition-group> -->
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
      api_post: "",
      n_post_initial_page: 0,
      last_post_notice: false
    }
  },
  components: {   },
  methods: {
    addPostData(address,initial=false){
      this.axios.get(address).then((response) => {
        this.next_postpage_link = response.data.next
        if(!this.next_postpage_link){
          this.last_post_notice=true
        }
        //finding hashtag
        for (var n in response.data.results){
          var post = response.data.results[n]
          post.hashtags=this.findHashtag(post.content)
          console.log(post.hashtags)
        }

        this.contents_list = this.contents_list.concat([response.data.results])
        if (initial){
          this.n_post_initial_page = this.contents_list[0].length
        }
        if(!initial){
          window.eventbus.$emit('addpost_api_callfinished')
        }
      })
    },

    findHashtag(context){
      var hashtags = context.match(/#[ㄱ-ㅎA-Za-z0-9가-힣_-]*/g)
      for (var n in hashtags){
        hashtags[n]=hashtags[n].replace("#","")
      }
      return hashtags
    }
  },
  created: function(){
    var self = this
    this.api_post = parrot.server_dir+'/post/'
    this.addPostData(this.api_post,true)
    window.eventbus.$on('scroll',function(){
      self.addPostData(self.next_postpage_link)
    })
  }
}
</script>


<style lang='sass'>
  @import '../styles/contents.sass'
</style>
