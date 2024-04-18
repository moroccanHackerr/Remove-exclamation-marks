// function removeExlemetionMark(str) {
//   let finall ='';
//   for (let i = 0; i < str.length; i++) {
//     if(str[i] !== '!'){
//       finall+=str[i]
//     }
//   }
//   return finall

// }

function removeExlemetionMark (str){
  let finall = str.split('').filter((e) => e !== '!').join('')
  return finall
}
console.log(removeExlemetionMark('h!ell!o!'));