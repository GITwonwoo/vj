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

})

//함수제작