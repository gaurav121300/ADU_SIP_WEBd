// let students =  [
//     {id : 1,name : 'Gaurav'},
//     {id : 2,name : 'Rahul'},
//     {id : 3,name : 'John'},
// ]

// //find student with id = 2

// const student = students.find(
//     student => student.id === 2  //bring the student with id === 2 
// )

// for(let student of students){
//     if(student.id === 2){
//         return student;
//     }
// }

// console.log(student);

//filter 

let nums = [1,2,3,4];

nums = nums.filter(
    num => num != 2
)

console.log(nums);