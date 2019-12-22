let numbers = 2525;

if (typeof numbers == 'string') {
    arabicConvert(numbers);
    let NarabicConvert = arabicConvert(numbers);
    console.log(NarabicConvert);
} else {
    romanConvert(numbers);
    let nromanConvert = romanConvert(numbers)
    console.log(nromanConvert);

}

function arabicConvert(numbers) {
    const NR = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let resultado = 0;
    let cont = 0;
    let rep = 0;
    numbers = numbers.toUpperCase();
    let firstValue = numbers[0];
    firstValue = NR[firstValue];

    for (let i of numbers) {
        if (i in NR == true) {
            let letr1 = i;
            for (let j of("V", "L", "D")) {
                let letr2 = j;
                if (letr1 == letr2) {
                    rep++;
                    if (rep == letr2) {
                        return "Algo va mal";

                    } else if (letr1 != letr2) {
                        rep = 0;
                    }
                }

            }
            let secondValue = NR[i];
            if (firstValue == secondValue) {
                cont++;
                if (cont <= 3) {
                    resultado += secondValue;

                } else {
                    return "algo no esta bien"
                }

            } else if (firstValue > secondValue) {
                resultado += secondValue
            } else {
                for (let t of("V", "L", "D")) {
                    if (NR[t] == firstValue) {
                        return "asi no"
                    } else if (NR[t] == secondValue) {
                        return "asi tampoco"
                    } else {
                        resultado += secondValue - (2 * firstValue);
                        break;
                    }
                }
            }
            if (firstValue != secondValue) {
                cont = 1
            }
            firstValue = secondValue
        } else {
            return "que no que no"
        }
    }
    return resultado;
}




function romanConvert(numbers) {
    let resultado = '';

    while (numbers >= 1000) {
        numbers -= 1000;
        resultado += 'M'

    };
    if ((numbers + 100) >= 1000) {
        numbers += 100;
        resultado += 'C';
        numbers -= 1000;
        resultado += 'D';
    };

    while (numbers >= 500) {
        numbers -= 500;
        resultado += 'D';

    }
    if ((numbers + 100) >= 500) {
        numbers += 100;
        resultado += 'C';
        numbers -= 500;
        resultado += 'D';
    }
    while (numbers >= 100) { //C en el diccionario
        numbers -= 100;
        resultado += 'C';

    }
    while (numbers >= 50) {
        numbers -= 50;
        resultado += 'L';

    }
    if ((numbers + 10) >= 50) {
        numbers += 10;
        resultado += 'X';
        numbers -= 50;
    }
    while (numbers >= 10) {
        numbers -= 10;
        resultado += 'X';

    }
    if ((numbers + 1) >= 10) {
        numbers += 1;
        resultado += 'I';
        numbers -= 10;
    };
    while (numbers >= 5) {
        numbers -= 5;
        resultado += 'V';

    };
    if ((numbers + 1) >= 5) {
        numbers += 1;
        resultado += 'I';
        numbers -= 5;
    };
    while (numbers >= 1) {
        numbers -= 1;
        resultado += 'I';

    };
    return resultado;
}



//arabicConvert( numbers);