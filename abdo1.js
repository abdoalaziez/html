// //the  six1
// firsname="umran";
// lastname="abdo al aziez";
// age="18"
// var fullName = firsname + lastname
// console.log(fullName,age)
// //the  six2
// function Book(title,author,page){
//     this.title = title;
//     this.author = author;
//     this.page = page
//   }
//   Book.prototype.toString = function(){
//     return this.title + 'by' + this.author + ', is '+ this.page + ' long.'
//   }
//   Book.prototype.print = function(){
//     console.log(this.toString());
//   }
//   var mobyDick = new Book ( 'Hamlet' , 'umran Shakespeare' , 100 );
//   mobyDick.print()
// //the  six3
//   function addOne(obj) {
//     obj.value += 2;
//   }
//   function addTwo(obj) {
//     obj.value += 2;
//   }
//   const testObj = {
//     value: + 0
//   }
//   addOne(testObj);
//   addTwo(testObj);
//   console.log(testObj)
// //the  six4
// function greet(name) {
//     console.log("wellcom, " + name + "!");
//   }
//   greet("umran");
// //the  six5
// var area=  (length,  width)=>{
//     return  (length*width);
// }
// console.log(area(8,10));
// //the  six6
// def. get_input(a,b)
//     a = int(input("Please enter the width: \n"))
//     b = int(input("Please enter the length: \n"))
// def. show_area(c)
//     print("The area of the rectangle is: {c}".format(c))
// def. calculate_area(a,b)
//     get_input(a,b)
//     c=a*b
//     show_area(c)    
// calculate_area(a,b)
// //the  six 7
// var  person={
//     name:"Hortance",
//     age:18,
//     displayInfo:function(){
//       console.log(this.name,this.age);
//     }
//   }
//   person.displayInfo();
// //the  six8
// function  convertToFahrenheit(celsius){
//     return celsius *(9/ 5) +32;
// }
// console.log( convertToFahrenheit(40));
// console.log( convertToFahrenheit(100));
// console.log( convertToFahrenheit(35));
// //the  six9
// var  students=["Regis","umran","mohammed","Ammar","abdu",]
// var i=0;
//   while(i<10){
//     console.log(i);
//     i++;
//   }
// //the  six10
// var students = [
//     {name:"umran",score:57},
//     {name:"Moses",score:68},
//     {name:"karekezi",score:88}
// ];
// function averageScore(studentsArray){
//     if  (studentsArray.length===0){
//         return 0;
//     }
//     const totalScore = studentsArray.reduce((acc,student) =>acc + student.score,0);
//     return totalScore/ studentsArray.length;
// }
// console.log("Average  Score:", averageScore(score));
// //the  six11
// function  getDayName(number){
//   var day="0";
//     switch (number){
//   case 1:
//     day="Fir";
//        break;
//   case 2:
//     day="Hidernating";
//         break;
//   case 3:
//     day="Sunday";
//        break;
//   case 4:
//     day="Monday";
//        break;
//   case 5:
//     day="Tuesday";
//        break;
//   case 6:
//     day="Wednesday";
//        break;
//   case 7:
//     day="Thursday";
//        break;
//   }
//   return day
// }
// console.log(getDayName(3))

// //the  six12
// function getGrada(score){
//   if(score>=90  &&  score<=100)
//       return console.log("A");
//   if(score>=80  &&  score<=90)
//       return console.log("B")
//   if(score>=70  &&  score<=80)
//       return console.log("C")
//   if(score>=60 && score<=70)
//       return console.log("D")
//   if(score>=0  &&  score<=60)
//       return console.log("E")
//   else return console.log("nat a falid score")
// }
// getGrada(90)
// getGrada(80)
// getGrada(70)
// getGrada(60)
// getGrada(300)



function  getGrada(score) {
     if(score>100   &  score<=110)
          return console.log("A");
     if(score>90   &  score<=100)
          return console.log("B")
     if(score>80   &  score<=90)
          return console.log("C")
     if(score>70   &  score<=80)
          return console.log("D")
     if(score>60   &  score<=70)
          return console.log("E")
     if(score>50   &  score<=60)
          return console.log("F")
}
getGrada(110)
getGrada(90)
getGrada(80)
getGrada(70)
getGrada(400)













// // //the  six13
// function checkEvenOdd(number){
//   if(number % 2== 0){
// console.log("Even")
//   }
//  else{
//   console.log("Odd")
//  }
//  return number
// }
// checkEvenOdd(8)
// checkEvenOdd(-9)



// function getSeason(season) {
//     switch(season) {
//         case "Desember":
//         case "January":
//         case "February":
//              return "winter";
//         case "March":
//         case "April":
//         case "May":
//              return "Autumn";
//         case "June":
//         case "Julay":
//         case "August":
//              return "Summer";
//         case "sebtember":
//         case "october":
//         case "november":
//              return "spring";
//              default:
//                 return "Invalid month";
//     }
//   }
//   console.log(getSeason("March"));
//   console.log(getSeason("June"));
//   console.log(getSeason("sebtember"));
