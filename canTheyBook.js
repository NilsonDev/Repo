/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 * @param {number} babiesCount
 *
 * @returns {boolean}
 */
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    // Verifica se deve haver pelo menos um adulto
    if (adultsCount < 1) {
        return false; // Não pode ter reserva sem adultos
    }

    // Verifica se o número de bebês excede o número de adultos
    if (babiesCount > adultsCount) {
        return false; // Não pode haver mais bebês do que adultos
    }

    // Verifica se as crianças estão dentro do limite por adulto
    if (childrenCount > 2 * adultsCount) {
        return false; // Não pode haver mais de 2 crianças por adulto
    }

    // Verifica se o total de pessoas não excede 9
    const totalPeople = adultsCount + childrenCount + babiesCount;
    if (totalPeople > 9) {
        return false; // Excede o limite total de pessoas
    }

    // Verifica se há mais de 2 crianças e bebês no total por adulto
    const totalChildrenAndBabies = childrenCount + babiesCount;
    if (totalChildrenAndBabies > 2 * adultsCount) {
        return false; // Não pode haver mais de 2 crianças e bebês no total por adulto
    }

    return true; // Se todas as condições forem satisfeitas, a reserva é permitida
}

// Test cases
console.log(canTheyBook(0, 1, 1)); // false - 0 adultos, 1 criança, 1 bebê.
console.log(canTheyBook(2, 3, 1)); // true - 2 adultos, 3 crianças, 1 bebê.
console.log(canTheyBook(2)); // true - 2 adultos.
console.log(canTheyBook(9)); // false - 9 adultos.
console.log(canTheyBook(8, 1)); // true - 8 adultos, 1 criança.
console.log(canTheyBook(8, 0, 1)); // true - 8 adultos, 0 crianças, 1 bebê.
console.log(canTheyBook(4, 2, 3)); // false - 4 adultos, 2 crianças, 3 bebês.
console.log(canTheyBook(1, 2, 1)); // false - 1 adulto, 2 crianças, 1 bebê.
console.log(canTheyBook(1, 1, 1)); // true - 1 adulto, 1 criança, 1 bebê.
console.log(canTheyBook(1, 0, 2)); // false - 1 adulto, 0 crianças, 2 bebês.
console.log(canTheyBook(1, 2, 0)); // false - 1 adulto, 2 crianças.
console.log(canTheyBook(1, 1, 0)); // true - 1 adulto, 1 criança.
console.log(canTheyBook(1, 0, 1)); // true - 1 adulto, 0 crianças, 1 bebê.
console.log(canTheyBook(2, 2, 1)); // true - 2 adultos, 2 crianças, 1 bebê.
console.log(canTheyBook(2, 3, 2)); // false - 2 adultos, 3 crianças, 2 bebês.
console.log(canTheyBook(8, 1, 0)); // true - 8 adultos, 1 criança.
console.log(canTheyBook(8, 0, 1)); // true - 8 adultos, 0 crianças, 1 bebê.
console.log(canTheyBook(8, 1, 1)); // false - 8 adultos, 1 criança, 1 bebê (total 10).
console.log(canTheyBook(9, 0, 0)); // false - 9 adultos.
console.log(canTheyBook(7, 2, 1)); // true - 7 adultos, 2 crianças, 1 bebê.
console.log(canTheyBook(7, 3, 1)); // false - 7 adultos, 3 crianças, 1 bebê (total 11).