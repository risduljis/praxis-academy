for(i=1; i<=100; i+=1){
    if(i%3 === 0 && i%5 === 0)
    {
       console.log(i, 'adalah FizzBuzz');
    }
    else if (i%5 === 0)
    {
          console.log(i, 'adalah Buzz');
    }
    else if (i%3 === 0)
    {
       console.log(i, 'adalah Fizz');     
    }
    else
    {
          console.log(i);
    }
 }