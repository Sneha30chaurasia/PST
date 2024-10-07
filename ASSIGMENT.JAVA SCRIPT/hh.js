 function manipulateStudentInfo(student){
    let totalmarks=0
    for(let i =0;i<student.grades.length;i++){
        totalmarks+=student.grades[i]
    } 
    student.averagegrade=totalmarks/student.grades.length;
 }let studentcopy=JSON.parse(JSON.stringify(student));
 return [student,studentcopy]
 const student={
    name:"john doe",
    age:20,
    grades:[85,90,78,88,92],
    city:"newyork"

 }
 const [modifiedstudent,studenttcopy]=manipulateStudentInfo(student)
 console.log(modifiedstudent);
 console.log(studenttcopy)