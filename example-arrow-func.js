function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addShortest = (a, b) => a + b;

console.log('regular', add(1, 2));
console.log('addStatement', addStatement(1, 2));
console.log('addShortest', addShortest(1, 2));
