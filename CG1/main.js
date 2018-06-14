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

/* CG Education: Part 2: Step 4 */
var teacherPrompt = prompt("We would like for you to review.  Please enter a rating between 0.0 - 5.0?");

if (teacherPrompt <0.0 || teacherPrompt >5.0) {
  alert("Try Again!");
}

addTeacherRating(teacherRatings, teacherPrompt)
console.log(teacherRatings)


var finalRating=getRatingAvg(teacherRatings)
console.log(finalRating)
alert("Thanks for your review! "+name+" average rating is now "+finalRating)
