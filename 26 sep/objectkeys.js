// object operation or method
// object.keys=> returns the array of all the keys
let std={
    name:"sneha",
    age:18,
    roll_no:1
}
console.log(Object.keys(std)) // [ 'name', 'age', 'roll_no' ]

// USE this array [ 'name', 'age', 'roll_no' ] to access the object values

let arr= Object.keys(std);
for(let i of arr)
    console.log(std[i]) // output:sneha,18,1


// can be done from *for* loop too

for(let x=0;x<arr.length;x++){
    console.log(std[arr[x]])  // output: sneha,18,1
   
}

//*OBJECT.VALUES*\\
 // RETURN VALUES OF OBJECT IN ARRAY
  let obj ={
    name:"harshit",
    age:17,
    rollNo:1
  }
  console.log(Object.values(obj))

  // 


 





                                         //


//Object.entries=> it convert an object into array  
let objj ={
    name:"riya",
    age:18,
    rollNo:2
}        
console.log(Object.entries(objj))   

// print value of this array [ [ 'name', 'riya' ], [ 'age', 18 ], [ 'rollNo', 2 ] ]
let arrr= Object.entries(objj)

for(let prop of arrr){
    console.log(prop[1])  }// output: riya,18,2 
    
    //*CONCEPT OF CLOSURE*\\ closure is a way to access lexicl scope 
    // function as child function can access parent function by closure
    //*\\ 😁😁😁😁  //*\\

    function test1(){
        let a=5;
         return a;
    } 
    console.log(test1)
   // console.log(a) give us error a is undefined bcz it is outside its lexical scope
   // it can only happen by closure
   function test2(){            // parent func.
        let a=5;
        function right(){        // child func. 
            return a;
        }
            return right;
        }
     let check=test2()
     console.log(check()) // after returning ,function not work further
     // all child function  can access the parent function even after returning -
     // bcz of closure

     //NOTE: 
     // 1: by defaukt we can't access variable or properties outside
     //their lexical scope but  becz of closure we can access them outsude
     //their lexical scope.
     //2 : when func.return then it distribute all its prop.
     //but  because of closure  child func. can always access the prop. 
     // of it's parent function no matter parents function has eturned or not 


     function parent(a){
        let b=5;
        function child(){
            return a+b;
        }
        return child;
     }
     let childfunc=parent(4)
     console.log(childfunc( ))


     // TYPE CASTING: when u cahnge data type of data then it called type casting
      //for ex:
       let a="123";
       let b = parseInt(a)
       console.log(typeof b)

       // ti.String to convert number into string
       let c=123
       let d=c.toString()
       console.log(typeof d)


       // DYNAMIC V/S STATIC TYPE OF LANGUAGE

let x=5; // when we do not need to define the type of data in code then that language is dynamically typed ( in java script)
         // java (static type )