// function createPerson(name,age){
//     return{name,
//           age
//     }
// }
// let person1= createPerson("alice",30)
// console.log(person1)


// function printPersoninfo(name,age){
//     console.log(`name:${name}`);
//     console.log(`age:${age}`)}
//      const person1=printPersoninfo("sarah",35)
function Book(title,author){
    this.title=title,
    this.author=author
}
const book1= new Book(`the catcher in the rye`,`j.d`)
const book2=new Book(`1984`,`jorge orwell`)
console.log("book1",book1)
console.log("book2",book2)