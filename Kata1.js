let arrayNumbers = [];
let number = '36';
for (let accountant = 1; accountant <= number; accountant++) {
    let evaluationVariable = '';
    if (accountant % 3 !== 0 &&
        accountant % 5 !== 0 &&
        accountant % 7 !== 0 &&
        accountant.toString().indexOf('3') === -1 &&
        accountant.toString().indexOf('5') === -1 &&
        accountant.toString().indexOf('7') === -1) {
        evaluationVariable += accountant;
    }
    if (accountant % 3 === 0) {
        evaluationVariable += 'Foo';
    }
    if (accountant % 5 === 0) {
        evaluationVariable += 'Bar';
    }
    if (accountant % 7 === 0) {
        evaluationVariable += 'Quix';
    }
    if (accountant.toString().indexOf('3') >= 0) {
        evaluationVariable += 'Foo';
    }
    if (accountant.toString().indexOf('5') >= 0) {
        evaluationVariable += 'Bar';
    }
    if (accountant.toString().indexOf('7') >= 0) {
        evaluationVariable += 'Quix';
    }
    arrayNumbers.push(evaluationVariable);
};
console.log(arrayNumbers);