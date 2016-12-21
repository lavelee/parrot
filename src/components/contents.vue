<template>
<div class="content-wrapper">
  <!-- 본문 카드타일 래퍼 -->
  <!-- <main v-on:scroll="scrollFunction"> -->
  <main v-if="contents_list.length>0">
    <div v-for="page,index in contents_list"class="page">
      <!-- v-for 로 여러개 생성할 부분 -->
    <ul class="card-frame">
    <li v-for="contents in page" class="card-single">
    <router-link :to="{path: '/', query: {post_id: contents.id}}" v-on:click.native="retriveDetailPost">
      <img v-bind:src=contents.img_thumbnail alt="background">
      <div class="card-texts">
        <p class="card-hashtags">
          <span class="hashtag-single" v-for="hashtags in contents.hashtags">{{hashtags}}</span>
        </p>
        <p class="card-short-content">{{contents.content}}</p>
        <p class="card-date">{{contents.created_date}}</p>
        <p class="card-distance">{{contents.distance}}</p>
        <p class="card-stars">{{contents.like_users_counts}}</p>
        <p class="card-replies">{{contents.comments_counts}}</p>
      </div>
    </router-link>
    </li></ul>
      <div class="page-splitter">
        <span>{{(index)*n_post_initial_page+page.length}}</span>
        <span v-if="last_post_notice&&(index===(contents_list.length-1))">end of post</span>
      </div>
    </div>
    <!-- </transition-group> -->
  </main>




  <!-- 상세보기시 뜨는 창 구성 -->
  <section v-if="(post_id>0)&&(contents_detail.id)" class="detail-view-dim">
    <!-- 본문부분 -->
    <router-link class="detail-prev" :to="{path: '/', query: {post_id: contents_detail.id -1}}" v-on:click.native="retriveDetailPost">prev</router-link>
    <router-link class="detail-next" :to="{path: '/', query: {post_id: contents_detail.id +1}}" v-on:click.native="retriveDetailPost">next</router-link>
    <router-link class="detail-close" :to="{path: '/'}" v-on:click.native="retriveDetailPost">close</router-link>
    <div class="detail-view-wrapper">
      <!-- contents_detail -->
    <div class="detail-view">
      <img class="detail-image" v-bind:src=contents_detail.img alt="background">
      <div class="detail-texts">
        <!-- <p class="detail-hashtags">
          <span class="hashtag-single" v-for="hashtags in contents.hashtags">{{hashtags}}</span>
        </p> -->
        <p class="detail-short-content">{{contents_detail.content}}</p>
        <p class="detail-date">{{dateSlicer(contents_detail.created_date)}}</p>
        <p class="detail-distance">{{contents_detail.distance}}</p>
        <p class="detail-stars">{{contents_detail.like_users_counts}}</p>
        <p class="detail-replies">{{contents_detail.comments_counts}}</p>
      </div>
    </div>

  <!-- 댓글 섹션 -->
  <div class="comment-area">
    <!-- 댓글 리스트 부분. for로 처리 -->
    <ul v-if="comment_list.length" class="comment-list">
      <li v-for="comment in comment_list" class="comment-contents">
        <p>{{comment.content}}</p>
        <span>{{dateSlicer(comment.created_date)}}</span>
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
      comment_list: [],
      contents_list: [],
      next_postpage_link: "",
      api_post: parrot.server_dir+'/post/',
      n_post_initial_page: 0,
      last_post_notice: false,
      post_id: 10,
      contents_detail: {},
      router_position: this.$route,
    }
  },
  components: {   },
  methods: {
    dateSlicer(date){
      return date.slice(0,16).replace("T"," ")
    },
    addPostData(address,initial=false){
      this.axios.get(address).then((response) => {
        // console.log("api responded")
        // console.log("response: ",response)
        this.next_postpage_link = response.data.next
        if(!this.next_postpage_link){
          this.last_post_notice=true
        }
        //finding hashtag
        for (var n in response.data.results){
          var post = response.data.results[n]
          post.hashtags=this.findHashtag(post.content)
          post.created_date=this.dateSlicer(post.created_date)
          // console.log(post.hashtags)
        }
        //for grid pop
        response.data.results.pop()


        this.contents_list = this.contents_list.concat([response.data.results])
        if (initial){
          this.n_post_initial_page = this.contents_list[0].length
        }
        if(!initial){
          window.eventbus.$emit('addpost_api_callfinished')
        }
      })
    },

    retriveDetailPost(){
      // console.log("retrive detail fired")
      this.post_id = this.$route.query.post_id
      if(this.post_id>1){
        var address= this.api_post+this.post_id+"/"
        this.axios.get(address).then((response) => {
          this.contents_detail = response.data
        })
        address= address+"comment/"
        // console.log("address",address)
        // console.log("comment_list before: ",this.comment_list)
        this.axios.get(address).then((response) => {
          // console.log("response for comment",response)
          this.comment_list = response.data.results
          console.log("this.comment_list",this.comment_list)
        })
        console.log("comment_list after: ",this.comment_list)
      }
    },

    findHashtag(context){
      var hashtags = context.match(/#[ㄱ-ㅎA-Za-z0-9가-힣_-]*/g)
      for (var n in hashtags){
        hashtags[n]=hashtags[n].replace("#","")
      }
      return hashtags
    }
  },



  mounted: function(){
    console.log("comment_list",this.comment_list)
    this.addPostData(this.api_post,true)
    //event emitted from layout.vue scroll trigger
    var self = this
    window.eventbus.$on('scroll',function(){
      self.addPostData(self.next_postpage_link)
    })
    // console.log("this.router_position.post_id",this.router_position.post_id)
    if(this.router_position.query.post_id>0){
      // console.log("post_id>0 on mounted")
      this.retriveDetailPost()
    }
  }
}
</script>


<style lang='sass'>
  @import '../styles/modules.sass'
  @import '../styles/contents.sass'
</style>
