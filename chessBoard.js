let space = '';
let hash = '';
let number = Number(prompt("Enter the size of your chessboard: "));
for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
        space += ' ';
        hash += '#';
    } else {
        space += '#';
        hash += ' ';
    }
};
for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
        console.log(space);
    } else {
        console.log(hash);
    }
};