// do-while loop => Loop will execute at least once
//syntax:
// do {
//    statements;
// } while(condition);

// Here the loop is executed for one time even the condition is false
let i = 0;
do {
	console.log('Value of i:', i);
} while (i < 0);

// while loop => Loop will execute if the condition is true

let j = 0;
while (j <= 5) {
	console.log('Value of j:', j);
	j++;
}

// for loop

let k;
for (k = 1; k <= 5; k++) {
	console.log('Value of k:', k);
}
