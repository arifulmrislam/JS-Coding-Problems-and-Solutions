// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// // x();

// function x() {
//     for (var i = 0; i <= 5; i++) {
//     function close(i) {
//         setTimeout(function () {
//         console.log(i);
//       }, 1000 * i);
//     }
//     close(i);
    
//     }
//     console.log("Hello JS");
// }
// x();



// function x(){
//   var a = 26;
//   function y(){
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }

// var z = x();
// console.log(z);
// z();




function x(){
  for(var i=0;i<=5;i++){
    function close(x){
      setTimeout(function () {
        console.log(x);
      },x * 3000);
    }
    close(i)
  }
  console.log("Hello JS");
}

x();