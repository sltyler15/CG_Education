console.log("This file is linked!");
var name = "Yoda";
var department = "Jedi";
var TeacherRating1 = 3.4
var TeacherRating2 = 5.0
var TeacherRating3 = 4.2
var teacherAvgRating = ((TeacherRating1+TeacherRating2+TeacherRating3)/3)
var students = "Yolo"
var courses = "Course1"
var teacherRatings =[TeacherRating1, TeacherRating2,TeacherRating3];

console.log ("Teacher: "+name)
console.log ("Department: "+department)
console.log ("Ratings: "+TeacherRating1+', '+TeacherRating2.toFixed(1)+', '+TeacherRating3)
console.log ("Average: "+Math.round(teacherAvgRating *10)/10)
console.log ("Student: "+students)
console.log ("Course: "+courses)
console.log ("Teacher's Avg. Rating: "+teacherRatings.length)
function getRatingAvg(poop){
  var total = 0;
  for(var i = 0; i < poop.length; i++) {
      total += poop[i];
  }
  var avg = total / poop.length;
  console.log(poop)
  console.log(avg)
  return avg
}
getRatingAvg(teacherRatings)

/* CG Education: Part 2: Step 3 */
function addTeacherRating(teacherarray, newRating)
{
  console.log(teacherarray.push(parseInt(newRating)));

}
addTeacherRating(teacherRatings, 4)
console.log(teacherRatings)

/* CG Education: Challenge 1: Step 2 */
/* var teacherPrompt = prompt("We would like for you to review.  Please enter a rating between 0.0 - 5.0?");

if (teacherPrompt <0.0 || teacherPrompt >5.0) {
  alert("Try Again!");
}

addTeacherRating(teacherRatings, teacherPrompt)
console.log(teacherRatings) */


var finalRating=getRatingAvg(teacherRatings)
console.log(finalRating)
alert("Thanks for your review! "+name+" average rating is now "+finalRating)

var courses =
[
  ["Algebra1","Mathematics1"],
  ["Geometry","Mathematics2"],
  ["College Algebra","Mathematics4"],
  ["Calculus","Mathematics4"],
  ["Algebra2","Mathematics3"]
]
/* CG Education: Challenge 2: Step 3 */
function courseFilter(array, department)
{return array.filter(course =>course[1]==department);

}

var secondPrompt = prompt("What department is the course in?");

var finallyFiltered=courseFilter(courses,secondPrompt);
if (finallyFiltered.length == 0){
  alert("Try Again!")
}
else {
  var courselist = "";
  for(var i = 0; i < finallyFiltered.length; i++) {
      courselist += finallyFiltered[i][0]+ "\n";
    }
  alert("Please select a course from the list below: "+"\n"+"\n" +courselist)
console.log(courselist)
}
