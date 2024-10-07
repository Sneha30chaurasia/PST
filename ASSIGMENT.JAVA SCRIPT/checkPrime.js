function checkPrime(num){
    if(num<1){
        return false
    }
    if (num==2){
        return true;
    }

    for (let i =2;i<num/2;i++)
        if (num%i==0)
        {return false};
  {
    return true}}
console.log(checkPrime(9))
//
for (let num = 2; num <= 200; num++) {
    let isPrime = true;
    
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(num);  // Print the prime number
    }
}