const readline = require('readline');

const FIXED_CONVERSION_RATE = 0.012; // Set your fixed conversion rate for INR to USD

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const convertInrToUsd = (amount) => (amount * FIXED_CONVERSION_RATE).toFixed(2);

const promptUser = () => {
    rl.question(
        'Enter amount in INR to convert to USD (or type "exit" to quit): ',
        (input) => {
            if (input.toLowerCase() === 'exit') {
                console.log('Exiting the program. Goodbye!');
                rl.close();
                return;
            }

            const amountInr = parseFloat(input);

            if (isNaN(amountInr) || amountInr <= 0) {
                console.log('Invalid input. Please enter a valid number greater than 0.');
                promptUser();
            } else {
                const amountUsd = convertInrToUsd(amountInr);
                console.log(`₹${amountInr} is approximately $${amountUsd}`);
                promptUser();
            }
        }
    );
};

if (require.main === module) {
    // This block runs only if the script is executed directly
    console.log('Welcome to the INR to USD Converter!');
    promptUser();
}

module.exports = { convertInrToUsd }; // Export the function for testing
