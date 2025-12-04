/*
function add(a,b){

    return a+b;
}
console.log(add(3,4));


varx=function multiply(x,y){
    return x*y;
}
console.log(varx(5,6));

var sum=(m,n)=>{
    return m+n;
}
console.log(sum(7,8));

var sum=a=>a+10;
console.log(sum(10));*/
//   for(let i=2;i<=20;i++){
//     if(i%2==0)
//     console.log(i);
//   }
/*
  let j=2;
  while(j<=20){
    if(j%2==0)
    console.log(j);
  }


  var arr=[1,2,3,4,5,6,7,8,9,10];
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
  }*/
/*
  let arr=[11,12,13,14,15,16,17,18,19,20];
  arr.push(12);
  console.log(arr);
  arr.pop();
  console.log(arr);
  arr.unshift(17);
  console.log(arr);
  arr.shift();
  console.log(arr);
  

  function a(arg,a,c){
    arg(c);
     console.log("Inside function a"+a);
  }
  function b(x){
    console.log("Inside function b"+x);
  }

  a(b,10,20); 
*/
/*
  function a(arg1,arg2,arg3){
    console.log("Inside function a"+arg2);
    if(arg3>10){
      arg1(arg3);
    }
  }

  function b(arg){
    console.log("Inside function b"+arg);
  }

  a(b,5,15);*/

/*
  function multiply(factor){
    return function(x){
      return x*factor;
    }
  }
  const double=multiply(2);
  const triple=multiply(3);

  console.log(double(5));
  console.log(triple(5));
  */

  // const arr=[1,2,3,4,5];
  // const newArr=[];

  // arr.forEach((el) => {
  //  newArr.push(el * 2);
  // })
  // console.log(newArr);
/*
 const arr=[1,2,3,4,5];
  const res=arr.map((el) => {
    return el * 2;
  });
  console.log(res);*/

  // const arr=[1,2,3,4,5]
  // //[2,4] should be output..

  // const res=arr.filter((el)=>{
    
  //   return el%2==0
  // })
  //   //filter->elements based on condition
  // console.log(res)
 
  students=[
    {name:"Alice",age:20,grade:85},
    {name:"Bob",age:22,grade:90},
    {name:"Charlie",age:21,grade:78},
    {name:"David",age:23,grade:92}
  ];

  const res=students.filter((student)=>student.grade>80);
  const names=res.map((student)=>student.name);
  console.log('Students with grade >80:,${names.join(', ')}')