// var functionName = (function(global){
//   'use strict';
//   var _functionName = function(variables){
//     // variables discription
//   }
//   return _functionName;
// })();

var toggleClass = function(){
  'use strict';
  var _toggleClass = function(query, cls){
    // el : element from native dom script
    // cls : classname to toggle. ex : hidden
    var _element = document.querySelector(query);
    if(_element.classList.contains(cls)){
      _element.classList.remove(cls);
    }else{
      _element.classList.add(cls);
    }
  }
  return _toggleClass;
}();


//function 일때는 위에 올려도 되는데, var를 내보낼때는
// 가장 아래에 있어야 한다.  아니면 undefined
module.exports = {
  toggleClass: toggleClass
  //키 이름을 '' 로 감싸도 되고, 안감싸도 명칭으로 동작한다.
}
