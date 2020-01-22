// function main(param1,param2,callBack){ 
//     console.log(param1, param2) 
//     callBack()  
//   }
  
//   function myCallback(){ 
//     console.log ('hello callback')
//   }
  
//   main(1,2,myCallback)


// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
//   // expected output: [object Promise]

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     // shows 10 after 1 second
//     wait().then(result => alert(result));
//   }
  
//   f();