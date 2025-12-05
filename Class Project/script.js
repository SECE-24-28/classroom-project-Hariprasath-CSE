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
console.log(sum(10));
*/


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
 
  // students=[
  //   {name:"Alice",age:20,grade:85},
  //   {name:"Bob",age:22,grade:70},
  //   {name:"Charlie",age:21,grade:95},
  // ];

  // const res=students.filter((student)=>student.grade>80);
  // const names=res.map((student)=>student.name);
  // console.log(`${names.join(', ')}`);

  // const st=document.getElementById('red');
  // console.log(st);
  // const heading=document.getElementById("red");
  // console.log(heading);
  // heading.innerHTML="Hello,world 1";
  // heading.style.color="red";
  // heading.style.borders="2px solid black";
  // heading.className="blue";
  
  // const pat=document.getElementsByClassName('blue');
  // console.log(pat[0]);
  // pat[0].innerHTML="Hello,world 2";
  // pat[0].style.color="blue";


  // const lal=document.getElementById('red');
  // lal.addEventListener('click',()=>{
  //   lal.style.color="green";
  //   lal.innerHTML="Clicked!!";
  //   lal.style.border="2px solid white";
  // });
  

//   const arr1=[1,2,3];
// const arr2=arr1;
//   console.log(arr1 == arr2);

//spread operator spreads the elements of an array into another array like new array



// const inputEl = document.getElementById("name");
// const submit = document.querySelector("form button");
// const errorEl = document.getElementById("error");
// const passwordEl = document.getElementById("password");
// const passwordErrorEl = document.getElementById("password-error");

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(inputEl.value);
//     if (inputEl.value.length < 3) {
//         errorEl.innerHTML = "Name must have 3 letters";
//     } else {
//         errorEl.innerHTML = " ";
//     }
// });
// submit.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(passwordEl.value);
//     if (passwordEl.value == inputEl.value) {
//         passwordErrorEl.innerHTML = "Password and Name cannot be same";
//     } else {
//         passwordErrorEl.innerHTML=" ";
// }
// });




// const obj={a:10,b:20}
// const newObj={...obj}

// obj.c=10
// //doubt 
// console.log(newObj);

// var a=10
// var a=20
// console.log(a);
// let b=10
// b=20
// console.log(b);

// console.log(x)
// x=10


//moving all the declaration to the top of the file ---->>>> Hoisting
// console.log(x)
// var x = 10
// console.log(x)


// let x // tomporal dead zone starts [cant access x before the initialization]

// console.log(x)
// let x=10


// const user={ name:"Alice",age:25};
// console.log(JSON.stringify(user))

// const userString=`{"name":"Alice","age":25}`
// console.log(JSON.parse(userString))


// const arr=[1,2,3,4,5]
// const [a,b,...c]=arr
// console.log(c) 
//   //on the left hand side with ...c mean by rest operator
//   //the rest operator should be the last operator while assigning or operating


//   const colors=["red",'green']
//   const[second,fourth]=colors
//   console.log(fourth)

// const obj={
//   name:"Hp",
//   age:18,
//   height:5.8,
//   weight:65
// }
// const {
//   ...rest

// } = obj

// console.log(rest)


// import print,{add,NUM} from './math.js'

// console.log(add(10,20))

// console.log("NUM IS",NUM)

// const p=new promise ((resolve,reject)=>{
//     setTimeout
// })
// console.log('START')
// setTimeout(()=>{
//   console.log('INSIDE')
// },0
// )
// console.log("END")



// const checkOdd=()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(a%2!=0){
//         resolve("Odd")
//       }
//       else{
//         reject("Even")
//       }
//     })
//   })
// }


// let a=3;
const checkEven=(a)=>{
return new Promise((resolve,reject)=>{
  setTimeout(()=>
 {
  if(a%2==0){
  resolve("Even")
  }
  else{
    reject("Odd")
  }
 },1000)
});
}


const checkLessThan10=(a)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(a<10){
        resolve("Less than 10")
      }
      else{
        reject("Greater than 10")
      }
    },1000)
  });
}


// checkEven(a).then((res)=>{
//   console.log("RESULT:",res);
//   return checkLessThan10(a)
//   }).catch((err)=>{
//     console.log("Error:", err);
//     return checkLessThan10(a)
//   }).then((res)=>{
//   console.log("RESULT:",res);
// }).catch((err)=>{
//   console.log("ERROR",err)

// });

const checkConditions= async()=>{
  let a=10;
  console.log('STARTING..... WAIT KARO WAALA')
  try{
  const res= await checkEven(a)
  console.log("RESULT:",res);
  }catch(err){
    console.log("ERROR:",err);
  }
  try{
  const res2= await checkLessThan10(a)
  console.log("RESULT2:",res2);
  }
  catch(err){
    console.log("ERROR:",err);
  }
  finally{
    console.log("We got the output");
  }
};
checkConditions()