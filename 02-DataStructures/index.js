// 1. Create a class for a school that other objects could be created from.
//   - The class created should have the following properties (name, location, grades, numStudents, students)
//   - add a method to this class that adds a new student to a school, removes student,getsAverage
//     grades for students in a particular school

// 2. Joanne is an independent dealer that sells weed in the East Coast of Miami, every time she sells
//    50kgs of weed she gets a percentage profit of 25%. If she sells less than 50kgs she gets a percentage
//    profit of 10%.
//    - Write a function that tells her how much does she makes if she sells 49kgs
//    - If Joanne has the following sells in kgs [ 23,76,12,68,54,98 ] in a week, loop her sales and return
//      the ones that she makes 25% and place them in an array.

// 3. Given users below,
const data = [
    { name: 'James', age: 34, occupation: 'farmer', city: 'Toronto' },

    { name: 'Peter', age: 45, occupation: 'dentist', city: 'Montreal' },
    { name: 'Mark', age: 26, occupation: 'vlogger', city: 'Ottawa' },
  ];
  // *** To Be continued ***
//creating a class using constructors as a blue print so we can sketch the Object.
class School{
  constructor(name,location,grades,numStudents,students){
    this.name = name;
    this.location = location;
    this.grades = grades;
    this.numStudents = numStudents;
    this.students = students;
  }
}
//added value to the objects needed for school to be created by also logging each into a console.
const central = new School('Mukono High','Jinja',[45,78,42],3,['Musoke']);
console.log("This is data",central)

 const jj1 = new School('Central College','Ottawa',[],45,[]);
//  console.log(jj1)

 //example of how to add different values to the main object properties so we can render more data .
// const jj2 = new School()
// const jj3 = new School()
// const jj4 = new School()
// const jj5 = new School()

// class 







