let output = [];
let x = 1;

function fizzbuzz() {    
   while (x <= 100){
      x++;
      if(x % 3 === 0 && x % 5 === 0){
         output.push('FizzBuzz')
      }else if(x %5 == 0){
         output.push("Buzz"); 
      }else if(x % 3 == 0){
         output.push("Fizz")
      }else {
         output.push(x);
      }
   }

   console.log(output)
}

fizzbuzz();

