/**
 * It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
The user should be able to input their name on a new line
The program should display Your name is: INPUT
When the user ends the program, it should display This important software is now closing (followed by a new line)
 */
function userGreet() {
    process.stdout.write("Welcome to Holberton School, what is your name?\n")

    process.stdin.on('data', (data) => {
        process.stdout.write(`Your name is: ${data}`)
    })

    process.stdin.on('end', () => {
        process.stdout.write("This important software is now closing\n")
    })
}

userGreet()