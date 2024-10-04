window.addEventListener('load',function(){
  //호출영역
this.document.querySelector("#family h2").innerHTML = family.d1text

let familylist ='';

// for(x in family.faimilysite){
// familylist += `<li>${family.faimilysite[x].atext}</li>`;
// }

for(x of family.faimilysite){
  familylist += `<li>${x.atext}</li>`;
  }

this.document.querySelector("#family ul").innerHTML =  familylist

//패밀리노출
this.document.querySelector("#family").addEventListener('click',function(){
  this.classList.toggle('open');
})


const allMenubtn = this.document.querySelector("#hd_allmenu_bby")

allMenubtn.addEventListener('click',function(){
  document.body.classList.toggle('menuOpen')
})


//여기서
for(x in mynavi){
  this.document.querySelectorAll("#navi>ul>li>a")[x].innerHTML =  mynavi[x].title;
}



})

//함수제작