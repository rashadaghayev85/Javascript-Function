"use strict";

// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }
// console.log(person.name);
// console.log(person);

// let datas=[
//     {
//         name:"Fatime",
//         surname:"Qayxanova",
//         groups:[
//             "pb101",
//             "p314"
//         ],
//         teachers:[
//             "Cavid",
//             "Hemid"
//         ]
//     },
//     {
//         name:"Fexriyye",
//         surname:"Tagizade",
//         groups:[
//             "pb101"
            
//         ],
//         teachers:[
//             "Cavid",
            
//         ]

//     },
//     {
//         name:"Afide",
//         surname:"Veliyeva",
//         groups:[
//             "pb101",
//             "p312"
//         ],
//         teachers:[
//             "Cavid",
//             "Elcin"
//         ]
//     }
// ]
// console.log(datas);


// let surname="Tagizade";
//console.log(surname.length);
// console.log(surname.toLowerCase());
//console.log(surname.toUpperCase());
// console.log(surname.trim());
// console.log(surname.startsWith("T"));
// console.log(surname.indexOf("a"));
//console.log(surname.lastIndexOf("a"));
// console.log(surname.substring(0,2));
//console.log("fvdgsjhakjdvhsjbalcdsjldcjshjaljdcs".substring(0,10)+"... ");

// for(let i=0 ; i<surname.length;i++){
//     const element =surname[i];
//     console.log(element);
// }

//console.log(surname.includes("t".toUpperCase()));

// let array=surname.split(" ")

// console.log(array);
// console.log(surname.charAt(0))
// console.log(surname.charCodeAt("t"))
// console.log(surname.slice(0,3))
// let fullName="Tagizade Fexriyye Azerbaycan";
// console.log(fullName.replace("Azerbaycan","italiya"))

// let nums=[1,2,3,34,5];
// for(const item of nums){
//     console.log(item);
// }


// let person={
//     name:"Nurlan",
//     surname:"Umudov",
//     age:22
// }

// for (const key in person) {
//    console.log(person[key]);
// }
// for (const key in person) {
//    if(key=="name"||key=="surname"){
//     console.log(person[key]);
//    }
   
//  }
 
// let nums=[1,2,4,5,6,];

// nums.forEach((element,i)=>{
//     console.log(element+ " "+i);
// })

// let  data=nums.toString();
// console.log(data);

// let data=nums.join("-");

//nums.push(100);
// console.log(nums);
// nums.pop();
// console.log(nums);
// nums.shift();
// console.log(nums);
// nums.unshift(500);
// console.log(nums);


// const myGirls=["gshja","gdhsj"];
// const myBoys=["gshja","dgshj","vcbxsj"];
// const myChildren=myGirls.concat(myBoys);
// console.log(myChildren);

// let address="Ehmedli";

// let result=[...address]//Rest
// console.log(result);

// let obj={
//     name:"test",
//     surname:"testov"
// }
// let data={...obj};
// console.log(data);

// let nums=[1,2,4,5,6,];
// let datas =[...nums];
// console.log(datas);

// showText();

// function showText(){
//     let a=100;
//     if(a>50){
//         console.log("Hello World");
//     }
    
// }

// function showText(text){
//     console.log(text);
// }

// showText(500);

// function sum(a,b){
//     let result=a+b;
//     console.log(result);
// }

// sum(111,500);

// let datas=[1,2,3,4,4];
// function findData(arr){
//     for(const item of arr){
//         if(item==100){
//             console.log("100 already found");
//             break;
//         }
//     }
//     console.log("welcome to our site");
// }

// findData(datas);

// function sum(a,b){
//     return a+b;
    
// }
// let result=sum(10,20);
// console.log(result);
// let datas=[1,2,3,4,4];
// function test(arr){
//     arr[0]=100;
//     console.log(arr);
// }
// test(datas);
// console.log(datas);


// let b=100;
// function test(a){
//     a=20;
//     console.log(a);
// }
// test(datas);
// console.log(b);

// let datas=[1,2,3,4,4];
// function test(arr){
//     let newArr=["salam","sagol"]
//     arr=newArr;
//     console.log(arr);
// }
// test(datas);
// console.log(datas);

// let elems1=[1,2,34];
// let elems2=[4,5,6];
// elems1=elems2;
// elems2[0]=100;
// console.log(elems1)
// console.log(elems2)

// function test(...datas){
//    for(let i=0 ; i<datas.length;i++){
//     const element =datas[i];
//     console.log(element);
// }
// }
// test(1,23,33,4,5)

// function test(){
//     //console.log(arguments);//argumnets objectdir array deyil
//    for(let i=0 ; i<arguments.length;i++){
//     const element =arguments[i];
//     console.log(element);
// }
// }
// test(1,2,34,5);

// let showwTest=()=>{
//     console.log("tested");
// }
// showTest();

// let showTest=(text)=>{
//     console.log(this);
// }
// showTest();
// // console.log(this);

// function showNumber(){
//     console.log(this)
// }
//  showNumber();

// const showText=()=>{
//     console.log(this)
// }
// showText("Nesir bey");

// let student={
//     name:"Reshad",
//     surname:"Aghyev",
//     age:21,
//     address:"Neftciler",
//     getFullName:function(){
//         console.log(this.name+ " "+this.surname)
//     },
//     getFullData:()=>{
//         console.log(this.name+ " "+this.surname)
//         //console.log("Welcome")
//     },

// }

// student.getFullName();
// student.getFullData();

// window.location.reload();

// const test=()=>{
//     for (let i=0;i<arguments.legnth;i++){
//         const element=arguments[i];
//         console.log(element);
//     }
// }
// test(1,23,4)///erorrrrrr

// this.alert();

/////////////////////////////////Task
//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
// let n=21;
// function checkDivided(n){
// if(n%3==0&&n%7==0){
//     console.log("bolunur");
// }
// else{
//     console.log("bolunmur");
// }
// }
// checkDivided(n)
//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
// let a=5;
// let result=1;
// function factorial(a){
//     for(let i=1;i<=a;i++){
//      result*=i;
//     }
//     console.log(result);
// }
// factorial(5)

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
// let array=[1,2,3,4,5,6];
// let sum=0;

// function sumSquere(arr){
//     for(let i=0; i<arr.length;i++){
//        if(arr[i]%2==0){
//          sum+=arr[i]**2;
//        }
//        }
    
//        console.log(sum);
// }
    
// sumSquere(array);

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// let Login=(email,password)=>{
// if(email=="cavid@code.edu.az"&&password=="12345"){
// console.log("Login Succes");
// }
// else{
//     console.log("Email or password wrong");
// }
// };

// Login("cavid@code.edu.az","12345");


// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
// let array=[1,2,3,4,5,6];
// let sum=0;
// function sumNumbers(arr){
 
//     for(let i=0; i<arr.length;i++){
//        if(arr[i]%2!=0){
//          sum+=arr[i];
//        }
//        }
    
//        console.log(sum);
// }
    
// sumNumbers(array);

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let array=[1,2,3,4,5,6];
// let count=0;
// let evenNumberCount=(arr)=>{
 
//     for(let i=0; i<arr.length;i++){
//        if(arr[i]%2==0){
//          count++;
//        }
//        }
    
//        console.log(count);
// }
    
// evenNumberCount(array);

// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
//      1) Yashi 18-25 araliginda olan telebelerin sayi.
//      2) Emailinde "c" herfi olan studentlerin sayi.



let students=[
        {
            name:"Fatime",
            surname:"Qayxanova",
            email:"fatime@gmail.com",
            age:22
        },
        {
            name:"Fexriyye",
            surname:"Tagizade",
            email:"fexriyye@gmail.com",
           age:21
        },
        {
            name:"Afide",
            surname:"Veliyeva",
            email:"afide@gmail.com",
            age:37
           
        }
    ]
  //  1) Yashi 18-25 araliginda olan telebelerin sayi.\
  let count=0;
      let  countStudentRange=(students)=>{
         students.forEach(element => {
            if(element.age>18&&element.age<25){
                count++;
            }
         });
         console.log(count);
      }
      //countStudentRange(students);

//      2) Emailinde "c" herfi olan studentlerin sayi.

let searchStudentEmail=(students)=>{
    students.forEach(element => {
        if(element.email.match("c")){
            count++;
        }
     });
     console.log(count);
}
//searchStudentEmail(students);

    
//9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.
// function upperCase(text){
//     let word=text.toString()
//     let start=word.substring(0,1)
   
//     let end=word.substring(1,word.length)
// console.log(start.toUpperCase()+end);

// }
// upperCase("reshad")