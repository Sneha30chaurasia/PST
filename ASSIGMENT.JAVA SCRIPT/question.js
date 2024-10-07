function gradeClassification(percentage){
    let grade;
    switch(true){
        case (percentage>=90):
            grade="A"
break;
case (percentage>=80):
            grade="B"
break;
case (percentage>=70):
            grade="C"
            break;
case (percentage>=60):
            grade="D"
            break;
             default :
             grade="F"}

return `your grade is: ${grade}`;



    }

 console.log(gradeClassification(80))
    