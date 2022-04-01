function countDown(num) {
    // Check that input is an integer larger than 0
    if (num <= 0  || typeof(num) !== 'number' || !Number.isInteger(num)) {
        console.log('Please enter an integer greater than 0.');
    } else {
        i = 0;
        // loop decreasing num by 1 until it equals 0
        while (num > 0) {
            num -= 1;
            // declare new variable to check current num inside setTimeout
            let dec = num;
            i += 1;
            setTimeout(function() {
                // If num is still above 0 console.log num otherwise console.log 'DONE!'
                if (dec > 0) {
                    console.log(dec);
                } else {
                    console.log('DONE!');
            // Increase timeout length by current number of iterations * 1000 to space out results by 1 second
            }}, 1000 * i )
        }
    }
}

function randomGame() {
    // Declare random as 0 so that while loop will run initially
    let random = 0;
    let i = 0;
    while (random <= 0.75) {
        // use Math.random to set random to number b/t 0 and 1
        random = Math.random(); 
        // declare new variable to check the random output in setTimeout
        let check = random;
        i++;
        setTimeout(function() {
                // If random is still below 0.75 console.log the number otherwise console.log results and total number of tries
                if (check <= 0.75) {
                    console.log(check);
                } else {
                    console.log(`${check} is greater than 0.75. Total number of tries: ${i}`);
            // Increase timeout length by current number of iterations * 1000 to space out results by 1 second
            }}, 1000 * i )
    }
}