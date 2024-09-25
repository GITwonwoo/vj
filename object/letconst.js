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

let familytag ="";
familytag +=`<h2>${family.d1text}</h2><ul>`;
//of는 오버젝트로 받은것?

for(x of family.faimilysite){
      familytag +=`<li>${x.atext}</li>`
}
familytag +='</ul>'

window.addEventListener('load', function(){

      this.document.querySelector("#family")
      .innerHTML += familytag;

})