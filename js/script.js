



for (let i = 1; i <= 100; i += 1 ) {                       // CONTEGGIO da 1 a 100 con FOR
    
    if (i % 3 == 0 && i % 5 == 0){                         //se multiplo di 3
        console.log('FizzBuzz');                           //STAMPO FIZZ
    }
    else if (i % 5 == 0) {                                 //se multiplo di 5?
        console.log('Buzz');                               // STAMPO BUZZ
    }
    else if (i % 3 == 0 ) {                                // SE multiplo sia di 3 sia di 5 ?
        console.log('Fizz');                               // STAMPO FIZZBUZZ
    }
    else {
        console.log('i', i, typeof i);                     // se NON multiplo di 3 e/o di 5 allora lascio il numero che si analizza così com'è
    }


}