let output = [];


function fizzbuzz() {    
  for (let i = 1; i <= 100; i++){      
      if(i % 3 === 0 && i % 5 === 0){
         output.push('FizzBuzz')
      }else if(i %5 == 0){
         output.push("Buzz"); 
      }else if(i % 3 == 0){
         output.push("Fizz")
      }else {
         output.push(i);
      }
   }

   console.log(output)
}

fizzbuzz();

