function classifyGrade(percentage) {
    let grade;
    
    switch (true) {
        case (percentage >= 90):
            grade = 'A';
            break;
        case (percentage >= 80):
            grade = 'B';
            break;
        case (percentage >= 70):
            grade = 'C';
            break;
        case (percentage >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    return `Your letter grade is: ${grade}`;
}

console.log(classifyGrade(92));  // Output: Your letter grade is: A
console.log(classifyGrade(85));  // Output: Your letter grade is: B
console.log(classifyGrade(74));  // Output: Your letter grade is: C
console.log(classifyGrade(62));  // Output: Your letter grade is: D
console.log(classifyGrade(50));  // Output: Your letter grade is: F