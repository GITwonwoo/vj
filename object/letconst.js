const family = {
  d1text: "패밀리사이트",
  faimilysite: [
    {
      atext: "GIT",
      href: "http://www.github.com/GITwonwoo",
    },
    {
      atext: "네이버",
      href: "http://www.naver.com",
    },
    {
      atext: "다음",
      href: "http://www.daum.net",
    },
  ],
}





// window.onload = function(){
//   //화면이 로딩이 끝나면 처리해라
// }
window.addEventListener('load', function(){
//로드 라는 이벤트를 발생했을때 실행해라

      this.document.querySelector("#family h2").innerHTML += family.d1text;
    //특정태그안에 태그 삽입

    this.document.querySelector("#family ul").innerHTML += `<li>${family.faimilysite[0].atext}</li>`;
    this.document.querySelector("#family ul").innerHTML += `<li>${family.faimilysite[1].atext}</li>`;
    this.document.querySelector("#family ul").innerHTML += `<li>${family.faimilysite[2].atext}</li>`;

})