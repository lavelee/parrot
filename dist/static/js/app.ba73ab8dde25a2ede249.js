webpackJsonp([2,0],[function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(48),i=s(n),r=a(8),o=s(r),l=a(38),c=s(l),d=a(47),u=s(d),p=a(42),f=s(p),_=a(39),m=s(_),h=a(40),v=s(h),g=a(41),C=s(g);i.default.use(u.default);var w=[{path:"/",component:m.default},{path:"/join",component:v.default},{path:"/write",component:C.default},{path:"*",component:{template:'<div style="text-align: center">page not found</div>'}}],y=new u.default({routes:w});i.default.use(c.default,o.default),window.eventbus=new i.default,new i.default({el:"#app",template:"<layout/>",components:{layout:f.default},props:["axios","parrot"],router:y})},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(31),i=s(n);e.default={name:"Contents",data:function(){return{comment_list:[],contents_list:[],next_postpage_link:"",api_post:i.default.server_dir+"/post/",n_post_initial_page:0,last_post_notice:!1,post_id:10,contents_detail:{},router_position:this.$route}},components:{},methods:{dateSlicer:function(t){return t.slice(0,16).replace("T"," ")},addPostData:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.axios.get(t).then(function(t){e.next_postpage_link=t.data.next,e.next_postpage_link||(e.last_post_notice=!0);for(var s in t.data.results){var n=t.data.results[s];n.hashtags=e.findHashtag(n.content),n.created_date=e.dateSlicer(n.created_date)}t.data.results.pop(),e.contents_list=e.contents_list.concat([t.data.results]),a&&(e.n_post_initial_page=e.contents_list[0].length),a||window.eventbus.$emit("addpost_api_callfinished")})},retriveDetailPost:function(){var t=this;if(this.post_id=this.$route.query.post_id,this.post_id>1){var e=this.api_post+this.post_id+"/";this.axios.get(e).then(function(e){t.contents_detail=e.data}),e+="comment/",this.axios.get(e).then(function(e){t.comment_list=e.data.results,console.log("this.comment_list",t.comment_list)}),console.log("comment_list after: ",this.comment_list)}},findHashtag:function(t){var e=t.match(/#[ㄱ-ㅎA-Za-z0-9가-힣_-]*/g);for(var a in e)e[a]=e[a].replace("#","");return e}},mounted:function(){console.log("comment_list",this.comment_list),this.addPostData(this.api_post,!0);var t=this;window.eventbus.$on("scroll",function(){t.addPostData(t.next_postpage_link)}),this.router_position.query.post_id>0&&this.retriveDetailPost()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"join",components:{}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"write",components:{}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(30),i=s(n);e.default={name:"layout",components:{},data:function(){return{scroll_position:0,el_scroll_window:"",el_wrapper:"",scroll_now:0,scroll_end:0,can_retrive:!0}},mounted:function(){this.el_scroll_window=document.querySelector(".scroll-window"),this.el_wrapper=document.querySelector(".wrapper");var t=this;window.eventbus.$on("addpost_api_callfinished",function(){t.can_retrive=!0})},methods:{toggleClass:function(t,e){i.default.toggleClass(t,e)},closeMenu:function(t,e){var a=document.querySelector(t),s=window.Number.parseFloat(window.getComputedStyle(a).left);console.log(s),s>30&&i.default.delClass(t,e)},scrollFunction:function(t,e){var a=parseInt(window.getComputedStyle(e).height)-window.innerHeight,s=parseInt(t.scrollTop),n=a-s,i=100;n<i&&this.can_retrive&&(this.can_retrive=!1,console.log("retrive more data"),window.eventbus.$emit("scroll"))}}}},function(t,e){"use strict";var a=function(){var t=function(t,e){var a=document.querySelector(t);a.classList.contains(e)?a.classList.remove(e):a.classList.add(e)};return t}(),s=function(){var t=function(t,e){var a=document.querySelector(t);a.classList.remove(e)};return t}();t.exports={toggleClass:a,delClass:s}},function(t,e){"use strict";var a="http://team6-dev.ap-northeast-2.elasticbeanstalk.com";t.exports={server_dir:a}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){var s,n;a(32),s=a(26);var i=a(43);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(33),s=a(27);var i=a(44);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(34),s=a(28);var i=a(45);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(36),a(35),s=a(29);var i=a(46);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"content-wrapper"},[t.contents_list.length>0?e("main",[t._l(t.contents_list,function(a,s){return e("div",{staticClass:"page"},[e("ul",{staticClass:"card-frame"},[t._l(a,function(a){return e("li",{staticClass:"card-single"},[e("router-link",{attrs:{to:{path:"/",query:{post_id:a.id}}},nativeOn:{click:function(e){t.retriveDetailPost(e)}}},[e("img",{attrs:{src:a.img_thumbnail,alt:"background"}})," ",e("div",{staticClass:"card-texts"},[e("p",{staticClass:"card-hashtags"},[t._l(a.hashtags,function(a){return e("span",{staticClass:"hashtag-single"},[t._s(a)])})])," ",e("p",{staticClass:"card-short-content"},[t._s(a.content)])," ",e("p",{staticClass:"card-date"},[t._s(a.created_date)])," ",e("p",{staticClass:"card-distance"},[t._s(a.distance)])," ",e("p",{staticClass:"card-stars"},[t._s(a.like_users_counts)])," ",e("p",{staticClass:"card-replies"},[t._s(a.comments_counts)])])])])})])," ",e("div",{staticClass:"page-splitter"},[e("span",[t._s(s*t.n_post_initial_page+a.length)])," ",t.last_post_notice&&s===t.contents_list.length-1?e("span",["end of post"]):t._e()])])})," "]):t._e()," "," ",t.post_id>0&&t.contents_detail.id?e("section",{staticClass:"detail-view-dim"},[e("router-link",{staticClass:"detail-prev",attrs:{to:{path:"/",query:{post_id:t.contents_detail.id-1}}},nativeOn:{click:function(e){t.retriveDetailPost(e)}}},["prev"])," ",e("router-link",{staticClass:"detail-next",attrs:{to:{path:"/",query:{post_id:t.contents_detail.id+1}}},nativeOn:{click:function(e){t.retriveDetailPost(e)}}},["next"])," ",e("router-link",{staticClass:"detail-close",attrs:{to:{path:"/"}},nativeOn:{click:function(e){t.retriveDetailPost(e)}}},["close"])," ",e("div",{staticClass:"detail-view-wrapper"},[e("div",{staticClass:"detail-view"},[e("img",{staticClass:"detail-image",attrs:{src:t.contents_detail.img,alt:"background"}})," ",e("div",{staticClass:"detail-texts"},[e("p",{staticClass:"detail-short-content"},[t._s(t.contents_detail.content)])," ",e("p",{staticClass:"detail-date"},[t._s(t.dateSlicer(t.contents_detail.created_date))])," ",e("p",{staticClass:"detail-distance"},[t._s(t.contents_detail.distance)])," ",e("p",{staticClass:"detail-stars"},[t._s(t.contents_detail.like_users_counts)])," ",e("p",{staticClass:"detail-replies"},[t._s(t.contents_detail.comments_counts)])])])," "," ",e("div",{staticClass:"comment-area"},[t.comment_list.length?e("ul",{staticClass:"comment-list"},[t._l(t.comment_list,function(a){return e("li",{staticClass:"comment-contents"},[e("p",[t._s(a.content)])," ",e("span",[t._s(t.dateSlicer(a.created_date))])," ",e("a",{attrs:{href:""}},["삭제"])," ",t._m(0,!0)])})]):t._e()," "," ",t._m(1)])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("a",{attrs:{href:""}},[e("img",{attrs:{src:"",alt:""}}),"하트수"])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"write-comment-area"},[e("form",{staticClass:"write-comment",attrs:{action:"index.html",method:"post"}},[e("input",{attrs:{type:"text",name:"",value:"write a comment",autofocus:"autofocus"}})," ",e("input",{attrs:{type:"submit",name:"",value:"save comment"}})])])}]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"content-wrapper"},[e("section",{staticClass:"join"},[e("h1",{staticClass:"readable-hidden"},["회원가입"])," ",e("form",{attrs:{action:"http://www.w3schools.com/html/action_page.php",method:"post",enctype:"multipart/form-data"}},[e("fieldset",{staticClass:"row1 join_essential"},[e("legend",{staticClass:"readable-hidden"},["필수입력사항"])," ",e("label",{staticClass:"readable-hidden",attrs:{for:"join_id"}},["아이디"])," ",e("input",{attrs:{type:"text",id:"join_id",name:"join_id",required:"",placeholder:"아이디"}})," ",e("label",{staticClass:"readable-hidden",attrs:{for:"join_pass_1"}},["비밀번호"])," ",e("input",{attrs:{type:"password",id:"join_pass_1",name:"join_pass_1",required:"",placeholder:"비밀번호"}})," ",e("label",{staticClass:"readable-hidden",attrs:{for:"join_pass_2",required:""}},["비밀번호 재입력"])," ",e("input",{attrs:{type:"password",id:"join_pass_2",name:"join_pass_2",placeholder:"비밀번호 재입력"}})])," ",e("fieldset",[e("legend",{staticClass:"readable-hidden"},["선택입력사항"])," ",e("div",{staticClass:"input-group row2"},[e("div",[e("input",{attrs:{type:"radio",name:"gender",id:"male",value:"male"}})," ",e("label",{attrs:{for:"male"}},["남자"])])," ",e("div",[e("input",{attrs:{type:"radio",name:"gender",id:"female",value:"female"}})," ",e("label",{attrs:{for:"female"}},["여자"])])])," ",e("div",{staticClass:"input-group row3"},[e("div",[e("label",{attrs:{for:"birthyear"}},["출생연도"])," ",e("input",{attrs:{id:"birth_year",name:"birth_year",type:"number",min:"1950",max:"2016",step:"1",value:"2016"}})])])])," ",e("div",{staticClass:"row4"},[e("input",{attrs:{type:"submit",value:"가입신청"}})])])," ",e("a",{staticClass:"close",attrs:{href:""}},[e("img",{attrs:{src:"",alt:"닫기버튼"}})])])])}]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("section",{staticClass:"content-wrapper"},[e("form",{attrs:{action:"http://www.w3schools.com/html/action_page.php",method:"post",enctype:"multipart/form-data"}},[e("textarea",{attrs:{name:"text",rows:"25",cols:"80",autofocus:"autofocus",placeholder:"write here"}})," ",e("input",{attrs:{type:"text",name:"tag",placeholder:"해쉬태그"}}),"\n\n    사용자 이미지 지정:\n    ",e("input",{attrs:{type:"file",name:"fileUpload"}})," ",e("button",{attrs:{type:"submit",name:""}},["저장"])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"scroll-window",on:{scroll:function(e){t.scrollFunction(t.el_scroll_window,t.el_wrapper)}}},[e("div",{staticClass:"wrapper"},[e("h1",{staticClass:"readable-hidden"},["Parrot"])," "," "," ",t._m(0)," "," ",e("header",{staticClass:"parrot-header"},[e("div",{staticClass:"top-header"},[t._m(1)," ",e("a",{attrs:{href:"#/join/"}},[" join"])," ",e("a",{attrs:{href:"#/write/"}},[" write"])," ",e("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toggleClass(".login-dim","hidden")}}},[" login"])," ",t._m(2)," ",t._m(3)," ",e("button",{staticClass:"open-menu-icon",attrs:{title:"메뉴"},on:{click:function(e){t.toggleClass(".wrapper","menu-active")}}},[e("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})])])," ",t._m(4)])," "," ",e("keep-alive",[e("router-view")])," "])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"login-dim hidden"},[e("section",{staticClass:"login"},[e("h1",{staticClass:"readable-hidden"},["로그인"])," ",e("form",{staticClass:"login_input",attrs:{action:""}},[e("label",{staticClass:"readable-hidden",attrs:{for:"login_id"}},["아이디"])," ",e("input",{attrs:{type:"text",id:"login_id",required:"",name:"login_id",placeholder:"your id"}})," ",e("label",{staticClass:"readable-hidden",attrs:{for:"login_pass"}},["비밀번호"])," ",e("input",{attrs:{type:"password",id:"login_pass",required:"",placeholder:"password",name:"login_pass"}})," ",e("div",{staticClass:"login_action"},[e("input",{attrs:{type:"submit",value:"로그인"}})," ",e("a",{attrs:{href:""}},["회원가입"])])])," ",e("div",{staticClass:"login-other"},[e("a",{attrs:{href:""}},["비밀번호찾기"])," ",e("a",{staticClass:"login-close-button",attrs:{href:""}},[e("img",{attrs:{src:"",alt:"닫기버튼"}})])])])])},function(){var t=this,e=t.$createElement;return e("a",{attrs:{href:"#/"}},[e("h1",["Parrot"])])},function(){var t=this,e=t.$createElement;return e("a",{staticClass:"login-icon",attrs:{href:"#",title:"로그인"}},[e("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement;return e("a",{staticClass:"write-icon",attrs:{href:"#",title:"글쓰기"}},[e("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement;return e("nav",{staticClass:"app-menu"},[e("img",{attrs:{src:"/",alt:""}})," ",e("ul",{staticClass:"menu-list hidden"},["메뉴\r\n      ",e("li",[e("a",{staticClass:"loggedin-hidden",attrs:{href:"./join.html"}},["회원가입"])])," ",e("li",[e("h2",{staticClass:"readable-hidden"},["접속자정보"])])," ",e("li",[e("img",{staticClass:"login-hidden",attrs:{src:"/",alt:"아바타"}}),"사용자 이미지"])," ",e("li",[e("p",{staticClass:"login-hidden"},["id e-mail"])])," ",e("li",[e("a",{staticClass:"login-hidden",attrs:{href:""}},["사용자 정보 수정"])])," ",e("li",{staticClass:"login-hidden"},["로그아웃"])," ",e("li",[e("a",["내가쓴글"])])," ",e("li",[e("a",["좋아요누른글"])])," ",e("li",[e("a",["가까운글"])])])," ",e("form",{attrs:{action:"serch"}},[e("img",{attrs:{src:"/",alt:"searchicon"}})," ",e("input",{attrs:{type:"search"}})," ",e("button",{attrs:{type:"button",name:"button"}},["search"])])])}]}}]);
//# sourceMappingURL=app.ba73ab8dde25a2ede249.js.map