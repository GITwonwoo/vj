window.addEventListener('load',function(){
  //호출영역
this.document.querySelector("#family h2").innerHTML = family.d1text

// li딱하나잡힘
this.document.querySelector("#family li")

// 그래서 All
const mylist = this.document.querySelectorAll("#family li");

console.log(

)
// mylist[0].innerHTML = family.faimilysite[0].atext
// mylist[1].innerHTML = family.faimilysite[1].atext
// mylist[2].innerHTML = family.faimilysite[2].atext


for(자리 in mylist){
   mylist[자리].innerHTML = family.faimilysite[자리].atext
}

})

//함수제작