const input = 'geeksforgeeks';
const character = 'e';
let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === character) {
        count++;
    }
}

console.log(count);
