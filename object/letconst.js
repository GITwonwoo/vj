const family ={
        d1text : "패밀리사이트",
        faimilysite : [
          "네이버","구글","다음","유튜브"
        ]
}

// console.log(family.faimilysite[0],family.faimilysite[1],family.faimilysite[2])

for(let x in family.faimilysite){
  //index
    console.log(x)
}

for(let x of family.faimilysite){
  //value
  console.log(x)
}